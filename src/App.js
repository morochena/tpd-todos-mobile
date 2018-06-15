import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

export default createStackNavigator(
  {
    TodoList: {
      screen: TodoList
    },
    CreateTodo: {
      screen: CreateTodo
    }
  },
  {
    headerMode: "none",
    initialRouteName: "TodoList"
  }
);
