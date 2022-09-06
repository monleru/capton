import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {dataState} from "../store/reducers/tonState";
import {getTonData} from "../api/fetch";
import './style.css'
const logo = require( '../img/logo_header.png')
const dark = require( '../img/dark_mode.png')

const Header:React.FC = () => {
    const state:any = useSelector(state => state)
    const dispatch = useDispatch()
    const [currencyIcon, setCurrencyIcon] = useState<string>('$')
    const setLanguage = (lang:string) => {
        dispatch({type: "FETCH_LANGUAGE", payload: lang})
    }
    const setCurrency = (lang:string) => {
        dispatch({type: "FETCH_CURRENCY", payload: lang})
        lang == "RUB" ? setCurrencyIcon('₽') : setCurrencyIcon('$')
        getTonData(lang, dispatch)
    }
    useEffect(() =>{
        getTonData(state.data.currency, dispatch)
    },[])
    return (
        <>
            <div className="header">
                <div className="header_1">
                        <Link className="logo_header" to="/"><img src={logo} alt=""/>
                            Capton
                        </Link>
                    <ul>
                        <li>
                            <NavLink to="/Cryptocurrencies">Cryptocurrencies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gram_talks">Gram Talks</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events">Events</NavLink>
                        </li>
                    </ul>
                    <div className="header_options">
                        <div style={{'display': 'flex'}}>
                            <span className="currency_icon">{currencyIcon}</span>
                            <select onChange={(e) => {setCurrency(e.target.value)}} name="" id="">
                                <option value="USD">USD</option>
                                <option value="RUB">RUB</option>
                            </select>
                        </div>
                        <select onChange={(e) => {setLanguage(e.target.value)}} name="" id="">
                            <option value="English">English</option>
                            <option value="Русский">Русский</option>
                        </select>
                        <button className="dark_button"><img src={dark} alt=""/></button>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className="header_2">
                    <p>Collections: <span> {state.tonState.collections}</span></p>
                    <p>Tokens: <span> {state.tonState.tokens}</span></p>
                    <p>Markets: <span> {state.tonState.markets}</span></p>
                    <p>Market Cap: <span> {currencyIcon}{state.tonState.marketCap}</span></p>
                    <p>24h vol: <span> {currencyIcon}{state.tonState.vol24}</span></p>
                    <p>Rewards: <span> {state.tonState.rewards}</span></p>
                </div>
            </div>
        </>
    );
};

export default Header;