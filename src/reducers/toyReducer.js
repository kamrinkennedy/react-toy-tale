export default function toyReducer(
  state = { toys: [], loading: true },
  action
) {
  switch (action.type) {
    case "GOT_TOYS":
      return { ...state, toys: action.payload, loading: false };
    case "ADDED_TOY":
      return { ...state, toys: [...state.toys, action.payload] };
    case "UPDATED_TOY":
      let idx = state.toys.findIndex((toy) => toy.id === action.payload.id);
      return {
        ...state,
        toys: [
          ...state.toys.slice(0, idx),
          action.payload,
          ...state.toys.slice(idx + 1),
        ],
      };
    default:
      return state;
  }
}
