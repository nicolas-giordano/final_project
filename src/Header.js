import React, { Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <section className='header'>
                <span className='header__item'>
                    Home
                </span>
                <div className='categories__menu'>
                    <span id='category' className='header__item'>
                        Categories
                    </span>
                    <div className='dropdown'>
                        <a>Test1</a>
                        <a>Test2</a>
                        <a>Test3</a>
                    </div>
                </div>
                <span className='header__item'>
                    Top 100
                </span>
            </section>
        )
    }
}

export default Header;