import { Navigation } from "react-native-navigation";

import TodoList from "../components/TodoList";

export function registerScreens() {
  Navigation.registerComponent("TodoList", () => TodoList);
}
