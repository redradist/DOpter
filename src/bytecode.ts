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

export enum BytecodeColor {
    Red,   // Mean Node could not be optimized
    White, // Mean Node could be optimized
}

export class BytecodeItem {
    public extra: null;
    public scope: Scope;
    public id: BytecodeId;
    public values: any[];

    public marked: boolean = false;
    public nexts: BytecodeItem[];
    public color: BytecodeColor = BytecodeColor.Red;

    public constructor(extra: null, scope: Scope, id: BytecodeId, ...values) {
        this.extra = extra;
        this.scope = scope;
        this.id = id;
        this.values = values;
    }
}
