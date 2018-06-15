import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import TodoListScreen from "./components/TodoListScreen";
import CreateTodo from "./components/CreateTodo";

export default createStackNavigator(
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
