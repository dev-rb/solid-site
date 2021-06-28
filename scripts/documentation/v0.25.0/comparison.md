# Comparison with other Libraries

This section cannot escape some bias but I think it is important to understand where Solid's solution sits compared to other libraries. This is not about performance. For a definitive look at performance feel free to look at the [JS Framework Benchmark](https://github.com/krausest/js-framework-benchmark).

## React

React has had a big influence on Solid. Its unidirectional flow and explicit segregation of read and write in its Hooks API informed Solid's API. More so the objective of being just a "Render Library" rather than a framework. Solid has strong opinions on how to approach managing data in application development but doesn't seek to constrain its execution.

However, as much as Solid aligns with React's design philosophy, it works fundamentally different. React uses a Virtual DOM, and Solid does not. React's abstraction is top down component partition where render methods are called repeatedly and diffed. Whereas Solid renders each Template once in entirety constructing its reactive graph and afterwords only executes instructions related to fine-grained changes.

#### Advice for migrating:
Solid's update model is nothing like React. Or even React + MobX. Instead of thinking of function components as the `render` function, think of them as a `constructor`. Watch out for destructuring or early property access losing reactivity. You don't need explicit keys on list rows to have "keyed" behavior. Finally, there is no VDOM so imperative VDOM APIs like `React.Children` and `React.cloneElement` make no sense. I encourage finding different ways to solve problems that use these declaratively.

## Vue

Solid is not particularly influenced by Vue design-wise, but they are relatable in approach. They both use Proxies in their Reactive system with read based auto-tracking. But that is where the similarities end. Vue's fine grained dependency detection just feeds into a less fine-grained Virtual DOM and Component system whereas Solid keeps its granularity right down to its direct DOM updates.

Vue values easiness where Solid values transparency. Although Vue's new direction with Vue 3 aligns more with the approach Solid takes. These libraries might align more over time depending on how they continue to evolve.

#### Advice for migrating:
As another modern reactive library migration from Vue 3 should feel familiar. Solid's components are very much like tagging the template on the end of Vue's `setup` function. Be wary of overwrapping state derivations with computations, try a function. Reactivity is pervasive. Solid's proxies are intentionally read-only. Don't knock it before you try it.

## Svelte

Svelte pioneered the precompiled disappearing framework that Solid also employs to a certain degree. Both libraries are truly reactive and can produce really small execution code bundles although Svelte is the winner here for small demos. Solid requires a bit more explicitness in its declarations and relying less on implicit analysis from the compiler, but that is part of what gives Solid superior performance. Solid also keeps more in the runtime which scales better in larger apps. Solid's RealWorld demo implementation is 25% smaller than Svelte's.

Both libraries aim to help their developers write less code but approach it completely differently. Svelte 3 focuses on the optimization of the ease of dealing with localized change focusing on plain object interaction and 2 way binding. In constrast Solid focuses on the data flow by deliberately embraces CQRS and immutable interface. With functional template composition, in many cases Solid allows developers to write even less code than Svelte although Svelte's template syntax is definitely terser.

#### Advice for migrating:

Dev experience is different enough that while somethings are analogous it is a very different experience. Components in Solid are cheap, so don't shy away from having more.

## Knockout.js

This library owes its existence to Knockout. Modernizing its model for fine grained dependency detection was the motivation for this project. Knockout was released in 2010 and supports back to IE6 while much of Solid doesn't support IE at all(although you can use Signals in Solid without using the Proxy State object).

Knockout's bindings are just strings in HTML which are walked over at runtime. They depend on cloning context($parent etc...). Whereas Solid uses JSX or Tagged Template Literals for templating opting for an in JavaScript API.

The biggest difference might be that Solid's approach to batching changes which ensures synchronicity whereas Knockout has deferUpdates which uses a deferred microtask queue.

#### Advice for migrating:
If you are used Knockout, Solid's primitives might look strange to you. The read/write separation is intentional and not just to make life hard. Look to group adopting a state/action (Flux) mental model. While the libraries look similar they ppromote different best practices.

## lit-html & LighterHTML

These libraries are incredibly similar and have had some influence on Solid. Mostly that Solid's compiled code uses a very similar method to performantly initially render the DOM. Cloning Template elements and using comment placeholders are something that Solid and these libraries share in common.

The biggest difference is that while these libraries do not use the Virtual DOM they treat rendering the same way, top down and requiring component partitioning to keep things sane. By contrast Solid uses its fine grained Reactive Graph to only update what has changed and in so only shares this technique for its initial render. This allows for it benefit from the initial speed only available from native DOM and also have the most performant approach to updates.

#### Advice for migrating:
These libraries are pretty minimal so easy to view as building on top. However, keep in mind sometimes `<MyComp/>` isn't just HTMLElement (array or function). Try to keep your things in the JSX template. Hoisting works for the most part but it is best to mentally think of this still as a render library and not a HTMLElement factory.

## S.js

This library had the greatest influence on Solid's reactive design. Solid used S.js internally for a couple years until the feature set lead to them diverging. S.js is one of the most efficient reactive libraries to date. It models everything off synchronous time steps like a digital circuit and ensures consistency without having to do many of the more complicated mechanisms found in libraries like MobX. Solid's reactivity in the end is a sort of hybrid between S and MobX. Which gives it greater performance than most reactive libraries (Knockout, MobX, Vue) while retaining the ease of mental model for the developer. S.js ultimately is still the more performant reactive library although the difference is hardly noticeable in all but the most grueling synthetic benchmarks.

## RxJS

RxJS is the Reactive library. While Solid has a similar idea of Observable data it uses a much different application of the observer pattern. While Signals are like a simple version of an Observable (only the next), the pattern of auto dependency detection surplant's RxJS' hundred or so operators. Solid could be handled this way and earlier versions of the library included similar operators, but in most cases it is more straightforward to write your own transformation logic in a computation. Where Observables are cold starting, unicast, and push-based many problems on the client lend to hot startup and being multicast which is Solid's default behavior.

## Others

Angular and a few other popular libraries are notably missing from this comparison and it is mostly lack of experience with them to give an adequate comparison. Mostly larger Frameworks do not share much in common with Solid and it is much harder to compare them head on.
