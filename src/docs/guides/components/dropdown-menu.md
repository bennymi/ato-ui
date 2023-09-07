---
title: Dropdown Menu
description: Displays a menu to the user, which can consist of links or functions, as well as additional sub-menus, triggered by a button.
---

## Item Colours

You can update the styles of the items on a global level inside the `Dropdown.Menu` component with the `itemStyle` and `itemDisabledStyle` props. These automatically get passed to any children items (also the radio group items and checkbox items). You can also overwrite the styles of individual items however. The preview has an example of this, which changes the background colour of the delete item to red. 

The `Item`, `CheckboxItem`, and `RadioGroupItem` all have the `itemStyle`. The `Item` and `CheckboxItem` additionally also have the `itemDisabledStyle` prop. Individual radio group items cannot be disabled.

```svelte {2, 14} /itemStyle/#prop
<Dropdown.Menu
    itemStyle="px-2 py-1 hover:(primary-500)"
    ariaLabel="theme menu" 
    btnStyle="btn-primary" 
    {open}
>
    <!-- Trigger button content -->
    <svelte:fragment slot="dropdown-menu-trigger">
        <span>Theme</span>
    </svelte:fragment>

    <!-- Menu content -->
    <Dropdown.Item
        itemStyle="px-2 py-1 hover:(error-500)"
    >
        Delete theme
    </Dropdown.Item>
</Dropdown.Menu>
```

## Listening to Events

All components except for the `Dropdown.Menu` component have events that you can listen to for updates. Check the API Events section below to see them in more detail.

```svelte {12, 21} /on:m-click/#prop /on:checked-change/#prop
<Dropdown.Menu
    ariaLabel="theme menu" 
    {open}
>
    <!-- Trigger button content -->
    <svelte:fragment slot="dropdown-menu-trigger">
        <span>Theme</span>
    </svelte:fragment>

    <!-- m-click event -->
    <Dropdown.Item 
        on:m-click={doSomething}
    >
        Delete theme
    </Dropdown.Item>

    <!-- checked-change event -->
    <Dropdown.CheckboxItem
        checked={dark}
        {checkedIcon}
        on:checked-change={(e) => console.log('checked change', e)}
    >
        Dark Mode
    </Dropdown.CheckboxItem>
</Dropdown.Menu>
```