<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import Icon  from '@iconify/svelte';
  import SearchBar1 from './SearchBar1.svelte';
  import AnnouncementBar from './AnnouncementBar.svelte';
  
  // Define props with TypeScript types
  export let scrolledColor: string = 'bg-[#FDEEEF]/95 '; 
  export let textColor: string = 'text-[#8D3C42]';
  export let scrolledTextColor: string = 'text-[#8D3C42]';
  
  let scrollY: number = 0;
  let isScrolled: boolean = false;
  
  // Threshold for when to change the header color (in pixels)
  const SCROLL_THRESHOLD: number = 1000;
  
  // Update scrollY value when page is scrolled
  function handleScroll(): void {
    scrollY = window.pageYOffset;
    isScrolled = scrollY > SCROLL_THRESHOLD;
  }
  
  onMount(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    // Clean up event listener when component is destroyed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>


<div class="fixed top-0 left-0 w-full z-50">
  <AnnouncementBar />
</div>


<header class="fixed top-10 left-0 w-full z-40 transition-all duration-300 backdrop-blur-sm {isScrolled ? scrolledColor : 'bg-transparent'} {isScrolled ? scrolledTextColor : textColor} ">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="" class="h1 mr-15">Logo</a>
    
    <!-- Navigation -->
    <nav class="hidden md:flex space-x-6">
      <a href="/" class="hover:underline">Home</a>
      <a href="/about" class="hover:underline">About</a>
      <a href="/services" class="hover:underline">Services</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </nav>

    <div class="hidden md:flex space-x-5">
      <SearchBar1/>
      <Icon icon="ph:user-light" class="text-4xl"/>
      <Icon icon="ph:heart-light" class="text-4xl"/>
      <Icon icon="ph:shopping-cart-simple-light" class="text-4xl"/>
    </div>
    
    <!-- Mobile menu button -->
    <button class="md:hidden flex items-center">
      <Icon icon="mdi:menu" class="text-2xl" />
    </button>
  </div>
</header>

