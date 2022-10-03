import React from "react";

class SearchBar extends React.Component {
  
    handleFormSubmit =(event)=>{
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input
                            onChange={this.props.searchMovieProp}
                            className="form-control w-100 mt-5"
                            type='text'
                            placeholder="Search a movie" />
                    </div>
                </div>

            </form>


        );
    }
}
export default SearchBar;