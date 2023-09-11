<!-- ---
title: Convenient Shortcuts
description: These are some convenience UnoCSS shortcuts for styling components with fewer classes.
---

# Convenience

## Attributify Mode Inside `class`

Pattern: `/^(\w+)-\((.*)\)$/`

This pattern allows you to group together classes for one category inside square brackets [].

Example: `text-(teal,5xl,lg:8xl) font-(mono,semibold)` turns into: `text-teal text-5xl lg:text-8xl font-mono font-semibold`

```html showCode=true
<div class="text-(teal,5xl,lg:8xl) font-(mono,semibold)">Hi</div>
``` -->
