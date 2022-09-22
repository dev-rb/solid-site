import { useRouteData } from '@solidjs/router';
import { createComputed, createSignal } from 'solid-js';
import { isServer } from 'solid-js/web';

export const [routeReadyState, setRouteReadyState] = createSignal(
  { loading: false, routeChanged: false },
  { equals: false },
);

let init = true;

export const useRouteReadyState = () => {
  // console.log(isServer)
  if (isServer) return;
  const restorePageHeight = () => {
    const pageEl = document.body;
    pageEl.style.minHeight = '';
  };
  try {
    const data = useRouteData<{ loading: boolean }>();
    createComputed(() => {
      if (!data.loading) {
        setRouteReadyState((prev) => ({ ...prev, loading: false }));
        if (init) {
          init = false;
          return true;
        }
        setTimeout(() => {
          // @ts-ignore
          window.scrollTo({ top: 0, behavior: 'instant' });
          restorePageHeight();
        });
      }
    });
  } catch (err) {
    setRouteReadyState((prev) => ({ ...prev, loading: false }));
    if (init) {
      init = false;
      return true;
    }
    setTimeout(() => {
      // @ts-ignore
      window.scrollTo({ top: 0, behavior: 'instant' });
      restorePageHeight();
    });
  }
};
