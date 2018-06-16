import { connect } from "react-redux";

import EditTodo from "./EditTodo";
import { selectTodo } from "../actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectTodo: id => {
      dispatch(selectTodo(id));
    }
  };
};

const EditTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo);

export default EditTodoContainer;
