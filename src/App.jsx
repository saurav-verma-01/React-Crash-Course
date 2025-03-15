import React from 'react'
import Search from "./components/Search.jsx";

const App = () => {
    const [searchTerm, setSearchTerm] = React.useState("Super Super SuperMan");

    return (
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <header>
                    <img src="../public/hero-img.png" alt="hero banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
                </header>
                <Search seachTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </main>
    )
}
export default App
