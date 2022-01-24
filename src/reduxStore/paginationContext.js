const CHANGE_PAGE = "CHANGE_PAGE"


export const paginationHandler = (currPage, perPage) => ({
    type: CHANGE_PAGE,
    payload: {currPage, perPage}
})


const paginationReducer = (currPage = 1, action) => {
    switch(action.type) {
        case CHANGE_PAGE:
            return action.payload.currPage*action.payload.perPage
        default:
            return currPage
    }
}

export {paginationReducer}