/**
 * @flow
 * @relayHash d6ee3a184288b1339d7bc8ab4e651790
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTodoMutationVariables = {|
  id: string
|};
export type DeleteTodoMutationResponse = {|
  +deleteTodo: ?{|
    +id: string
  |}
|};
*/


/*
mutation DeleteTodoMutation(
  $id: ID!
) {
  deleteTodo(id: $id) {
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
    "name": "deleteTodo",
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
  "name": "DeleteTodoMutation",
  "id": null,
  "text": "mutation DeleteTodoMutation(\n  $id: ID!\n) {\n  deleteTodo(id: $id) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteTodoMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4669092aa3af7b209637aa0ed0778304';
module.exports = node;
