import {connect} from "react-redux";

import EditTodo from "../components/EditTodo";
import {selectTodo} from "../actions";

const mapStateToProps = state => {
    return {
        selectedTodo: state.selectedTodoReducer.selectedTodo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

const EditTodoReduxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodo);

export default EditTodoReduxContainer;
