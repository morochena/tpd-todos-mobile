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
      this.props.navigation.goBack();
    };

    const onError = () => {
      this.props.navigation.goBack();
    };

    CreateTodoMutation.commit(input, onCompleted, onError);
  };

  render() {
    const { title, description } = this.state;

    return (
      <LinearGradient
        colors={["#FBD786", "#f7797d"]}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={{ flex: 1 }}
      >
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
            style={{
              margin: 5,
              height: 40,
              borderColor: "gray",
              borderWidth: 1
            }}
          />
          <TextInput
            name="description"
            placeholder="Description"
            multiline={true}
            numberOfLines={4}
            maxLength={140}
            value={description}
            onChangeText={value => this.setState({ description: value })}
            style={{
              margin: 5,
              height: 40 * 4,
              borderColor: "gray",
              borderWidth: 1
            }}
          />
          <TouchableOpacity
            style={{
              height: height * 0.08,
              width: width * 0.7,
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e67e22",
              borderRadius: 5,
              alignSelf: "center"
            }}
            onPress={() => this.handleCreateTodo()}
          >
            <Text style={{ color: "white" }}>Create Todo</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: height * 0.08,
            width: width * 0.7,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e67e22",
            borderRadius: 5,
            alignSelf: "center"
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={{ color: "white" }}>Back</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
