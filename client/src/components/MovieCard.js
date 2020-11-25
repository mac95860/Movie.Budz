import React from 'react';
import './MovieCard.css';

export default function MovieCard() {
    return (
        <div>
            <div className = "movie">
                <div className = "movie_info">
                    <h4 className = "movie_title">Star Wars: The Empire Strikes Back</h4>
                    <p className = "rating">Rating: </p>
                    <div className = "imageBox">
                    <img className = "movie_poster" src = "/images/starwars.png" alt = "poster"/>
                    </div>
                </div>
                <div className = "userButtons">
                    <button className = "primary">rate</button>
                    <button className = "secondary"> Add to Favorites </button>
                </div>
            </div>
        
        </div>
    )
}
