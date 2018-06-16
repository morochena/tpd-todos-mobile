export const SET_SELECTED_TODO = "SET_SELECTED_TODO";

export function selectTodo(id) {
  return {
    type: SET_SELECTED_TODO,
    id
  };
}
