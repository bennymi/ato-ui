import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ fetch, request }) => {
	const response = await fetch('/search/highlighted-examples.json');
	const highlights = await response.json();

	const { example } = await request.json();

	if (Object.keys(highlights).includes(example)) {
		return json(highlights[example], { status: 200 });
	}

	return json({ dark_html: '', light_html: '' }, { status: 404 });
};
