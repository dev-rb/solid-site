import { useRouter } from '@solidjs/router';

export const Redirect = (path: string) => () => {
  const [, { push }] = useRouter()!;
  queueMicrotask(() => push(path));
  return <></>;
};
