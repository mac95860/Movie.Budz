import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import MovieSearch from '../components/MovieSearch'
import CreateMovieModal from '../components/CreateMovieModal';
import MovieCard from '../components/MovieCard';
import MovieTable from '../components/MovieTable';

export default function Home() {
    return (
        <>
        <Navbar/>
        <Jumbotron/>
        <MovieSearch/>
        <CreateMovieModal/>
        <MovieTable>
            <MovieCard/>
            <MovieCard/>
        </MovieTable>
        </>
    )
}