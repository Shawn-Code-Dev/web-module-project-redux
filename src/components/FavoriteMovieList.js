import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {delFav} from './../actions/favoriteActions';

const mapStateToProps = (state) => {
    return({
        ...state,
        movies: state.movies
    })
}

const FavoriteMovieList = (props) => {
    const favorites = props.favoriteReducer.favorites;
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={()=>props.delFav(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


export default connect(mapStateToProps, {delFav})(FavoriteMovieList);