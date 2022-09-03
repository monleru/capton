const FETCH_CURRENCY = "FETCH_CURRENCY"
const FETCH_LANGUAGE = "FETCH_LANGUAGE"

interface dataState {
    currency?: string,
    language?: string
}
interface dataAction {
    type: string,
    payload?: any
}
const initialState: dataState = {
    currency: "USD",
    language: "English"
}

export const dataReducer = (state = initialState, action: dataAction): dataState => {
    switch (action.type) {
        case FETCH_CURRENCY:
            return {
                language: state.language,
                currency: action.payload
            }
        case FETCH_LANGUAGE:
            return {
                language: action.payload,
                currency: state.language,
            }
        default: return state
    }
}