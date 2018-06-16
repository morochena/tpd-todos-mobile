import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { graphql, createFragmentContainer, QueryRenderer } from "react-relay";
import { LinearGradient } from "expo";

import environment from "../Environment";

import UpdateTodoMutation from "../mutations/UpdateTodoMutation.js";

const { width, height } = Dimensions.get("window");
const padding = 20;

export default class EditTodo extends React.Component {
  render() {
    return <View />;
  }
}
