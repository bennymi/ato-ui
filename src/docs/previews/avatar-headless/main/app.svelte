<script lang="ts">
    import { createAvatar } from '@melt-ui/svelte';


	/** Set the image source. */
	export let src = '/corgi-avatar.jpg';
	/** Set the image alt value. */
	export let alt = 'avatar';

    const {
        elements: { image },
    } = createAvatar({
        src
    });
</script>

<span
    class="avatar-image w-16 h-16 rounded-btn border-2 border-surface-500-800 inline-flex justify-center items-center drag-none overflow-hidden"
>
    <img
        {...$image} use:image
        class="w-16 h-16 rounded-btn drag-none transition-all hover:(scale-110)" 
        {alt} 
    />
</span>