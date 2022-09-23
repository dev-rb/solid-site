import { Component, Suspense, Show, JSX } from 'solid-js';
import { Title, Meta, } from '@solidjs/meta';
import { Route, useRouteData, Routes } from '@solidjs/router';
import { Outlet, Scripts, Link, Html, Head, Body, FileRoutes } from 'solid-start';
import { I18nContext, createI18nContext } from '@solid-primitives/i18n';
import { preventSmoothScrollOnTabbing } from './utils';
import Header from './components/Header';
// import RootData from './root.data';

import './assets/main.css';
import { AppContextProvider } from './AppContext';

export default function Root() {
  // preventSmoothScrollOnTabbing();
  return (
    <Html lang="en">
      <Head>
        {/* <Link /> */}
      </Head>
      <Body>
        <main class="min-h-screen">
          <Suspense>
            <AppContextProvider>
              <Header />
              <div id="main-content">
                <div>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </div>
              </div>
            </AppContextProvider>
          </Suspense>
        </main>
        <Scripts />
      </Body>
    </Html>
  );
}

interface Props {
  children: JSX.Element
}

const Lang = (props: Props) => {
  const data = useRouteData<{ isDark: true; i18n: ReturnType<typeof createI18nContext> }>();
  const [t, { locale }] = data.i18n;
  return (
    <I18nContext.Provider value={data.i18n}>
      <Title>{t('global.title', {}, 'SolidJS · Reactive Javascript Library')}</Title>
      <Meta name="lang" content={locale()} />
      <div
        dir={t('global.dir', {}, 'ltr')}
        classList={{
          dark: data.isDark === true,
        }}
      >
        <Show when={props.children}>
          <div class="dark:bg-solid-gray dark:text-white">{props.children}</div>
        </Show>
      </div>
    </I18nContext.Provider>
  );
};
