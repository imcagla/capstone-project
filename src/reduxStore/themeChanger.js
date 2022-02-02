const CHANGETHEME = "CHANGETHEME";

// ACTION CREATERS
export const changeTheme = (value) => {
    return {
        type: CHANGETHEME,
        payload: value
    } 
}

// REDUCER
const themeReducer = (theme = "light", action) => {
    switch(action.type) {
        case CHANGETHEME:
            return theme === "dark" ? "light" : "dark"
        default:
            return theme
    }
}


export default themeReducer