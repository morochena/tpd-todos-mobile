export const SET_SELECTED_TODO = "SET_SELECTED_TODO";

export function selectTodo(todo) {
  return {
    type: SET_SELECTED_TODO,
    todo
  };
}
