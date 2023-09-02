<script lang="ts">
    import { createAvatar } from '@melt-ui/svelte';


	/** Set the image source. */
	export let src = '';
	/** Set the image alt value. */
	export let alt = 'avatar';
	/** Set the text value in case you don't have an image. The string automatically gets shortened to 4 characters. If you pass in separate words it will use the first letters of each word. */
	export let text = '';
    /** The amount of time in milliseconds to wait before displaying the image. */
    export let delayMs = 0;

	/** Set the width and height of the avatar. */
	export let size = 'w-16 h-16';
	/** Set the rounded shape. */
	export let rounded = 'rounded-btn';
	/** Set the border styles. */
	export let borderStyle = 'border-2 border-surface-500-800';
	/** Set the background color, for when the text is being shown. Has no effect for when an image is being shown. */
	export let background = 'bg-primary-500';
	/** Set the text styles. */
	export let textStyles = 'font-bold text-on-primary';


    const {
        elements: { image, fallback },
    } = createAvatar({
        src,
        delayMs
    });

	const formatText = () => {
		let letters = text
			.trim()
			.split(/\s/g)
			.map((item) => item[0]);

		return letters.slice(0, 4).join('');
	};

	$: formattedText = text.length < 5 ? text : formatText();
</script>

<span
    class="avatar-image {size} {rounded} {borderStyle} {background} inline-flex justify-center items-center drag-none overflow-hidden"
>
    {#if src}
        <img
            {...$image} use:image
            class="{size} {rounded} drag-none transition-all hover:(scale-110)" 
            {alt} 
        />
    {:else}
        <span class={textStyles}>{formattedText}</span>
    {/if}
</span>