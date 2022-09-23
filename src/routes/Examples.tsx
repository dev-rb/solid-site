import { For, Component, createSignal, createEffect, batch, ErrorBoundary, Show, onMount } from 'solid-js';
import { isServer } from 'solid-js/web';
import { NavLink, useParams } from '@solidjs/router';
import { ExamplesDataRoute } from './examples.data';
import { useRouteData } from 'solid-start'

import { useI18n } from '@solid-primitives/i18n';
import { useRouteReadyState } from '../utils/routeReadyState';
import { Repl, ReplTab } from '../components/Repl';

const Examples: Component = () => {
  const data = useRouteData<ExamplesDataRoute>();
  const [t] = useI18n();
  const params = useParams<{ id: string }>();
  const [tabs, setTabs] = createSignal([
    {
      name: 'main',
      source: '',
    },
  ]);
  const [current, setCurrent] = createSignal(`main.tsx`);

  useRouteReadyState();

  createEffect(async () => {
    const exampleData = (await fetch(`${location.origin}/examples/${params.id}.json`).then((r) =>
      r.json(),
    )) as {
      files: {
        name: string;
        type: string;
        content: string | string[];
      }[];
      version?: string;
    };
    batch(() => {
      const newTabs = exampleData.files.map(
        (file: { name: string; type?: string; content: string | string[] }) => {
          return {
            name: file.name + (file.type ? `.${file.type}` : '.jsx'),
            source: Array.isArray(file.content) ? file.content.join('\n') : file.content,
          };
        },
      );
      setTabs(newTabs);
      setCurrent(newTabs[0].name);
    });
  });
  return (
    <div class="flex flex-col relative">
      <div class="container my-10 w-[98vw] mx-auto">
        <div class="md:grid md:grid-cols-12 gap-6">
          <div class="md:col-span-4 lg:col-span-3 overflow-auto border p-5 rounded md:h-[82vh]">
            <For each={Object.entries(data.list)}>
              {([name, examples]) => (
                <>
                  <h3 class="text-xl text-solid-default border-b font-semibold border-solid pb-2">
                    {t(`examples.${name.toLowerCase()}`, {}, name)}
                  </h3>
                  <div class="mb-10">
                    <For each={examples}>
                      {(example) => (
                        <NavLink
                          dir="ltr"
                          href={`/examples/${example.id}`}
                          class="block my-4 text-sm py-3 pl-2 border-b hover:opacity-60"
                          activeClass="text-solid-light"
                        >
                          <span>{example.name}</span>
                          <span>{example.id === params.id}</span>
                          <span class="block text-gray-500 text-md">{example.description}</span>
                        </NavLink>
                      )}
                    </For>
                  </div>
                </>
              )}
            </For>
          </div>

          <div
            dir="ltr"
            class="h-[82vh] rounded-lg md:col-span-8 lg:col-span-9 overflow-hidden shadow-2xl"
          >
            <Show when={!isServer}>
              <ErrorBoundary
                fallback={
                  <>
                    Repl failed to load. You may be using a browser that doesn't support Web
                    Workers.
                  </>
                }
              >
                <Repl
                  layout='responsive'
                  isInteractive={true}
                  withActionBar={true}
                  editableTabs={true}
                >
                  <For each={tabs()}>
                    {(tab) =>
                      <ReplTab name={tab.name}>
                        {tab.source}
                      </ReplTab>
                    }
                  </For>
                </Repl>
              </ErrorBoundary>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;