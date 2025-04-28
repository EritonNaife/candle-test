<script lang="ts">
    import Icon from '@iconify/svelte';
    export let isOpen = false;
    export let toggle: () => void;
</script>

<button
    on:click={toggle}
    class="md:hidden p-2 rounded-lg"
    aria-label={isOpen ? "Close menu" : "Open menu"}
>
    <Icon 
        icon={isOpen ? "material-symbols:close" : "material-symbols:menu"} 
        class="h-6 w-6 text-[#8D3C42]" 
    />
</button>