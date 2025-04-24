<script>
    import { onMount } from 'svelte';
  
    let isScrolled = false;
  
    onMount(() => {
      const handleScroll = () => {
        // Set isScrolled to true if scrolled more than, say, 50px from the top
        isScrolled = window.scrollY > 50;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component is destroyed
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  </script>
  

  
  <header class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 {isScrolled ? 'bg-surface-100/90 shadow-md' : 'bg-transparent'}">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="text-xl font-bold">Your Logo</a>
  
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <style>
    /* Add any component-specific styles here if needed */
  </style>