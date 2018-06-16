import React from "react";
import {
    View,
    Text,
    ActivityIndicator
} from "react-native";
import {graphql, QueryRenderer} from "react-relay";

import environment from "../Environment";
import TodoList from "../components/TodoList";

const query = graphql`
  query TodoListRelayContainerQuery {
    allTodos {
      ...TodoList_allTodos
    }
  }
`;

export default class TodoListRelayContainer extends React.Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                variables={{}}
                query={query}
                render={({error, props}) => {
                    if (error) {
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
                        return <TodoList {...props} navigation={this.props.navigation} />;
                    }
                    return (
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <ActivityIndicator size="large" color="#e67e22"/>
                        </View>
                    );
                }}
            />
        );
    }
}
