<script lang="ts">
	import { writable } from 'svelte/store';
	import { Dropdown } from 'ato-ui';

    import { themeStore } from '$docs/utils/stores';

	import { default as IconItem } from './themes-dropdown-item.svelte';

	// let themes = ['Ato', 'Air', 'Earth', 'Fire', 'Water'];
    let themes = [
        { icon: 'i-mdi-atom-variant', theme: `Ato` },
        { icon: 'i-material-symbols-water-drop-outline-rounded', theme: `Water` },
        { icon: 'i-mdi-earth', theme: `Earth` },
        { icon: 'i-material-symbols-local-fire-department-rounded', theme: `Fire` },
        { icon: 'i-mdi-weather-windy-variant', theme: `Air` }
    ]

	let open = writable(false);
	let themeValue = writable($themeStore.toUpperCase());

	let checkedIcon = 'i-material-symbols-check-small-rounded';
</script>

<Dropdown.Menu zIndex="z-60" ariaLabel="theme menu picker" btnStyle="btn-primary" {open}>
    <!-- Trigger button content -->
    <svelte:fragment slot="dropdown-menu-trigger">
        <span>Theme</span>
        <span
            class="text-lg transition-all {$open
                ? 'i-mdi-palette-swatch-variant -rotate-360'
                : 'i-mdi-palette-swatch rotate-y-180'}"
        />
    </svelte:fragment>

    <!-- Menu content -->
    <Dropdown.RadioGroup 
        value={themeValue} 
        {checkedIcon} 
        on:value-change={(e) => {
            $themeStore = e.detail.next.toLowerCase();
        }}
    >
        {#each themes as {icon, theme}}
            <Dropdown.RadioGroupItem
                value={theme}
            >
                <IconItem {icon} {theme} />
            </Dropdown.RadioGroupItem>
        {/each}
    </Dropdown.RadioGroup>
    
</Dropdown.Menu>
