import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import { graphql, createFragmentContainer, QueryRenderer } from "react-relay";
import { LinearGradient } from "expo";

import CreateTodoMutation from "../mutations/CreateTodoMutation.js";

const { width, height } = Dimensions.get("window");
const padding = 20;

export default class CreateTodo extends React.Component {
  state = {
    title: "",
    description: ""
  };

  handleCreateTodo = () => {
    const { title, description } = this.state;

    const input = {
      title,
      description
    };

    const onCompleted = () => {
      console.log("Success!");
    };

    const onError = () => {
      console.log("Oh noes!");
    };

    CreateTodoMutation.commit(input, onCompleted, onError);
  };

  render() {
    const { title, description } = this.state;

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
        <TextInput
          name="title"
          placeholder="Title"
          value={title}
          onChangeText={value => this.setState({ title: value })}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
        <TextInput
          name="description"
          placeholder="Description"
          value={description}
          onChangeText={value => this.setState({ description: value })}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
        <TouchableOpacity onPress={() => this.handleCreateTodo()}>
          <Text>Create Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
