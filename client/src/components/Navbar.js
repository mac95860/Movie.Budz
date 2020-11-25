import React from 'react';

export default function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Movie.Budz</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                
                <a class="nav-link" href="/signup">Sign Up</a>
                <a class="nav-link" href="/login">Login</a>
               
                </div>
            </div>
        </nav>
    )
}