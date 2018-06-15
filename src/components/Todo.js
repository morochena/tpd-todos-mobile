import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { graphql, createFragmentContainer } from "react-relay";
import { MaterialIcons } from "@expo/vector-icons";

import DeleteTodoMutation from "../mutations/DeleteTodoMutation";
import ToggleTodoMutation from "../mutations/ToggleTodoMutation";

const { width, height } = Dimensions.get("window");
const padding = 20;

class Todo extends React.Component {
  handleDeleteTodo = () => {
    const input = {
      id: this.props.todo.id
    };

    const onCompleted = () => {};

    const onError = () => {};

    DeleteTodoMutation.commit(input, onCompleted, onError);
  };

  handleToggleTodo = () => {
    const input = {
      id: this.props.todo.id
    };

    const onCompleted = () => {};

    const onError = () => {};

    ToggleTodoMutation.commit(input, onCompleted, onError);
  };

  render() {
    const { id, title, description, completed } = this.props.todo;

    return (
      <View
        style={{
          width: width - padding * 2,
          height: height - padding * 10,
          margin: padding,
          marginTop: padding * 3,
          backgroundColor: "#efefef",
          borderRadius: 3,
          padding: padding,
          shadowColor: "#222",
          shadowRadius: 3,
          shadowOffset: { width: 4, height: 4 }
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => this.handleDeleteTodo()}
          >
            <MaterialIcons name="edit" size={32} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => this.handleDeleteTodo()}
          >
            <MaterialIcons name="delete" size={32} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 24, textAlign: "center" }}>{title}</Text>
        <Text style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
          {description}
        </Text>
        <TouchableOpacity
          onPress={() => this.handleToggleTodo()}
          style={{ alignSelf: "center", alignItems: "center" }}
        >
          {completed && (
            <MaterialIcons name="check-box" size={128} color="green" />
          )}
          {!completed && (
            <MaterialIcons
              name="check-box-outline-blank"
              size={128}
              color="black"
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default createFragmentContainer(
  Todo,
  graphql`
    fragment Todo_todo on Todo {
      id
      title
      description
      completed
    }
  `
);
