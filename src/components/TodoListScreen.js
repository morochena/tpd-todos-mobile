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

import environment from "../Environment";
import TodoList from "./TodoList";

const query = graphql`
  query TodoListScreenQuery {
    allTodos {
      ...Todo_todo
    }
  }
`;

export default class TodoListScreen extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        variables={{}}
        query={query}
        render={({ error, props }) => {
          if (error) {
            //Here we pass our error view in case of query errors or fetch failture
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text>Error connecting to server!</Text>
              </View>
            );
          } else if (props) {
            //Here we pass our component that should be rendered
            return <TodoList {...props} navigation={this.props.navigation} />;
          }
          //Here goes our activity indicator or loading view
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ActivityIndicator size="large" color="#e67e22" />
            </View>
          );
        }}
      />
    );
  }
}
