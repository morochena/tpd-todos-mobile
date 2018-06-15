import { graphql, commitMutation } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation DeleteTodoMutation($id: ID!) {
    deleteTodo(id: $id) {
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
      const allTodos = proxyStore.getRoot().getLinkedRecords("allTodos");
      if (allTodos) {
        allTodos.splice(
          allTodos.findIndex(todo => todo._dataID === input.id),
          1
        );
        proxyStore.getRoot().setLinkedRecords(allTodos, "allTodos");
      }
    },
    optimisticUpdater: proxyStore => {
      const allTodos = proxyStore.getRoot().getLinkedRecords("allTodos");
      if (allTodos) {
        allTodos.splice(
          allTodos.findIndex(todo => todo._dataID === input.id),
          1
        );
        proxyStore.getRoot().setLinkedRecords(allTodos, "allTodos");
      }
    },
    onCompleted,
    onError
  });
}

export default { commit };
