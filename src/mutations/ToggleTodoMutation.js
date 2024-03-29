import { graphql, commitMutation } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation ToggleTodoMutation($id: ID!) {
    toggleTodo(id: $id) {
      id
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      id: input.id
    },
    updater: proxyStore => {
      const todo = proxyStore.get(input.id);
      todo.setValue(!todo.getValue("completed"), "completed");
    },
    optimisticUpdater: proxyStore => {
      const todo = proxyStore.get(input.id);
      todo.setValue(!todo.getValue("completed"), "completed");
    },
    onCompleted,
    onError
  });
}

export default { commit };
