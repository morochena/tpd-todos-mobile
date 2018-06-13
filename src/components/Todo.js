import React from "react";
import { View, Text, Dimensions } from "react-native";
import { graphql, createFragmentContainer } from "react-relay";
import { MaterialIcons } from "@expo/vector-icons";

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
        <MaterialIcons name="edit" size={32} color="black" />
        <Text style={{ fontSize: 24, textAlign: "center" }}>{title}</Text>
        <Text style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
          {description}
        </Text>
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
