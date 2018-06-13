import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { graphql, createFragmentContainer, QueryRenderer } from "react-relay";
import environment from "../Environment";

import Todo from "./Todo";

const { width, height } = Dimensions.get("window");

class TodoList extends React.Component {
  render() {
    const { allTodos } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          snapToInterval={width}
          horizontal
          style={{ height: height * 0.8 }}
          decelerationRate={0}
          snapToAlignment={"center"}
          showsHorizontalScrollIndicator={false}
        >
          {allTodos.map(todo => <Todo key={todo.id} todo={todo} />)}
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
          >
            <Text style={{ color: "white" }}>Create New Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const query = graphql`
  query TodoListQuery {
    allTodos {
      id
      title
      description
      completed
    }
  }
`;

export default () => (
  <QueryRenderer
    environment={environment}
    variables={{}}
    query={query}
    render={({ error, props }) => {
      if (error) {
        //Here we pass our error view in case of query errors or fetch failture
        return (
          <View>
            <Text>Error!</Text>
          </View>
        );
      } else if (props) {
        //Here we pass our component that should be rendered
        return <TodoList {...props} />;
      }
      //Here goes our activity indicator or loading view
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }}
  />
);