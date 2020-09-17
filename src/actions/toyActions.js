// normal actions that return objects
const gotToys = (toys) => {
  console.log("in got toys ACTION");
  console.log("FIFTH")
  return { type: "GOT_TOYS", payload: toys };
};

const addToy = (toy) => ({ type: "ADDED_TOY", payload: toy });




// async actions groups together
export const fetchToys = () => {
    return (dispatch) => {
        console.log("SECOND")
        dispatch({type: "FETCHING_TOYS"})
        fetch("http://localhost:3000/toys")
        .then((res) => res.json())
        .then((data) => {
        // dispatch an action to tell my reducer I have toys to add to the store
           dispatch(gotToys(data))
           console.log("LAST")
        });
        console.log("THIRD")
    }
}

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
    }
}
