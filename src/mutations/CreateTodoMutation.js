import { graphql, commitMutation } from "react-relay";
import environment from "../Environment";

let tempID = 0;

const mutation = graphql`
  mutation CreateTodoMutation($title: String!, $description: String) {
    createTodo(title: $title, description: $description) {
      id
      title
      description
      completed
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      title: input.title,
      description: input.description
    },
    updater: proxyStore => {
      const newTodo = proxyStore.getRootField("createTodo");
      const allTodos = proxyStore.getRoot().getLinkedRecords("allTodos");
      if (allTodos) {
        allTodos.push(newTodo);
        proxyStore.getRoot().setLinkedRecords(allTodos, "allTodos");
      }
    },
    onCompleted,
    onError
  });
}

export default { commit };
