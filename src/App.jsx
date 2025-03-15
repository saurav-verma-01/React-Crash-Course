import React, {useEffect, useState} from 'react'
import Search from "./components/Search.jsx";

const API_BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_KEY
    }
}

const App = () => {
    const [searchTerm, setSearchTerm] = React.useState("Super Super SuperMan");
    const [errorMessage, setErrorMessage] = useState('');

    // Fetching Movies Function
    const fetchMovies = async () => {
        try {
            const endpoint = `${API_BASE_URL}?sort_by=popularity.desc`;

            const res = await fetch(endpoint, API_OPTIONS);

            if(!res.ok) {
                throw new Error("Failed to fetch movies from API");
            }

            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.error(`Error Fetching Movies: ${error}`);
            setErrorMessage('Error Fetching movies, Please try again later');
        }
    }

    useEffect(() => {
    fetchMovies();
    } , [])
    return (
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <header>
                    <img src="../public/hero-img.png" alt="hero banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

                    <Search seachTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>
                <section className="all-movies">
                    <h2>All Movies</h2>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p> }
                </section>
            </div>
        </main>
    )
}
export default App
