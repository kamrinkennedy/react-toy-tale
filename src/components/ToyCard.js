import React from "react";

function ToyCard(props) {
  const {name,likes,image,id} = props.toy


  return (
    <div className="card" id={`toy-${id}`}>
      <h2>{name}</h2>
      <img src={image} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={() => props.addLike(props.toy)} className="like-btn">Like &lt;3</button>
    </div>
  );
}

export default ToyCard;
