import React, { Component} from 'react';
import './Search.css'
import { BsSearch } from 'react-icons/bs';

class Search extends Component {

    render() {
        return (
            <>
            <section className='search__input'>
                <h2>Looking for something specific?</h2>
                <form>
                    <BsSearch size='2em' className='search__icon'/> 
                    <input type='text' id='anime__input' placeholder='Search a title...' autoComplete='none'/>
                </form> 
            </section>
            </>
        )
    }
}

export default Search;