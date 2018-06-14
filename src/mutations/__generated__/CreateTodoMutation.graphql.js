/**
 * @flow
 * @relayHash 6de0c7c6e0fd6d6352e1e1df0368822a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTodoMutationVariables = {|
  title: string,
  description?: ?string,
|};
export type CreateTodoMutationResponse = {|
  +createTodo: ?{|
    +id: string,
    +title: string,
    +description: string,
    +completed: boolean,
  |}
|};
*/


/*
mutation CreateTodoMutation(
  $title: String!
  $description: String
) {
  createTodo(title: $title, description: $description) {
    id
    title
    description
    completed
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "description",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title",
        "type": "String!"
      }
    ],
    "concreteType": "Todo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "completed",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateTodoMutation",
  "id": null,
  "text": "mutation CreateTodoMutation(\n  $title: String!\n  $description: String\n) {\n  createTodo(title: $title, description: $description) {\n    id\n    title\n    description\n    completed\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6a13c1d72564efadf0f7c0f5d77d1571';
module.exports = node;
