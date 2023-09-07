<script lang="ts">
    import { slide } from 'svelte/transition';
    import { createAccordion } from '@melt-ui/svelte';

    const {
        elements: { content, item, trigger, root },
        helpers: { isSelected }
    } = createAccordion({
        forceVisible: true
    });

    type ExampleItem = {
        key: string;
        title: string;
        itemContent: string;
        icon: string;
    }

    // From the Avatar wiki: https://avatar.fandom.com/wiki/Bending_arts
     const items: ExampleItem[] = [
        {
            key: 'water',
            title: 'Waterbending',
            itemContent: 'Waterbending is practiced by some people of the Water Tribe. A versatile element, it is unique in the sense that the original bender of the element was not an animal, but rather the Moon.',
            icon: 'i-material-symbols-water-drop-outline-rounded'
        },
        {
            key: 'earth',
            title: 'Earthbending',
            itemContent: 'Earthbending originates in the Earth Kingdom and the first earthbenders were badgermoles, who are said to love music.',
            icon: 'i-mdi-earth'
        },
        {
            key: 'fire',
            title: 'Firebending',
            itemContent: 'Firebending is used by the people of the Fire Nation and is the most aggressive bending art. Dragons were the first firebenders; they subsequently taught the Sun Warriors.',
            icon: 'i-material-symbols-local-fire-department-rounded'
        },
        {
            key: 'air',
            title: 'Airbending',
            itemContent: 'Airbending is the bending art used by the Air Nomads; the flying bison were the original airbenders.',
            icon: 'i-mdi-weather-windy-variant'
        }
    ];

</script>

<div
    {...$root}
    class="rounded-container flex flex-col gap-1 w-80 md:w-96 surface-50-600 shadow-lg shadow-surface-500/50-300/50 p-2"
>
    {#each items as {key, title, itemContent, icon}}
        <div
            {...$item(key)} use:item
            class="overflow-hidden transition-colors"
        >
            <div>
                <button
                    {...$trigger(key)} use:trigger
                    class="p-4 w-full rounded-container font-semibold leading-none transition-all primary-400 hover:primary-500"
                >
                    <div class="flex justify-left items-center gap-2">
                        <span class="text-lg {icon}" />
                        <span>{title}</span>
                    </div>
                </button>
            </div>

            {#if $isSelected(key)}
                <div
                    {...$content(key)} use:content
                    class="content px-2 py-4"
                    transition:slide
                >
                    {itemContent}
                </div>
            {/if}
        </div>
    {/each}
</div>