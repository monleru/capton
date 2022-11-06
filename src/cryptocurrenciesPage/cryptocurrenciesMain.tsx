import React, {useEffect, useState} from 'react';
import './style.css'
import {useSelector} from "react-redux";
import Filter from "./filter";
import Collections from "./collections";
import HotCollections from "./hotCollections";
import NewCollections from "./newCollections";
const ton_logo = require('../img/ton_logo.png')
const new_collections = require('../img/new_collections.png')
const hot_collections = require('../img/hot_collections.png')


const CryptocurrenciesMain:React.FC = () => {
    const state:any = useSelector(state => state)
    const [date, setDate] = useState('day')
    const ChangeDate = (value:string) =>{
        setDate(value)
    }
    return (
        <div>
            <div className="main_page_ton_info_grid">
                <div className="h1_crypto_main">
                    <p>Today's NFT market<br/> stats on <span style={{'color': 'rgba(0, 136, 204, 1)'}}>The Open Network</span></p>
                </div>
                <div className="new_collections">
                    <p>
                        <img src={new_collections} alt=""/>
                        New Collections
                    </p>
                    <div>
                        <NewCollections />
                    </div>
                </div>
                <div className="hot_collections">
                    <p>
                        <img src={hot_collections} alt=""/>
                        Hot Collections
                    </p>
                    <HotCollections />
                </div>
                <div className="ton_state_div">
                    <div>
                        <img className="ton_logo" src={ton_logo} alt=""/>
                        <div className="ton_logo_text">
                            <p>TON <span>token</span></p>
                            <p style={{'color':'rgba(0, 136, 204, 1)'}}>The Open Network</p>
                        </div>
                    </div>
                    <div>
                        <p>Price:</p>
                        <p>{ state.data.currency == "USD" ? "$" : "₽"}
                            {state.tonState.price} <img src="" alt=""/>
                            <span
                                style={ state.tonState.priceChange > 0 ? {'color': 'green'} :
                                    state.tonState.priceChange < 0 ? {'color': 'red'} :
                                        {'color': '#FFFFFF'}}
                            >
                            {state.tonState.priceChange}%
                        </span>
                        </p>
                    </div>
                    <div>
                        <p>24vol:</p>
                        <p>{ state.data.currency == "USD" ? "$" : "₽"}
                            {state.tonState.vol24} <img src="" alt=""/>
                            <span
                                style={ state.tonState.volume_change_24h > 0 ? {'color': 'green'} :
                                    state.tonState.volume_change_24h < 0 ? {'color': 'red'} :
                                        {'color': '#FFFFFF'}}
                            >
                            {state.tonState.volume_change_24h}%
                        </span>
                        </p>
                    </div>
                    <div>
                        <p>Market Cap:</p>
                        <p>{ state.data.currency == "USD" ? "$" : "₽"}
                            {state.tonState.marketCap} <img src="" alt=""/>
                            <span
                                style={ state.tonState.priceChange > 0 ? {'color': 'green'} :
                                    state.tonState.priceChange < 0 ? {'color': 'red'} :
                                        {'color': '#FFFFFF'}}
                            >
                            {state.tonState.priceChange}%
                        </span>
                        </p>
                    </div>
                    <div>
                        <p>Supply:</p>
                        <p>
                            1,221,401,181 <img src="" alt=""/><
                            span style={{'color': 'rgba(0, 136, 204, 1)'}}>24%</span>
                        </p>
                    </div>
                    <div>
                        <p>Rank:</p>
                        <p>#{state.tonState.rank} <img src="" alt=""/><span></span></p>
                    </div>
                </div>
            </div>
            <Filter ChangeDate={ChangeDate} />
            <Collections date={date}/>
        </div>
    );
};

export default CryptocurrenciesMain;