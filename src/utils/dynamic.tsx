import { lazy, createSignal, onMount } from "solid-js";
import { isServer, Show } from "solid-js/web";

export function dynamic(fn: any) {
    if (isServer) return () => { };
    const Comp = lazy(fn);
    // Comp.preload(); // start loading JS upfront
    const [mounted, setMounted] = createSignal(false);
    onMount(() => setMounted(true));
    return (props: any) => <Show when={mounted()}><Comp {...props} /></Show>
}