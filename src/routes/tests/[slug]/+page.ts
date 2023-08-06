import type { PageLoad } from './$types';

export const load = (({ data }) => {
    return {
        ...data
    };
}) satisfies PageLoad;