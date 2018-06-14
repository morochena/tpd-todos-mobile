import { graphql, commitMutation } from "react-relay";
import environment from "../Environment";

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
      input
    },
    onCompleted,
    onError
  });
}

export default { commit };
