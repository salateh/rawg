export class Store {
    constructor(initialState) {
        this.state = initialState;
    }
    state;
    listeners = [];
    notify() {
        this.listeners.forEach((sub) => sub(this.state));
    }
    subscribe(listener) {
        this.listeners.push(listener);
        return () => (this.listeners = this.listeners.filter((a) => a !== listener));
    }
    getState() {
        return this.state;
    }
    stateSet(newState) {
        Object.assign(this.state, newState);
        this.notify();
    }
}
//# sourceMappingURL=store.js.map