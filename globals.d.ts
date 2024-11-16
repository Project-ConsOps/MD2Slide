interface ImportMeta {
    readonly env: Record<string, string>;
    glob: (pattern: string) => Record<string, () => Promise<any>>;
}