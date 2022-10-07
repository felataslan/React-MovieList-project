import React from "react";
import  {Link}  from "react-router-dom";

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();

    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-3">
                    <div className="col-10">
                        <input
                            onChange={this.props.searchMovieProp}
                            type='text' className="form-control mt-5"
                            placeholder="Search a movie"
                        />
                    </div>
                    <div className="col-2 " style={{ position: 'relative',top:'-32px',  left: '90%' }} >
                        <Link to={'/AddMovie'} type="button"
                            className="btn btn-md btn-danger "

                        > Add Movie
                        </Link>
                    </div>

                </div>


            </form>


        );
    }
}
export default SearchBar;