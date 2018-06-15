/**
 * @flow
 * @relayHash 9162b1f3c5d567fd2a0ba2f4a500fc00
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoList_allTodos$ref = any;
export type TodoListScreenQueryVariables = {||};
export type TodoListScreenQueryResponse = {|
  +allTodos: $ReadOnlyArray<?{|
    +$fragmentRefs: TodoList_allTodos$ref
  |}>
|};
*/


/*
query TodoListScreenQuery {
  allTodos {
    ...TodoList_allTodos
    id
  }
}

fragment TodoList_allTodos on Todo {
  ...Todo_todo
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
  "text": "query TodoListScreenQuery {\n  allTodos {\n    ...TodoList_allTodos\n    id\n  }\n}\n\nfragment TodoList_allTodos on Todo {\n  ...Todo_todo\n}\n\nfragment Todo_todo on Todo {\n  id\n  title\n  description\n  completed\n}\n",
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
            "name": "TodoList_allTodos",
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
(node/*: any*/).hash = 'b61d46f2ed11279beca2de4854284d6a';
module.exports = node;
