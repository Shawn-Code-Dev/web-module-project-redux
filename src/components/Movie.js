import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie, addMovie } from '../actions/movieActions';
import { addFav } from '../actions/favoriteActions';

const mapStateToProps = (state) => {
    return({
        ...state,
        movies: state.movies
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: (id) => dispatch(deleteMovie(id)),
        addMovie: (movie) => dispatch(addMovie(movie)),
        addFav: (movie) => dispatch(addFav(movie))
    }
}

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movies = props.movieReducer.movies;
    const movie = movies.find(movie=>movie.id===Number(id));

    
    const handleDelete = (id) => {
        props.deleteMovie(id)
    }

    const handleFav = (movie) => {props.addFav(movie)}

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark" onClick={() => handleFav(movie)}>Favorite</span>
                            <span className="delete"><Link to='/movies'><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={() => handleDelete(movie.id)}/></Link></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);