import React from "react";

class Search extends React.Component {

    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchHandler(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {this.props.searchHandler(this.state.search, this.state.type)})
    }

    render () {
        return (
                <>
                    <div className="col s12">
                        <div className="input-field">
                            <input 
                                placeholder="Search" 
                                id="email_inline" 
                                type="search" 
                                className="validate"
                                value={this.state.search}
                                onChange={(e) => this.setState({search: e.target.value})}
                                onKeyDown={this.handleKey}
                            />
                            <button 
                                onClick={() => this.props.searchHandler(this.state.search)}
                                className="btn search-btn indigo darken-2"
                            >Search</button>
                        </div>
                    </div>
                    <div className="check">
                        <label>
                            <input 
                                name="group1" 
                                type="radio" 
                                data-type="all"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input 
                                name="group1" 
                                type="radio" 
                                data-type="movie"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input 
                                name="group1" 
                                type="radio" 
                                data-type="series"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series</span>
                        </label>
                        <label>
                            <input 
                                name="group1" 
                                type="radio" 
                                data-type="game"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'game'}
                            />
                            <span>Games</span>
                        </label>
                    </div>               
                </>

        )
    }

}

export default Search