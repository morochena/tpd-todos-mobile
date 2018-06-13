/**
 * @flow
 * @relayHash 9bf941e43cb50b90e7a817ad647d5415
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoListQueryVariables = {||};
export type TodoListQueryResponse = {|
  +allTodos: $ReadOnlyArray<?{|
    +id: string,
    +title: string,
    +description: string,
    +completed: boolean,
  |}>
|};
*/


/*
query TodoListQuery {
  allTodos {
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TodoListQuery",
  "id": null,
  "text": "query TodoListQuery {\n  allTodos {\n    id\n    title\n    description\n    completed\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2929a5efbecf58ba8f5db3c488f92518';
module.exports = node;
