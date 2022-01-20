const CHANGETHEME = "CHANGETHEME";

// ACTION CREATERS
export const changeTheme = (value = true) => {
    return {
        type: CHANGETHEME,
        payload: value
    } 
}

// REDUCER
const themeReducer = (theme = true, action) => {
    switch(action.type) {
        case CHANGETHEME:
            return !action.payload
        default:
            return theme
    }
}


export default themeReducer