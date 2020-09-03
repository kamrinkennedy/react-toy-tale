import React from 'react'

function ToyCard(props){
    return(
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.image} className="toy-avatar"/>
            <p>{props.likes} Likes </p>
            <button className="like-btn">Like &lt;3</button>
        </div>
    )
}

export default ToyCard