const SET_SELECTED_TODO = "SET_SELECTED_TODO";

const initialState = {
  selectedTodo: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_TODO:
      return { ...state, selectedTodo: action.todoId };
    default:
      return state;
  }
}
