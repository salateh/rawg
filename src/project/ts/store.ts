interface IStore<T> {
  getState(): T;
  subscribe(listener: (state: T) => void): () => void;
  stateSet(newState: Partial<T>): void;
}
export class Store<T extends object> implements IStore<T> {
  constructor(initialState: T) {
    this.state = initialState;
  }
  private state: T;
  private listeners: ((state: T) => void)[] = [];
  private notify(): void {
    this.listeners.forEach((sub) => sub(this.state));
  }

  subscribe(listener: (state: T) => void): () => void {
    this.listeners.push(listener);
    return () =>
      (this.listeners = this.listeners.filter((a) => a !== listener));
  }
  getState(): T {
    return this.state;
  }
    stateSet(newState: Partial<T>): void {
        Object.assign(this.state, newState);
        this.notify();
  }
}
