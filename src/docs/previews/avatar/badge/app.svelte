<script lang="ts">
	import { Avatar } from 'ato-ui';
</script>

<div class="flex justify-center items-center gap-8">
    <!-- Avatar with a badge -->
    <div class="relative inline-flex justify-center items-center">
        <Avatar src="/corgi-avatar.jpg" />

        <!-- Badge -->
        <div 
            class="absolute w-5 h-5 rounded-btn 
                border-2 border-surface-900 flex 
                justify-center items-center 
                bg-surface-700 -bottom-0.5 -right-0.5"
        >
            <span class="inline-flex w-3 h-3 i-material-symbols-nights-stay-rounded" />
        </div>
    </div>

    <!-- Avatar with a spinner -->
    <div class="relative inline-flex justify-center items-center">
        <Avatar src="/corgi-avatar.jpg" />

        <!-- Spinner -->
        <div
            class="avatar-typing absolute -bottom-0.5 -right-0.5 error-500 w-8 h-4 rounded-btn border-2 border-surface-900 flex justify-center items-center"
        >
            <span class="i-svg-spinners-3-dots-move" />
        </div>
    </div>
</div>