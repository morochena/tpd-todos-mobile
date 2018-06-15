import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { graphql, createFragmentContainer, QueryRenderer } from "react-relay";
import { LinearGradient } from "expo";
import hoistStatics from "hoist-non-react-statics";

import environment from "../Environment";

import Todo from "./Todo";

const { width, height } = Dimensions.get("window");

class TodoList extends React.Component {
  render() {
    const todos = this.props.allTodos;

    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#FBD786", "#f7797d"]}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={{ flex: 1 }}
        >
          <ScrollView
            snapToInterval={width}
            horizontal
            style={{ height: height * 0.8 }}
            decelerationRate={0}
            snapToAlignment={"center"}
            showsHorizontalScrollIndicator={false}
          >
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
          </ScrollView>
          <View
            style={{
              height: height * 0.2,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: height * 0.08,
                width: width * 0.7,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#e67e22",
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate("CreateTodo")}
            >
              <Text style={{ color: "white" }}>Create New Todo</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default createFragmentContainer(
  TodoList,
  graphql`
    fragment TodoList_allTodos on Todo @relay(plural: true) {
      ...Todo_todo
    }
  `
);
