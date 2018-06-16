/**
 * @flow
 * @relayHash c32caa7d3b309e66d08f1a2fa1ca6942
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoList_allTodos$ref = any;
export type TodoListRelayContainerQueryVariables = {||};
export type TodoListRelayContainerQueryResponse = {|
  +allTodos: $ReadOnlyArray<?{|
    +$fragmentRefs: TodoList_allTodos$ref
  |}>
|};
*/


/*
query TodoListRelayContainerQuery {
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
  "name": "TodoListRelayContainerQuery",
  "id": null,
  "text": "query TodoListRelayContainerQuery {\n  allTodos {\n    ...TodoList_allTodos\n    id\n  }\n}\n\nfragment TodoList_allTodos on Todo {\n  ...Todo_todo\n}\n\nfragment Todo_todo on Todo {\n  id\n  title\n  description\n  completed\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListRelayContainerQuery",
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
    "name": "TodoListRelayContainerQuery",
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
(node/*: any*/).hash = '01911eef996f82cabf4c3ab8ed1219d2';
module.exports = node;
