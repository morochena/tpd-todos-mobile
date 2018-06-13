import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

import TodoList from "./components/TodoList";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#FBD786", "#f7797d"]}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={{ flex: 1 }}
        >
          <TodoList style={{ flex: 1 }} />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
