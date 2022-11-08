import {api} from "./api";
import {useSelector} from "react-redux";

export const getDrops = async (changeCards:any) =>{
    fetch(`${api}/posts`).then(data => data.json()).then(data => changeCards(data))
}
export const getDrop = (id:string | undefined, changeCards:any) => {
    fetch(`${api}/posts/${id}`).then(data=>data.json()).then(data => changeCards(data))
}
export const getTonData = (currenct:string, disptach:any) => {
    fetch(`https://captons.herokuapp.com/api/data/${currenct}`)
        .then(data=>data.json())
        .then(data => {
            let datas = {
                marketCap: data.data[11419].quote[currenct].market_cap.toFixed(0),
                vol24: data.data[11419].quote[currenct].volume_24h.toFixed(0),
                rewards: "5",
                rank: data.data[11419].cmc_rank,
                price: data.data[11419].quote[currenct].price.toFixed(2),
                priceChange: data.data[11419].quote[currenct].percent_change_24h.toFixed(2),
                volume_change_24h: data.data[11419].quote[currenct].volume_change_24h.toFixed(2)
            }
            disptach({type: "FETCH_DATA", payload: datas})
        })
}