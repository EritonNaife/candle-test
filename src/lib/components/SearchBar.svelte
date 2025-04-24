<script>
    import Icon from "@iconify/svelte";
    import { fade } from 'svelte/transition';
    let isSearchFocused = false;
</script>

<div class="search-bar relative flex items-center">
    <input 
        class="input border-none rounded-full font-medium w-80 focus:w-[300px] transition-all duration-300 pl-4 pr-10 py-2 bg-[#B05D68]/95 text-white placeholder-gray-300 focus:placeholder-gray-400 focus:bg-transparent focus:ring-2 focus:ring-white/30 focus:shadow-none" 
        type="search" 
        placeholder="Search products..." 
        on:focus={() => isSearchFocused = true}
        on:blur={() => isSearchFocused = false}
    />
    <button 
        class="absolute right-3 text-gray-300 hover:text-white transition-colors"
        type="button"
        aria-label="Search">
        <Icon icon="ph:magnifying-glass" width="18" height="18" />
    </button>

    {#if isSearchFocused}
    <div class="absolute top-full left-0 right-0 mt-2 bg-[#6E2A30]/50 backdrop-blur-sm rounded-lg shadow-lg p-4" 
         transition:fade={{duration: 200}}>
        <p class="text-sm text-gray-600">Start typing to search...</p>
        <!-- Add search suggestions here -->
    </div>
    {/if}
</div>

<style>
    .input::placeholder {
        transition: color 0.3s ease;
    }
</style>