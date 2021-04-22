import React, { Component} from 'react';
import './Search.css'


class Search extends Component {

    render() {
        return (
            <>
            <form>
                <input type='text' placeholder='Search a title...'/>
            </form>
            </>
        )
    }
}

export default Search;