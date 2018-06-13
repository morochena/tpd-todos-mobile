import { graphql, commitMutation } from "react-relay";
import env from "../Enviroment";

const mutation = graphql`
  mutation CreateTodoMutation($input: TodoAddInput!) {
    TodoAdd(input: $input) {
      
    }
  }
`;

const commit = (title, description) => {
  const variables = {
    input: {
      title,
      description
    }
  };
  return new Promise((resolve, reject) => {
    commitMutation(env, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response);
        resolve(response.UsAdd);
        alert("A new todo has been created");
      },
      onError: err => alert("An unexpected error occurred")
    });
  });
};

export default commit;
