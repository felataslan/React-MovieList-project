import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {


    //Overview yani filmlerin açıklama kısmının karakter gösterim sayısını kısıtlama
    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength ) return string;
        return `${string.substring(0, maxLength)} ...`;
    }

        return (
            <div className="row">

                {props.movies.map((movie, i) => (

                    <div className="col-lg-3" key={i}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} style={{height:"340px"}} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body" style={{height:'200px'}}>
                                <h5 className="card-title" style={{position:'relative',top:'-10px'}} >{movie.name}</h5>
                                <p className="card-text" style={{fontSize:'13px'}}>{truncateOverview(movie.overview, 100)}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>

                                <Link type="button"
                                className="btn btn-md btn-outline-primary"
                                to={`edit/${movie.id}`}
                                >Edit </Link>


                                    <h2><span className="badge badge-info">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        )
}

export default MovieList;