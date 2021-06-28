# State

State is a core work horse of Solid. It is composed of many on demand reactive signals through a proxy object. The advantage is that it is automatically reactive and resembles data structures you may already have. It removes the classic issues with fine-grained reactivity around mapping reactive structures and serializing JSON. And as a structure itself it can be diffed allowing interaction with immutable data and snapshots.

While this state concept is heavily borrowed from React and it's API from ImmutableJS, there is a key difference in the role it plays here. In React you keep things simple in your state and the whole library is about reconciling DOM rendering. Here you can almost view the State object as the target, the thing that is diffed and maintained. The DOM rendering is actually quite simple to the point the compiled source exposes the vast majority of the DOM manipulations, where you can easily drop a breakpoint.

### `createState(object)`

Initializes with object value and returns an array where the first index is the state object and the second is the setState method.

### `setState(changes)`

### `setState(...path, changes)`

This merges the changes into the path on the state object. All changes made in a single setState command are applied syncronously (ie all changes see each other at the same time). Changes can take the form of function that passes previous state and returns new state or a value. Objects are always merged.

```js
const [state, setState] = createState({ firstName: 'John', lastName: 'Miller' });

setState({ firstName: 'Johnny', middleName: 'Lee' })
// ({ firstName: 'Johnny', middleName: 'Lee', lastName: 'Miller' })

setState(state => ({ preferredName: state.firstName, lastName: 'Milner' }));
// ({ firstName: 'Johnny', preferredName: 'Johnny', middleName: 'Lee', lastName: 'Milner' })
```

setState also supports nested setting where you can indicate the path to the change. When nested the state you are updating may be other non Object values. Objects are still merged but other values (including Arrays) are replaced.

```js
const [state, setState] = createState({
  counter: 2,
  list: [
    { id: 23, title: 'Birds' }
    { id: 27, title: 'Fish' }
  ]
});

setState('counter', c => c + 1);
setState('list', l => [...l, {id: 43, title: 'Marsupials'}]);
setState('list', 2, 'read', true);
// {
//   counter: 3,
//   list: [
//     { id: 23, title: 'Birds' }
//     { id: 27, title: 'Fish' }
//     { id: 43, title: 'Marsupials', read: true }
//   ]
// }
```

Path can be string keys, array of keys, iterating objects ({from, to, by}), or filter functions. This gives incredible expressive power to describe state changes.

```js
const [state, setState] = createState({
  todos: [
    { task: 'Finish work', completed: false }
    { task: 'Go grocery shopping', completed: false }
    { task: 'Make dinner', completed: false }
  ]
});

setState('todos', [0, 2], 'completed', true);
// {
//   todos: [
//     { task: 'Finish work', completed: true }
//     { task: 'Go grocery shopping', completed: false }
//     { task: 'Make dinner', completed: true }
//   ]
// }

setState('todos', { from: 0, to: 1 }, 'completed', c => !c);
// {
//   todos: [
//     { task: 'Finish work', completed: false }
//     { task: 'Go grocery shopping', completed: true }
//     { task: 'Make dinner', completed: true }
//   ]
// }

setState('todos', todo => todo.completed, 'task', t => t + '!')
// {
//   todos: [
//     { task: 'Finish work', completed: false }
//     { task: 'Go grocery shopping!', completed: true }
//     { task: 'Make dinner!', completed: true }
//   ]
// }

setState('todos', {}, todo => ({ marked: true, completed: !todo.completed }))
// {
//   todos: [
//     { task: 'Finish work', completed: true, marked: true }
//     { task: 'Go grocery shopping!', completed: false, marked: true }
//     { task: 'Make dinner!', completed: false, marked: true }
//   ]
// }
```

Additionally supports a batched mutable form when the setter does not return a value..

```js
const [state, setState] = createState({
  counter: 2,
  list: [
    { id: 23, title: 'Birds' }
    { id: 27, title: 'Fish' }
  ]
});

setState(s => {
  s.counter = s.counter * 3;
  s.list[1].title += '!';
});
// {
//   counter: 6,
//   list: [
//     { id: 23, title: 'Birds' }
//     { id: 27, title: 'Fish!' }
//   ]
// }
```

## Modifiers

This library also provides a state setter modifiers which can optionally be included to provide different behavior when setting state.

### `reconcile(value, options)`

This can be used to do deep diffs by applying the changes from a new State value. This is useful when pulling in immutable data trees from stores to ensure the least amount of mutations to your state. It can also be used to replace the all keys on the base state object if no path is provided as it does both positive and negative diff.

```js
setState("users", reconcile(store.get("users")));
```

If you pass as array you can configure the diff algorithm with an options object:

```js
setState('users', reconcile(
  store.get('users'),
  {
    key: '_id' // does a keyed comparison - default: 'id'
    merge: false //  overwrites rather than detects array position changes when not keyed - default: false
  }
))
```
