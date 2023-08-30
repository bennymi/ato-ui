<script lang="ts">
    import { writable } from 'svelte/store';
    import { Dropdown } from 'ato-ui';

    let themes = ['Ato', 'Air', 'Earth', 'Fire', 'Water'];

    let open = writable(false);
    let themeValue = writable(themes[0]);
</script>

<div class="bg-surface-50-600 p-8 rounded-container">
    <Dropdown.Menu 
        ariaLabel="theme menu" 
        btnStyle="btn-primary btn-icon"
        {open} 
    >
        <!-- Trigger button content -->
        <svelte:fragment slot="dropdown-menu-trigger">
            <span
                class="text-2xl transition-all {$open
                    ? 'i-mdi-palette-swatch-variant -rotate-360'
                    : 'i-mdi-palette-swatch rotate-y-180'}"
            />
        </svelte:fragment>

        <!-- Menu content -->
        <svelte:fragment slot="dropdown-menu-content">
            <Dropdown.Item>
                Add theme
            </Dropdown.Item>

            <Dropdown.Submenu>
                <svelte:fragment slot="submenu-trigger">
                    <div class="flex justify-around items-center">
                        <span>Select a theme</span>
                        <span class="text-lg i-material-symbols-chevron-right-rounded" />
                    </div>
                </svelte:fragment>

                <svelte:fragment slot="submenu">
                    <Dropdown.RadioGroup 
                        value={themeValue}
                        checkedIcon="i-material-symbols-check-small-rounded"
                    >
                        {#each themes as theme}
                            <Dropdown.RadioGroupItem value={theme}>{theme}</Dropdown.RadioGroupItem>
                        {/each}
                    </Dropdown.RadioGroup>
                </svelte:fragment>
            </Dropdown.Submenu>

            <Dropdown.Separator />

            <Dropdown.Item>
                Delete theme
            </Dropdown.Item>
        </svelte:fragment>
    </Dropdown.Menu>
</div>