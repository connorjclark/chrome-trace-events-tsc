declare global {
  module Gen {
    export interface Type {
      type: 'string' | 'number' | 'boolean' | Type | ObjectType | LiteralType;
      array: boolean;
      optional: boolean;
    }

    export interface TypeUnion {
      name: string;
      interfaces: Interface[];
    }

    export interface LiteralType {
      literal: string;
    }

    export type ObjectType = Record<string, Type>

    export interface Interface {
      // idPath joined with '.' aka the fully resolved type name.
      id: string;
      // namespace path to interface. Last element is the name.
      idPath: string[];
      // Last element in idPath.
      name: string;
      parent?: Interface;
      objectType: ObjectType;
    }

    export interface Namespace {
      name: string;
      interfaces: Interface[];
      namespaces: Namespace[];
    }

    // Graph.

    export type NodeType = 'Namespace' | 'Interface' | 'Object' | 'Property' | 'Type' | 'TypeUnion';

    export interface Node {
      type: NodeType;
      data: Object;
      children: Node[];
    }
  }
}

export { };
