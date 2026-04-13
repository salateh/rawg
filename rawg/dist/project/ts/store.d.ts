interface IStore<T> {
    getState(): T;
    subscribe(listener: (state: T) => void): () => void;
    stateSet(newState: Partial<T>): void;
}
export declare class Store<T extends object> implements IStore<T> {
    constructor(initialState: T);
    private state;
    private listeners;
    private notify;
    subscribe(listener: (state: T) => void): () => void;
    getState(): T;
    stateSet(newState: Partial<T>): void;
}
export {};
//# sourceMappingURL=store.d.ts.map