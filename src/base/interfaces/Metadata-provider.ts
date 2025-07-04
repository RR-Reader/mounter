interface MetadataSchema {
  readonly [key: string]: {
    readonly type: "number" | "string" | "boolean" | "select";
    readonly required?: boolean;
    readonly default?: any;
    readonly options?: string[];
    readonly description?: string;
    readonly min?: number;
    readonly max?: number;
    readonly pattern?: string;
  };
}

interface SourceFieldsMetadata {
  readonly viewMore: { [sectionId: string]: MetadataSchema };
  readonly search: MetadataSchema;
}

export type { SourceFieldsMetadata, MetadataSchema };
