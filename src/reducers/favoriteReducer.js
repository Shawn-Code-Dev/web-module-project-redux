import {ADD_FAVORITE, DEL_FAVORITE} from '../actions/favoriteActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DEL_FAVORITE:
            return{
                ...state,
                favorites: state.favorites.filter((movie)=>{
                    return movie.id !== action.payload;
                })
            }
        default:
            return state;
    }
}

export default reducer