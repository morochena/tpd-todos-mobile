/**
 * @flow
 * @relayHash d1472674ce7f5c8edd3e787901add389
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateTodoMutationVariables = {|
  id: string,
  title?: ?string,
  description?: ?string,
|};
export type UpdateTodoMutationResponse = {|
  +updateTodo: ?{|
    +id: string,
    +title: string,
    +description: string,
  |}
|};
*/


/*
mutation UpdateTodoMutation(
  $id: ID!
  $title: String
  $description: String
) {
  updateTodo(id: $id, title: $title, description: $description) {
    id
    title
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String",
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
    "name": "updateTodo",
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
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title",
        "type": "String"
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateTodoMutation",
  "id": null,
  "text": "mutation UpdateTodoMutation(\n  $id: ID!\n  $title: String\n  $description: String\n) {\n  updateTodo(id: $id, title: $title, description: $description) {\n    id\n    title\n    description\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateTodoMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b7a186cddbd382d13547c07ca8395b1f';
module.exports = node;
