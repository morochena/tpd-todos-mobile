import { connect } from "react-redux";

import Todo from "../components/Todo";
import { selectTodo } from "../actions";

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        selectTodo: id => {
            dispatch(selectTodo(id));
        }
    };
};

const TodoReduxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);

export default TodoReduxContainer;
