/**
 * @flow
 * @relayHash e759713caeb0564576c10cbdb19c09f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToggleTodoMutationVariables = {|
  id: string
|};
export type ToggleTodoMutationResponse = {|
  +toggleTodo: ?{|
    +id: string
  |}
|};
*/


/*
mutation ToggleTodoMutation(
  $id: ID!
) {
  toggleTodo(id: $id) {
    id
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "toggleTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ToggleTodoMutation",
  "id": null,
  "text": "mutation ToggleTodoMutation(\n  $id: ID!\n) {\n  toggleTodo(id: $id) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ToggleTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ToggleTodoMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '635fc4c4e926c82fb0849a4202725b44';
module.exports = node;
