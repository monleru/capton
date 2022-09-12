import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {dataState} from "../store/reducers/tonState";
import {getTonData} from "../api/fetch";

import './style.css'
import {clear} from "@testing-library/user-event/dist/clear";

const logo = require( '../img/logo_header.png')
const dark = require( '../img/dark_mode.png')


const Header:React.FC = () => {
    const state:any = useSelector(state => state)
    const dispatch = useDispatch()
    const [isMenuOpen, toggleMenu] = useState(false);
    const [currencyIcon, setCurrencyIcon] = useState<string>('$')
    const [value, setValue] = useState('');
    const [searchbutton, setSearchbutton] = useState(false)
    const [collections, setcollections] = useState<any[]>([])
    const [collectionsLoader, setCollectionsLoader] = useState(false)
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
    const searchCollections = useDebounce(async(value:string) => {
        fetch(`http://captons.herokuapp.com/api/search?name=${value}`)
            .then(data => data.json())
            .then(data => {
                setcollections(data.data.collections.edges)
                setCollectionsLoader(false)})
    }, 500)
    console.log(collections)
    function useDebounce(callback:any, delay:any) {
        const timer = useRef<any>(null);

        const debounceCallback = useCallback((...args: any) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }

        timer.current = setTimeout(() => {
                callback(...args)
           }, delay)
        }, [callback, delay])

        return debounceCallback
    }
    const changeHadler = useCallback(async(e:any) => {
        setValue(e.target.value)
        setCollectionsLoader(true)
        setcollections([])
        searchCollections(e.target.value)
    },[])

    return (
        <div>
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
                            <select onChange={changeHadler} name="" id="">
                                <option value="USD">USD</option>
                                <option value="RUB">RUB</option>
                            </select>
                        </div>
                        <select onChange={(e) => {setLanguage(e.target.value)}} name="" id="">
                            <option value="English">English</option>
                            <option value="Русский">Русский</option>
                        </select>
                        <button className="dark_button"><img src={dark} alt=""/></button>
                        <div>
                            {searchbutton === false ? <button
                                    onClick={() => {
                                        setSearchbutton(true)
                                    }}
                                >Search</button>
                                : <input
                                    onBlur={(e) => { setValue(''); setcollections([]) } }
                                    value={value}
                                    onChange={changeHadler}
                                    type="text" placeholder="Search"></input>
                            }
                            {searchbutton === false ? '' :
                            <div className="search_collections_div">
                                {collectionsLoader ? "Loading..." : ""}
                                {collections.map(post =>
                                    <div>
                                        <img
                                            src={post.node.previewImage != null ? post.node.previewImage.image.baseUrl : ''} alt=""/>
                                        <a href={`/collection/${post.node.name}`}>{post.node.name}</a>
                                    </div>
                                )}

                            </div>
                            }
                        </div>
                    </div>
                    <input style={{opacity: 0, position: 'absolute'}}
                           onChange={(e) => {toggleMenu(e.target.checked)}} id="menu__toggle" type="checkbox" />
                    <label htmlFor="menu__toggle" className="burger_button">
                        <span></span>
                    </label>
                    <div
                        className={"menu_mobile" + (isMenuOpen ? " menu_mobile_active" : '')}
                    >
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
                            <input type="text" placeholder="Search"/>
                        </div>
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
        </div>
    );
};

export default Header;