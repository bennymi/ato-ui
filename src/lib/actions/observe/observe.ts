import { derived, writable, type Writable } from 'svelte/store';
import type { Visibility } from './types';

// TODO
export function observe(target: string): Visibility {
	let isVisible: Writable<boolean> = writable(false);
	let intersectionRatio: Writable<number> = writable(0);

	const { subscribe } = derived([isVisible, intersectionRatio], ($state) => ({
		isVisible: $state[0],
		intersectionRatio: $state[1]
	}));

	const element: Element | null = document.getElementsByClassName(target)[0];

	const observer: IntersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0) {
				isVisible.set(true);
				intersectionRatio.set(entry.intersectionRatio);
			} else {
				isVisible.set(false);
				intersectionRatio.set(0);
			}
		});
	});

	if (element) {
		observer.observe(element);
	}

	function destroy(): void {
		observer?.disconnect();
	}

	return {
		subscribe,
		destroy
	};
}
