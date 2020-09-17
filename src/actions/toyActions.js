// normal actions that return objects
export const addToysToStore = (toys) => ({ type: "GOT_TOYS", payload: toys });

export const addToy = (toy) => ({ type: "ADDED_TOY", payload: toy });

const updateToyLike = (toy) => ({ type: "UPDATED_TOY", payload: toy });

//async actions that return functions
export const fetchToys = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((data) => dispatch(addToysToStore(data)));
  };
};

export const createToy = (toy) => {
  return (dispatch) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toy),
    };

    fetch("http://localhost:3000/toys", configObj)
      .then((res) => res.json())
      .then((newToy) => dispatch(addToy(newToy)));
  };
};

export const addLike = (toy) => {
  return (dispatch) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...toy, likes: toy.likes + 1 }),
    };

    fetch(`http://localhost:3000/toys/${toy.id}`, configObj)
      .then((res) => res.json())
      .then((updatedToy) => dispatch(updateToyLike(updatedToy)));
  };
};
