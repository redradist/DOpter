// <operation: Assignment, name: $locals__main__["a"], value: list()>
// <operation: Assignment, name: $locals__main__["i"], value: Int(5)>
// <operation: CheckAttrib, name: $locals__main__["a"], operation: a.add>
// <operation: CallAttrib, name: $locals__main__["a"], operation: a.add, value: $locals__main__["i"]>
// <operation: CheckAttrib, name: $locals__main__["i"], operation: "+">
// <operation: CallAttrib, name: $locals__main__["i"], operation: "+", value: Int(1)>
// <operation: Assignment, name: $locals__main__["temp"]>
// <operation: FuncCall, name: print, value: $locals__main__["temp"]>

import {Scope, BytecodeId, BytecodeItem, GraphNode} from "./bytecode";

class Variable {
    public invariant: boolean = true;
    public type: string;
    public value?: any;

    public constructor(type, value) {

    }
}

class Optimizer {
    public global_invariant: boolean = true;
    public builtin_types: string[];
    private current_scope: Scope;
    private scope_variables: Array<Variable>;

    public constructor(...builtin_types) {
        this.builtin_types = builtin_types;
    }

    public processByteCode(start: GraphNode) {
        this.current_scope = start.item.scope;
        switch (start.item.id) {
            case BytecodeId.Import:
                break;
            case BytecodeId.Assign:
            {
                console.assert(start.item.values.length >= 1);
                let scope = start.item.values[0];
                if (start.item.values.length >= 2) {
                    console.assert(start.item.values.length == 3);
                    let type = start.item.values[1];
                    let value = start.item.values[2];
                    let variable =new Variable(type, value);
                    if (scope == this.current_scope.scope_name) {

                    }
                    this.scope_variables.push(variable);
                }
            }
                break;
            case BytecodeId.HasAttrib:
                break;
            case BytecodeId.GetAttrib:
                break;
            case BytecodeId.CallAttrib:
                break;
        }
        for (let next of start.nexts) {
            this.processByteCode(next);
        }
    }
}

let optimizer = new Optimizer("bool", "int", "float", "list");
