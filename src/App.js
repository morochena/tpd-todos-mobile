import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import TodoListScreen from "./components/TodoListScreen";
import CreateTodo from "./components/CreateTodo";

const store = configureStore();

const StackNavigator = createStackNavigator(
  {
    TodoListScreen: {
      screen: TodoListScreen
    },
    CreateTodo: {
      screen: CreateTodo
    }
  },
  {
    headerMode: "none",
    initialRouteName: "TodoListScreen"
  }
);

export default () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
);
