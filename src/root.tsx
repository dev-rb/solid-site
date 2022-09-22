import { Component, Suspense, Show, JSX } from 'solid-js';
import { Title, Meta, } from '@solidjs/meta';
import { Route, useRouteData, Routes } from '@solidjs/router';
import { Outlet, Scripts, Link, Html, Head, Body, FileRoutes } from 'solid-start';
import { I18nContext, createI18nContext } from '@solid-primitives/i18n';
import { preventSmoothScrollOnTabbing } from './utils';
import Header from './components/Header';
// import RootData from './root.data';

import './assets/main.css';
import Home from './pages';
import Docs from './pages/Docs';
import Tutorial from './pages/Tutorial';
import Examples from './pages/Examples';
import Media from './pages/Media';
import Resources from './pages/resources';
import Blog from './pages/blog';

export default function Root() {
  preventSmoothScrollOnTabbing();
  return (
    <Html lang="en">
      <Head>
        <Link />
      </Head>
      <Body>
        <main class="min-h-screen">
          <Suspense>
            <Lang>
              <Header />
              <div id="main-content">
                <div>
                  <Routes>
                    <FileRoutes />
                    <Route path={'/'} component={Home} />
                    <Route path={'/docs/latest/api'} component={Docs} />
                    <Route path={'/tutorial'} component={Tutorial} />
                    <Route path={'/examples'} component={Examples} />
                    <Route path={'/media'} component={Media} />
                    <Route path={'/resources'} component={Resources} />
                    <Route path={'/blog'} component={Blog} />
                  </Routes>
                </div>
              </div>
            </Lang>
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
