export default function toyReducer(
  state = { toys: [], loading: true }, action) {
  switch (action.type) {
    case "GOT_TOYS":
      return state
    case "ADDED_TOY":
      return state
    default:
      return state;
  }
}
