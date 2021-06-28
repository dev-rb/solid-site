# API

### `createRoot(disposer => <code>)`

Creates a new non-tracked context that doesn't auto-dispose. All Solid code should be wrapped in one of these top level as they ensure that all memory/computations are freed up.

### `createState(initValue): [state, setState]`

Creates a new State object and setState pair that can be used to maintain your componenents state.

### `createEffect(() => <code>, dependencies, defer)`

Creates a new effect that automatically tracks dependencies. The 2nd optional argument is an explicit array of dependencies. The 3rd optional argument is whether to defer initial execution of the effect until a value has changed (this only works with explicit dependencies).

### `createSignal(initialValue, comparatorFn): [getValueFn, setValueFn]`

Creates a new signal that can be used for reactive tracking. By default signals always notify on setting a value. However a comparator can be passed in to indicate whether the values should be considered equal and listeners not notified.

### `createMemo(prev => <code>, initialValue): getValueFn`

Creates a readonly signal that recalculates it's value whenever the executed codes dependencies update.

### `onCleanup(() => <code>)`

Registers a cleanup method that performs that executes on disposal or recalculation of the current context.

### `sample(() => <code>): any`

Ignores tracking any of the dependencies in the executing code block and returns the value.

### `freeze(() => <code>): any`

Ensures that all updates within the block happen at the same time to prevent unnecessary recalculation. Solid State's setState method and computations(useEffect, useMemo) automatically wrap their code in freeze blocks.