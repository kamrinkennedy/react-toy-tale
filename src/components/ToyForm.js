import React, { useState } from "react";
import { connect } from "react-redux";
import { createToy } from "../actions/toyActions";

function ToyForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const toy = {
      name: name,
      image: image,
      likes: 0,
    };

    props.createToy(toy)


    // reset the form
    setName("");
    setImage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Image:</label>
        <input
          name="image"
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <input type="submit" value="Add Toy" />
      </form>
    </div>
  );
}

export default connect(null, { createToy })(ToyForm);
