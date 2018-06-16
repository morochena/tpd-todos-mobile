import { SET_SELECTED_TODO} from "../actions";

const initialState = {
  selectedTodo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_TODO:
      return { ...state, selectedTodo: action.todo};
    default:
      return state;
  }
}
