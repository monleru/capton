const FETCH_DATA = "FETCH_DATA"
export interface dataState {
    collections: string | number,
    tokens: string | number,
    markets: string | number,
    marketCap: string | number,
    vol24: string | number,
    rewards: string | number,
    rank: string | number,
    price: string | number,
    priceChange: string | number,
    volume_change_24h: number
}
interface dataAction {
    type: string,
    payload?: any
}
const initialState: dataState = {
    collections: 3624,
    tokens: 24,
    markets: 12,
    marketCap: 0,
    vol24: 0,
    rewards: 0,
    rank: 0,
    price: 0,
    priceChange: 0,
    volume_change_24h: 0
}

export const tonState = (state = initialState, action: dataAction): dataState => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                collections: state.collections,
                tokens: state.tokens,
                markets: state.markets,
                marketCap: action.payload.marketCap,
                vol24: action.payload.vol24,
                rewards: action.payload.rewards,
                rank: action.payload.rank,
                price: action.payload.price,
                priceChange: action.payload.priceChange,
                volume_change_24h: action.payload.volume_change_24h
            }
        default: return state
    }
}