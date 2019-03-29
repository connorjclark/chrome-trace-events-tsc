declare global {
  export interface Type {
    type: 'string' | 'number' | 'boolean' | Type | ObjectType | LiteralType;
    array: boolean;
    optional: boolean;
  }

  export interface LiteralType {
    literal: string;
  }

  export type ObjectType = Record<string, Type>

  export interface Interface {
    id: string;
    parent?: Interface;
    objectType: ObjectType;
  }

  export interface Namespace {
    name: string;
    interfaces: Interface[];
  }
}

export { };
