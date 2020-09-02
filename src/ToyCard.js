import React from 'react'

function ToyCard(props){
    return(
        <div class="card">
            <h2>{props.name}</h2>
            <img src={props.image} class="toy-avatar"/>
            <p>{props.likes} Likes </p>
            <button class="like-btn">Like &lt;3</button>
        </div>
    )
}

export default ToyCard