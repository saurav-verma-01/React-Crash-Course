import React, {useEffect, useState} from 'react';

const Card = ({title}) => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log(`the movie ${title} has been clicked : ${count} times.`);
    }, [liked]);

    return (
        <div className="card" onClick={() => {setCount( (prev) => prev + 1)}}    >
            <p>{title} <br/> {count}</p>
            <button className="btn" onClick={() => setLiked(!liked)} >
                {liked ? "Liked" : "🤍"}
            </button>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <h2>This is a React Functional Component.</h2>
         <div className="card-container">
             <Card title="Avengers Endgame" />
             <Card title="RRR" />
             <Card title="Black Adam" />
             <Card title="Pathan" />
             <Card title="Vikram" />
         </div>
        </div>
    )
}

export default App;