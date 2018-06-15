import { graphql, commitMutation } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation UpdateTodoMutation($id: ID!, $title: String, $description: String) {
    updateTodo(id: $id, title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      id: input.id,
      title: input.title,
      description: input.description
    },
    updater: proxyStore => {
      //
    },
    optimisticUpdater: proxyStore => {
      //
    },
    onCompleted,
    onError
  });
}

export default { commit };
