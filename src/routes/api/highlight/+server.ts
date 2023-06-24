import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

// import { get_highlighted_html } from "../../../docs/mdsvex/highlight";
// import highlights from '/search/highlighted-examples.json';

export const POST: RequestHandler = async ({ fetch, request }) => {
    const response = await fetch('/search/highlighted-examples.json');
    const highlights = await response.json();
    
    // const { code, lang } = await request.json();
    const { example } = await request.json();

    if (Object.keys(highlights).includes(example)) {
        return json(highlights[example], { status: 200 });
    }

    return json({ dark_html: '', light_html: ''}, { status: 404 })

    // if (!code || !lang) {
    //     return json({}, { status: 400 })
    // }

    // const html = get_highlighted_html(code, lang);

    // return json(html, { status: 200 });
}