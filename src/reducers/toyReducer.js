export default function toyReducer(
  state = { toys: [], loading: false }, action) {
  switch (action.type) {
    case "GOT_TOYS":
      console.log("SIXTH")
      return {loading: false, toys: action.payload}
    case "FETCHING_TOYS":
      return {...state, loading: true}
    case "ADDED_TOY":
      return {...state, toys: [...state.toys, action.payload]}
    default:
      return state;
  }
}
