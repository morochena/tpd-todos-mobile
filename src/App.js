import React from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import TodoListRelayContainer from "./relay_containers/TodoListRelayContainer";
import CreateTodo from "./components/CreateTodo";
import EditTodoReduxContainer from "./redux_containers/EditTodoReduxContainer";

const store = configureStore();

const StackNavigator = createStackNavigator(
  {
    TodoList: {
      screen: TodoListRelayContainer
    },
    CreateTodo: {
      screen: CreateTodo
    },
    EditTodo: {
      screen: EditTodoReduxContainer
    }
  },
  {
    headerMode: "none",
    initialRouteName: "TodoList"
  }
);

export default () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
);
