/**
 * @flow
 * @relayHash 750bad093ce4e6eb3de8aad7ee6af653
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Todo_todo$ref = any;
export type TodoListScreenQueryVariables = {||};
export type TodoListScreenQueryResponse = {|
  +allTodos: $ReadOnlyArray<?{|
    +$fragmentRefs: Todo_todo$ref
  |}>
|};
*/


/*
query TodoListScreenQuery {
  allTodos {
    ...Todo_todo
    id
  }
}

fragment Todo_todo on Todo {
  id
  title
  description
  completed
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "TodoListScreenQuery",
  "id": null,
  "text": "query TodoListScreenQuery {\n  allTodos {\n    ...Todo_todo\n    id\n  }\n}\n\nfragment Todo_todo on Todo {\n  id\n  title\n  description\n  completed\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTodos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Todo_todo",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTodos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
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
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '4573d21488e10515cddae5528f01cf2b';
module.exports = node;
