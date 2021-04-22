import React, { Component } from 'react';
import './Trending.css';

class Trending extends Component {
    render() {
        return (
            <>
                <section id='trending'>
                    <h1>Trending Anime</h1>
                    <div class='card__listing'>
                        <div class='test'>
                            <img src='https://media.kitsu.io/anime/poster_images/41370/small.jpg?1597699092' alt='aot'/>
                        </div>
                        
                        <div class='test'>
                            <img src='https://media.kitsu.io/anime/poster_images/7442/small.jpg?1597698856' alt='aot'/>
                        </div>

                        <div class='test'>
                            <img src='https://media.kitsu.io/anime/poster_images/7442/small.jpg?1597698856' alt='aot'/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Trending;