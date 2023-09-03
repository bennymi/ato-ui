<script lang="ts">
    import { Accordion } from 'ato-ui';

    type ExampleItem = {
        key: string;
        title: string;
        content: string;
        icon: string;
    }

    // From the Avatar wiki: https://avatar.fandom.com/wiki/Bending_arts
     const items: ExampleItem[] = [
        {
            key: 'water',
            title: 'Waterbending',
            content: 'Waterbending is practiced by some people of the Water Tribe. A versatile element, it is unique in the sense that the original bender of the element was not an animal, but rather the Moon.',
            icon: 'i-material-symbols-water-drop-outline-rounded'
        },
        {
            key: 'earth',
            title: 'Earthbending',
            content: 'Earthbending originates in the Earth Kingdom and the first earthbenders were badgermoles, who are said to love music.',
            icon: 'i-mdi-earth'
        },
        {
            key: 'fire',
            title: 'Firebending',
            content: 'Firebending is used by the people of the Fire Nation and is the most aggressive bending art. Dragons were the first firebenders; they subsequently taught the Sun Warriors.',
            icon: 'i-material-symbols-local-fire-department-rounded'
        },
        {
            key: 'air',
            title: 'Airbending',
            content: 'Airbending is the bending art used by the Air Nomads; the flying bison were the original airbenders.',
            icon: 'i-mdi-weather-windy-variant'
        }
    ];
</script>

<Accordion.Root width="w-80 md:w-96">
    {#each items as { title, content, key, icon }}
        <Accordion.Item {key} >
            <svelte:fragment slot="title">
                <div class="flex justify-left items-center gap-2">
                    <span class="text-lg {icon}" />
                    <span>{title}</span>
                </div>
            </svelte:fragment>

            <!-- Content in default slot -->
            {content}
        </Accordion.Item>
    {/each}
</Accordion.Root>