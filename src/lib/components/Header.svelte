<script>

    import Icon from "@iconify/svelte";


    import { onMount } from 'svelte';
    import SearchBar from './SearchBar.svelte';
    
    let isScrolled = false;
    let isMenuOpen = false;
    
    onMount(() => {
      const handleScroll = () => {
        isScrolled = window.scrollY > 50;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
</script>
  
  
<header class="fixed top-0 md:mt-10 top-10 left-0 right-0 z-50 transition-colors duration-300 {isScrolled ? 'bg-[#FDEEEF]/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}">
  <div class="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
    <a href="/" class="text-xl font-bold text-[#8D3C42]">Your Logo</a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:block">
      <ul class="flex space-x-4 text-[#8D3C42]">
        <li><a href="/" class="hover:text-[#D4A373]">Home</a></li>
        <li><a href="/about" class="hover:text-[#D4A373]">About</a></li>
        <li><a href="/contact" class="hover:text-[#D4A373]">Contact</a></li>
      </ul>
    </nav>

    <!-- Desktop Right Section -->
    <div class="hidden md:flex items-center space-x-10">
      <SearchBar />
      <Icon icon="ph:user-light" class="text-2xl text-[#8D3C42] hover:text-[#D4A373] cursor-pointer" />
      <Icon icon="ph:heart-light" class="text-2xl text-[#8D3C42] hover:text-[#D4A373] cursor-pointer" />
      <Icon icon="ph:shopping-cart-simple-light" class="text-2xl text-[#8D3C42] hover:text-[#D4A373] cursor-pointer" />
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden flex items-center space-x-4">
      <Icon icon="ph:magnifying-glass-light" class="text-2xl text-[#8D3C42] hover:text-[#D4A373] cursor-pointer" />
      <Icon icon="ph:shopping-cart-simple-light" class="text-2xl text-[#8D3C42] hover:text-[#D4A373] cursor-pointer" />
      <button on:click={() => isMenuOpen = !isMenuOpen}>
        {#if isMenuOpen}
          <Icon icon="ph:x-light" class="text-2xl text-[#D4A372] hover:text-[#D4A373] cursor-pointer" />
        {:else}
          <Icon icon="ph:list-light" class="text-2xl text-[#8D3C42] hover:text-[#D4A373] cursor-pointer" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if isMenuOpen}
    <div class="md:hidden absolute top-full left-0 right-0 bg-[#FDEEEF]/95 backdrop-blur-sm shadow-md">
      <div class="container mx-auto px-4 py-4">
        <nav class="mb-4">
          <ul class="flex flex-col space-y-4 text-[#8D3C42]">
            <li><a href="/" on:click={() => isMenuOpen = false} class="block hover:text-[#D4A373]">Home</a></li>
            <li><a href="/about" on:click={() => isMenuOpen = false} class="block hover:text-[#D4A373]">About</a></li>
            <li><a href="/contact" on:click={() => isMenuOpen = false} class="block hover:text-[#D4A373]">Contact</a></li>
          </ul>
        </nav>
        <div class="flex items-center space-x-4">
          <SearchBar />
          <Icon icon="ph:user-light" class="text-2xl hover:text-[#D4A373] cursor-pointer" />
          <Icon icon="ph:heart-light" class="text-2xl hover:text-[#D4A373] cursor-pointer" />
        </div>
      </div>
    </div>
  {/if}
</header>