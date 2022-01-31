const FILTER_BY_FAV_SEEN = "FILTER_BY_FAV_SEEN"
const SORT_BY_RELEASE_DATE = "SORT_BY_RELEASE_DATE"



export const filterByFavSeen = (movies, list) => ({
    type: FILTER_BY_FAV_SEEN,
    payload: { movies, list }
})

export const filterByReleaseDate = (movies) => ({
    type: SORT_BY_RELEASE_DATE,
    payload: movies 
})


export const filterTableReducer = (tableData = [], action) => {
    switch (action.type) {
        case FILTER_BY_FAV_SEEN:
            return action.payload.movies?.filter(item => action.payload.list?.includes(item?.data?.id))
        case SORT_BY_RELEASE_DATE:
            return action.payload?.sort((prev, curr) => curr?.release_date > prev?.release_date)
        default:
            return tableData
    }
}