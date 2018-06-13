import React from "react";
import { View, Text, Dimensions } from "react-native";
import { graphql, createFragmentContainer } from "react-relay";

const { width, height } = Dimensions.get("window");
const padding = 20;

type Props = {
  todo: {
    title: string,
    description: string,
    completed: boolean
  }
};

class Todo extends React.Component<Props> {
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
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{completed}</Text>
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
