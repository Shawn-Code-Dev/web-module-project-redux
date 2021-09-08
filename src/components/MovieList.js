import React from 'react';
import { connect } from 'react-redux'

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const mapStateToProps = (state) => {
    return({
        ...state,
        movies: state.movies
    })
}

const MovieList = (props)=> {
    const movies = props.movieReducer.movies;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>{props.title}</th>
                    <th>{props.director}</th>
                    <th>{props.genre}</th>
                    <th>{props.metascore}</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

export default connect(mapStateToProps)(MovieList);