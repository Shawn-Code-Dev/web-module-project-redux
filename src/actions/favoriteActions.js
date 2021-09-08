export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DEL_FAVORITE = 'DEL_FAVORITE'
export const addFav = (movie) => {
    return({type:ADD_FAVORITE, payload:movie})
}
export const delFav = (id) => {
    return({type: DEL_FAVORITE, payload:id});
}