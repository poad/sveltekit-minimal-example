import { readonly, writable } from 'svelte/store';

const count = writable(0);
export const counter = readonly(count);

export function increment() {
	count.update((n) => n + 1);
}

export function decrement() {
	count.update((n) => (n > 0 ? n - 1 : n));
}
