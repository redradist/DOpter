export enum BytecodeId {
    Import,
    Assign,
    HasAttrib,
    GetAttrib,
    CallAttrib, // Function call on attribute
}

export class Scope {
    public scope_name: string;

    public constructor(scope_name: string) {
        this.scope_name = scope_name;
    }
}

export class BytecodeItem {
    public extra: null;
    public scope: Scope;
    public id: BytecodeId;
    public values: any[];

    public constructor(extra: null, scope: Scope, id: BytecodeId, ...values) {
        this.extra = extra;
        this.scope = scope;
        this.id = id;
        this.values = values;
    }
}

enum NodeColor {
    Red,
    White,
}

export class GraphNode {
    public item: BytecodeItem;
    public nexts: BytecodeItem[];
    public color: NodeColor = NodeColor.White;

    public constructor(item: BytecodeItem, ...nexts) {
        this.item = item;
        this.nexts = nexts;
    }
}
