import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

// import { get_highlighted_html } from "../../../docs/mdsvex/highlight-search-api";
import { get_highlighted_html } from "./highlight-search-api.server";

export const POST: RequestHandler = async ({ request }) => {
    const { code, lang } = await request.json();

    if (!code || !lang) {
        return json({}, { status: 400 })
    }

    const html = get_highlighted_html(code, lang);

    return json(html, { status: 200 });
}