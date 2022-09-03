import React from 'react';
import './style.css'
import {useSelector} from "react-redux";
const CryptocurrenciesMain:React.FC = () => {
    const state:any = useSelector(state => state)
    console.log(state)
    return (
        <div>
            <div className="h1_crypto_main">
                <p>Today's NFT market<br/> stats on <span style={{'color': 'rgba(0, 136, 204, 1)'}}>The Open Network</span></p>
            </div>
            <div>
                <p>New Collections</p>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
            </div>
            <div>
                <p>Hot Collections</p>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt=""/>
                    <p>Ton <span>token</span></p>
                    <p>The Open Network</p>
                </div>
                <div>
                    <p>Price:</p>
                    <p>{ state.data.currency == "USD" ? "$" : "₽"}
                        {state.tonState.price} <img src="" alt=""/>
                        <span
                            style={ state.tonState.priceChange > 0 ? {'color': 'green'} :
                                state.tonState.priceChange < 0 ? {'color': 'red'} :
                                    {'color': '#FFFFFF'}}
                        >{state.tonState.priceChange}</span>
                    </p>
                </div>
                <div>
                    <p>24vol:</p>
                    <p>{ state.data.currency == "USD" ? "$" : "₽"}
                        {state.tonState.vol24} <img src="" alt=""/><span>3.56</span>
                    </p>
                </div>
                <div>
                    <p>Market Cap:</p>
                    <p>{ state.data.currency == "USD" ? "$" : "₽"}
                        {state.tonState.marketCap} <img src="" alt=""/><span>3.56</span></p>
                </div>
                <div>
                    <p>Supply:</p>
                    <p>
                        1,221,401,181 <img src="" alt=""/><span>24%</span>
                    </p>
                </div>
                <div>
                    <p>Rank:</p>
                    <p>{state.tonState.rank} <img src="" alt=""/><span>3.56</span></p>
                </div>
            </div>
        </div>
    );
};

export default CryptocurrenciesMain;