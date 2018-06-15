/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Todo_todo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoList_allTodos$ref: FragmentReference;
export type TodoList_allTodos = $ReadOnlyArray<{|
  +$fragmentRefs: Todo_todo$ref,
  +$refType: TodoList_allTodos$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TodoList_allTodos",
  "type": "Todo",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Todo_todo",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9f5ef4ba88034b690c13c638d57c67d6';
module.exports = node;
