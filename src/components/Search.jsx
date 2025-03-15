import React from 'react'

const Search = ({seachTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="../../public/search.svg" alt="search"/>
                <input type="text"
                       placeholder="Search... through thousands of movies"
                       value={seachTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
export default Search
