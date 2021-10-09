import { Resource, ResourceCategory, ResourceType } from '../Resources';

const articles: Array<Resource> = [
  {
    link: 'https://dev.to/this-is-learning/javascript-frameworks-and-metagaming-pb5',
    title: 'JavaScript Frameworks and Metagaming',
    description:
      'Ryan provides a post-1.0 release analysis and equates framework creation to metagaming.',
    author: 'Ryan Carniato',
    author_url: 'https://dev.to/ryansolid',
    keywords: ['metagaming', 'creating'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1625584447000,
  },
  {
    link: 'https://www.infoq.com/news/2021/07/solid-js-released-first/',
    title: 'Performance-Focused Reactive UI Framework Solid.JS Releases First Major Version',
    description:
      'InfoQ covers SolidJS initial 1.0 release and provides an example of its reactivity.',
    author: 'Bruno Couriol',
    author_url: 'https://www.infoq.com/profile/Bruno-Couriol/',
    keywords: ['infoq', 'education'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1625529600000,
  },
  {
    link: 'https://medium.com/@ryansolid/solidjs-the-tesla-of-javascript-ui-frameworks-6a1d379bc05e',
    title: 'SolidJS: The Tesla of JavaScript Frameworks?',
    description: 'Tech built for Economy can be used for Performance.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1603098166557,
  },
  {
    link: 'https://indepth.dev/the-journey-to-isomorphic-rendering-performance',
    title: 'The Journey to Isomorphic JavaScript Performance',
    description: 'Finding the right SSR solution for Solid.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1602756000000,
  },
  {
    link: 'https://dev.to/ryansolid/why-i-m-not-a-fan-of-single-file-components-3bfl',
    title: 'Why I am not a fan of Single File Components',
    description: "Exploring the advantages of Solid's templates.",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1600667167000,
  },
  {
    link: 'https://levelup.gitconnected.com/how-we-wrote-the-fastest-javascript-ui-framework-again-db097ddd99b6',
    title: 'How we wrote the Fastest JavaScript Framework, Again!',
    description: 'This time we conquered the server.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1600421218440,
  },
  {
    link: 'https://areknawo.com/solid-the-best-javascript-ui-library/',
    title: 'Solid - The best JavaScript UI library?',
    description: 'Highlights the qualities that make Solid a powerful solution.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1599075919000,
  },
  {
    link: 'https://indepth.dev/posts/1289/solidjs-reactivity-to-rendering',
    title: 'SolidJS: Reactivity to Rendering',
    description:
      "An in depth look at building Solid's reactive renderer, piece by piece, from the ground up.",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1592906400000,
  },
  {
    link: 'https://dev.to/lloyds-digital/comparing-reactivity-models-react-vs-vue-vs-svelte-vs-mobx-vs-solid-29m8',
    title: 'Comparing reactivity models - React vs Vue vs Svelte vs MobX vs Solid vs Redux',
    description: 'Compares popular and well known frameworks through a basic todo app.',
    author: 'Mateo Hrastnik',
    author_url: 'https://github.com/hrastnik',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1596527613000,
  },
  {
    link: 'https://areknawo.com/best-react-like-jsx-ui-libraries-in-2020/',
    title: 'Best React-like JSX UI Libraries in 2020',
    description: 'Presents 4 viable React alternatives.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1595534217000,
  },
  {
    link: 'https://indepth.dev/exploring-the-state-of-reactivity-patterns-in-2020/',
    title: 'Exploring Reactivity Patterns in 2020',
    description: "What's the latest trend in the frontend?",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1591092000000,
  },
  {
    link: 'https://dev.to/ryansolid/why-solidjs-do-we-need-another-js-ui-library-1mdc',
    title: 'Why SolidJS: Do We Really Need Another JS UI Library',
    description: "Ryan's personal journey creating SolidJS.",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1590995267000,
  },
  {
    link: 'https://dev.to/ryansolid/thinking-granular-how-is-solidjs-so-performant-4g37',
    title: 'Thinking Granular: How is SolidJS so Performant?',
    description: "An in-deph 12 minute read that explains Solid's methodology.",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1586983522000,
  },
  {
    link: 'https://levelup.gitconnected.com/a-solid-realworld-demo-comparison-8c3363448fd8',
    title: 'A Solid RealWorld Demo Comparison of JavaScript Frameworks',
    description: 'How does Solid perform in a larger application?',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1582790369043,
  },
  {
    link: 'https://levelup.gitconnected.com/designing-solidjs-abstraction-66d8c63fa7d1?source=friends_link&amp;sk=9cc520bbba3d97872a78081a8ab7b259',
    title: 'Designing SolidJS: Abstraction',
    description: 'Understanding both the power and cost of abstraction.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1580976731118,
  },
  {
    link: 'https://itnext.io/designing-solidjs-suspense-f4e92c625cb5?source=friends_link&amp;sk=f06f93d28632daba59048ed3d6d6b0a5',
    title: 'Designing SolidJS: Suspense',
    description: "React isn't the only library that stops time.",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1575360287522,
  },
  {
    link: 'https://medium.com/@ryansolid/designing-solidjs-jsx-50ee2b791d4c?source=friends_link&amp;sk=ef3d7ada15b50a6b5b7f5aee2cb8f952',
    title: 'Designing SolidJS: JSX',
    description:
      'How is it that the syntax born of the Virtual DOM is also secretly the best syntax for Reactive UI libraries?',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1575268127582,
  },
  {
    link: 'https://medium.com/javascript-in-plain-english/designing-solidjs-immutability-f1e46fe9f321?source=friends_link&amp;sk=912e32c63353ff0e084630bf3b63a8b1',
    title: 'Designing SolidJS: Immutability',
    description: 'Can Reactive State Management be both Immutable and also the most performant?',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1574066462982,
  },
  {
    link: 'https://dev.to/atfzl/understanding-solid-jsx-584p',
    title: 'Understanding Solid: JSX',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1574717523000,
  },
  {
    link: 'https://dev.to/atfzl/understanding-solid-reactivity-basics-39kk',
    title: 'Understanding Solid: Reactivity Basics',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1570724447000,
  },
  {
    link: 'https://medium.com/@ryansolid/designing-solidjs-components-8f1ebb88d78b?source=friends_link&amp;sk=cac89d1679d8be2c7bf2b303fabd153c',
    title: 'Designing SolidJS: Components',
    description: 'Exploring Solid\'s "Vanishing" Components',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1573776889202,
  },
  {
    link: 'https://medium.com/@ryansolid/designing-solidjs-reactivity-75180a4c74b4?source=friends_link&amp;sk=dbb9dd46a2e902c199ad3d5c7aeb1566',
    title: 'Designing SolidJS: Reactivity',
    description: 'Finding the right reactivity model for Solid.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1568843075544,
  },
  {
    link: 'https://medium.com/@ryansolid/designing-solidjs-dualities-69ee4c08aa03?source=friends_link&amp;sk=161ddd70db4fca50d6f33b6d53056d36',
    title: 'Designing SolidJS: Dualities',
    description: 'How exploring opposites can help us redefine the whole problem space.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1567481829245,
  },
  {
    link: 'https://medium.com/@ryansolid/how-we-wrote-the-fastest-javascript-ui-frameworks-a96f2636431e',
    title: 'How we wrote the Fastest JavaScript UI Frameworks',
    description: 'How Solid topped the JS Framework Benchmark.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1564115293877,
  },
  {
    link: 'https://levelup.gitconnected.com/finding-fine-grained-reactive-programming-89741994ddee?source=friends_link&amp;sk=31c66a70c1dce7dd5f3f4229423ad127',
    title: 'Finding Fine Grained Reactive Programming',
    description: "Introduction to the inner workings of Solid's Reactive system.",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1561960861096,
  },
  {
    link: 'https://medium.com/better-programming/the-real-cost-of-ui-components-6d2da4aba205?source=friends_link&amp;sk=a412aa18825c8424870d72a556db2169',
    title: 'The Real Cost of UI Components',
    description: 'Comparison of the cost of Components in different UI Libraries.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1560955215263,
  },
  {
    link: 'https://medium.com/@ryansolid/the-fastest-way-to-render-the-dom-e3b226b15ca3?source=friends_link&amp;sk=5ae1688dde789e46cecf5c976e708da5',
    title: 'The Fastest Way to Render the DOM',
    description: 'Comparison of all Solid Renderers against the Fastest Libraries in the World.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1559107533103,
  },
  {
    link: 'https://medium.com/@ryansolid/javascript-ui-compilers-comparing-svelte-and-solid-cbcba2120cea',
    title: 'JavaScript UI Compilers: Comparing Svelte and Solid',
    description: 'A closer look at precompiled UI libraries',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    type: ResourceType.Article,
    keywords: [''],
    categories: [ResourceCategory.Educational],
    published_at: 1557807639966,
  },
  {
    link: 'https://levelup.gitconnected.com/building-a-simple-javascript-app-with-solid-ff17c8836409',
    title: 'Building a Simple JavaScript App with Solid',
    description: 'Dissecting building TodoMVC with Solid.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1554809461904,
  },
  {
    link: 'https://levelup.gitconnected.com/solid-the-best-javascript-ui-library-youve-never-heard-of-297b22848ac1?source=friends_link&amp;sk=d61fc9352b4a98c6c9f5f6bd2077a722',
    title: 'Solid — The Best JavaScript UI Library You’ve Never Heard Of',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1554453079625,
  },
  {
    link: 'https://medium.com/@ryansolid/what-every-javascript-framework-could-learn-from-react-1e2bbd9feb09?source=friends_link&amp;sk=75b3f6f90eecc7d210814baa2d5ab52c',
    title: 'What Every JavaScript Framework Could Learn from React',
    description: 'The lessons Solid learned from React.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1553646091290,
  },
  {
    link: 'https://medium.com/js-dojo/react-hooks-has-react-jumped-the-shark-c8cf04e246cf?source=friends_link&amp;sk=a5017cca813ea970b480cc44afb32034',
    title: 'React Hooks: Has React Jumped the Shark?',
    description: 'Comparison of React Hooks to Solid.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1551338947894,
  },
  {
    link: 'https://medium.com/@ryansolid/how-i-wrote-the-fastest-javascript-ui-framework-37525b42d6c9?source=friends_link&amp;sk=8eb9387a535a306d1eb96f7ce88c4db5',
    title: 'How I wrote the Fastest JavaScript UI Framework',
    description: "The key to Solid's performance.",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1549778800718,
  },
  {
    link: 'https://medium.com/@ryansolid/b-y-o-f-part-5-js-frameworks-in-2019-deb9c4d3e74',
    title: 'Part 5: JS Frameworks in 2019',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1548919406928,
  },
  {
    link: 'https://medium.com/@ryansolid/b-y-o-f-part-4-rendering-the-dom-753657689647',
    title: 'Part 4: Rendering the DOM',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1548328281275,
  },
  {
    link: 'https://medium.com/@ryansolid/b-y-o-f-part-3-change-management-in-javascript-frameworks-6af6e436f63c',
    title: 'Part 3: Change Management in JavaScript Frameworks',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1546555117530,
  },
  {
    link: 'https://medium.com/@ryansolid/b-y-o-f-part-2-web-components-as-containers-85e04a7d96e9',
    title: 'Part 2: Web Components as Containers',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1542710478949,
  },
  {
    link: 'https://medium.com/@ryansolid/b-y-o-f-part-1-writing-a-js-framework-in-2018-b02a41026929',
    title: 'Part 1: Writing a JS Framework in 2018',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1541869780189,
  },
  {
    link: 'https://dev.to/ryansolid/jsx-is-not-hyperscript-61i',
    title: 'JSX is not HyperScript',
    description: 'Setting the story straight between JSX and HS.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1588404911000,
  },
  {
    link: 'https://dev.to/this-is-learning/learning-to-appreciate-react-server-components-49ka',
    title: 'Learning to Appreciate React Server Components',
    description: 'A deep dive into the evolution and future of React Server Components.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1617212767000,
  },
  {
    link: 'https://dev.to/ryansolid/5-ways-solidjs-differs-from-other-js-frameworks-1g63',
    title: '5 Ways SolidJS Differs from Other JS Frameworks',
    description: 'A deep dive into the evolution and future of React Server Components.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: ['react', 'vue', 'svelte'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1611601719000,
  },
  {
    link: 'https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf',
    title: 'A Hands-on Introduction to Fine-Grained Reactivity',
    description: 'Learn fine-grained reactivity by specific examples with Ryan',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1612885016000,
  },
  {
    link: 'https://dev.to/ryansolid/building-a-reactive-library-from-scratch-1i0p',
    title: 'Building a Reactive Library from Scratch',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1613661656000,
  },
  {
    link: 'https://dev.to/this-is-learning/is-0kb-of-javascript-in-your-future-48og',
    title: 'Is 0kb of JavaScript in your Future?',
    description: 'Thoughts on a 0kb JS world and various approaches.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1620052032000,
  },
  {
    link: 'https://dev.to/ryansolid/server-rendering-in-javascript-optimizing-performance-1jnk',
    title: 'Server Rendering in JavaScript: Optimizing Performance',
    description: 'Ryan discusses his learning process in topics of perf and optimization.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1614267281000,
  },
  {
    link: 'https://dev.to/this-is-learning/components-are-pure-overhead-hpm',
    title: 'Components are Pure Overhead',
    description: 'An analysis of components and the future of Component-Less.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1620666795000,
  },
  {
    link: 'https://dev.to/this-is-learning/two-years-of-writing-about-designing-javascript-frameworks-2018-2020-3ha5',
    title: 'Two Years of Writing about Designing JavaScript Frameworks (2018-2020)',
    description: 'Reflections on building Solid.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1621434498000,
  },
  {
    link: 'https://dev.to/this-is-learning/what-the-hell-is-reactive-programming-anyway-31p5',
    title: 'What the hell is Reactive Programming anyway?',
    description: 'A helpful walkthrough of reactivity.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [''],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1616487018000,
  },
  {
    link: 'https://dev.to/this-is-learning/5-places-solidjs-is-not-the-best-5019',
    title: '5 Places SolidJS is not the Best',
    description: 'A candid review of limitations and benefits of Solid.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: ['update'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1617726240000,
  },
  {
    link: 'https://dev.to/ryansolid/solid-update-march-2021-1jj6',
    title: 'Solid Update: March 2021',
    description: 'A Pre-1.0 release summary and description of the work completed to date.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: ['update'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1617004918000,
  },
  {
    link: 'https://blog.openreplay.com/solid-vs-react-the-fastest-vs-the-most-popular-ui-library',
    title: 'Solid vs React - the Fastest VS the Most Popular UI Library',
    description:
      'An article presented by OpenReplay discussing the differences between React and Solid.',
    author: 'Arek Nawo',
    author_url: 'https://blog.openreplay.com/authors/arek-nawo',
    keywords: ['react', 'solid', 'comparison'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1624838400000,
  },
  {
    link: 'https://dev.to/trusktr/a-few-reasons-why-i-love-solid-js-4036',
    title: 'A few reasons why I love Solid.js',
    description: 'Joe walks through just a few things that he believes make Solid amazing.',
    author: 'Joe Pea',
    author_url: 'https://blog.openreplay.com/authors/arek-nawo',
    keywords: ['love', 'lume'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1625423335000,
  },
  {
    link: 'https://codechips.me/solidjs-first-look/',
    title: 'SolidJS - a first look',
    description: 'Ilia takes SolidJS for a spin and compare it to Svelte in terms of DevX',
    author: 'Ilia Mikhailov',
    author_url: 'https://codechips.me/',
    keywords: ['mikhailov', 'svelte', 'codechips', 'transitions'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1626739200000,
  },
  {
    link: 'https://javascript.plainenglish.io/javascript-frameworks-performance-comparison-2020-cd881ac21fce',
    title: 'JavaScript Frameworks, Performance Comparison 2020',
    description: 'The ultimate performance battle between JavaScript frameworks.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1608552197675,
  },
  {
    link: 'https://www.infoworld.com/article/3626348/solidjs-creator-javascript-innovation-isnt-slowing-down.html',
    title: 'JavaScript Frameworks, Performance Comparison 2020',
    description:
      'As Solid marks its 1.0 release, creator Ryan Carniato discusses the origins of the framework.',
    author: 'Matthew Tyson',
    author_url: 'https://www.infoworld.com/author/Matthew-Tyson/',
    keywords: [],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1627304400000,
  },
  {
    link: 'https://indepth.dev/solidjs-reactivity-to-rendering/',
    title: 'SolidJS: Reactivity to Rendering',
    description:
      "An in depth look at building Solid's reactive renderer, piece by piece, from the ground up.",
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1592906400000,
  },
  {
    link: 'https://dev.to/ryansolid/introducing-the-solidjs-ui-library-4mck',
    title: 'Introducing the SolidJS UI Library',
    description: 'Introduction article to Solid written in March 2020.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    keywords: [],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1585189369000,
  },
  {
    link: 'https://css-tricks.com/introduction-to-the-solid-javascript-library/',
    title: 'Introduction to the Solid JavaScript Library',
    description: 'CSS Tricks author Charlie Gerard intros users to Solid.',
    author: 'Charlie Gerard',
    author_url: 'https://css-tricks.com/author/charliegerard/',
    keywords: [],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1629815450000,
  },
  {
    link: 'https://dev.to/marcinwosinek/series/14003',
    title: 'SolidJS Learning Series',
    description: 'A 4 part series ranging topics such as setup, i18n and building with esbuild.',
    author: 'Marcin Wosinek',
    author_url: 'https://dev.to/marcinwosinek',
    keywords: ['learning', 'rosetta', 'esbuild'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1628532062000,
  },
  {
    link: 'https://dev.to/canburaks/introduction-to-solidjs-and-reactive-primitives-1o6h',
    title: 'Introduction to SolidJS and Reactive Primitives',
    description: "Walks new users through reactivitiy and Solid's core primitives.",
    author: 'Can Burak Sofyalioglu',
    author_url: 'https://dev.to/canburaks',
    keywords: ['learning', 'primitives'],
    type: ResourceType.Article,
    categories: [ResourceCategory.Educational],
    published_at: 1633545291000,
  },
];

export default articles;
