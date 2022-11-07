import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getTonData} from "../api/fetch";


import Search from "./headerComponents/search";

import './style.css'
import NavBar from "./headerComponents/navBar";
import SearchMobile from "./headerComponents/searchMobile";

const logo = require( '../img/logo_header.png')
const dark = require( '../img/dark_mode.png')


const Header:React.FC = () => {
    const [Searchbutton ,setSearchbutton] = useState(false)
    const onChangeSearch = (bool:boolean) => {
        setSearchbutton(bool)
    }
    const state:any = useSelector(state => state)
    const dispatch = useDispatch()
    const [isMenuOpen, toggleMenu] = useState(false);
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
        <div>
            <div className="header">
                <div className="header_1">
                        <Link className="logo_header" to="/"><img src={logo} alt=""/>
                            Capton
                        </Link>
                    <NavBar />
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
                        <Search />
                    </div>
                    <div className="serch_svg" style={{display: 'flex'}}>
                    <button
                            className="search_svg_button"
                            onClick={() => {
                                setSearchbutton(true)
                            }}
                        ><svg style={{ width: '24px', height: '24px'}} fill="none">
                            <svg></svg>
                            <path d="M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                        <input style={{opacity: 0, position: 'absolute'}}
                               onChange={(e) => {toggleMenu(e.target.checked)}} id="menu__toggle" type="checkbox" />
                        <label htmlFor="menu__toggle" className="burger_button">
                            <span></span>
                        </label>
                    </div>
                </div>
                <div className="header_2">
                    <p>Collections: <span>&nbsp; {state.tonState.collections}</span></p>
                    <p>Tokens: <span>&nbsp; {state.tonState.tokens}</span></p>
                    <p>Markets: <span>&nbsp; {state.tonState.markets}</span></p>
                    <p>Market Cap: <span>&nbsp; {currencyIcon}{state.tonState.marketCap}</span></p>
                    <p>24h vol: <span>&nbsp; {currencyIcon}{state.tonState.vol24}</span></p>
                    <p>Rewards: <span>&nbsp; {state.tonState.rewards}</span></p>
                </div>
            </div>
            <div
                        className={"menu_mobile" + (isMenuOpen ? " menu_mobile_active" : '')}
                    >
                        <NavBar />
                        <div className="header_options_mob">
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
                            <button className='close_menu_mob' onClick={() => toggleMenu(false)}>
                                <p className='close_menu_mob_l'></p>
                                <p className='close_menu_mob_r'></p>
                            </button>
                        </div>
                    </div>
                    <SearchMobile  setSearchbutton={onChangeSearch} searchbutton={Searchbutton}/>
        </div>
    );
};

export default Header;