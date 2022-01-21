const TRENDPERIOD = "TRENDPERIOD";

// ACTION CREATERS
export const changeTrendingPeriod = (value) => {
    return {
        type: TRENDPERIOD,
        payload: value
    } 
}

// REDUCER
const trendReducer = (trendVal = "week", action) => {
    switch(action.type) {
        case TRENDPERIOD:
            return action.payload
        default:
            return trendVal
    }
}


export default trendReducer