---
title: Dialog
description: A window overlaid on the rest of the page.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>

## Transitions

You can change the transitions of the dialog overlay and container opening and closing by using the `overlayTransition` and `containerTransition` props and passing it an object with a Svelte transition function along with the options that should be passed to it.

```svelte {3,7-10,15}
<script lang="ts">
    import { writable } from 'svelte/store';
    import { slide } from 'svelte/transition';
    import { Dialog, type DialogTransition } from 'ato-ui';

    let open = writable(false);
    let containerTransition: DialogTransition = {
        trans: slide,
        options: { duration: 200 }
    }
</script>

<Dialog
    {open}
    {containerTransition}
>
    <!-- Content -->
</Dialog>
```