<script lang="ts">
  import Icon from '@iconify/svelte';
  
  export let name = '';
  export let description = '';
  export let price = '';
  export let rating = 0;
  export let reviews = 0;
  export let imageSrc = '';
  
  let isWishlisted = false;
  
  function toggleWishlist() {
    isWishlisted = !isWishlisted;
  }
</script>

<div class="group relative">
  <div class="relative aspect-[3/4] overflow-hidden rounded-lg">
      <!-- Product Image -->
      <img
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      <!-- Wishlist Button -->
      <button
          class="absolute right-2 top-2 h-8 w-8 rounded-full bg-primary-50/80 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center"
          on:click={toggleWishlist}
      >
          <Icon
              icon={isWishlisted ? "mdi:heart-fill" : "mdi:heart-outline"}
              class={isWishlisted ? "h-4 w-4 text-primary-700" : "h-4 w-4 text-primary-500"}
          />
          <span class="sr-only">Add to wishlist</span>
      </button>
      
      <!-- Quick View Button -->
      <div class="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-primary-50/90 p-2 transition-transform group-hover:translate-y-0">
          <button class="w-full bg-[#D4A373] hover: text-[#8D3C42] py-2 px-4 rounded-md font-medium text-sm transition-colors">
              Quick View
          </button>
      </div>
  </div>
  
  <!-- Product Info -->
  <div class="mt-3 space-y-1">
      <a href="#" class="block">
          <h3 class="font-medium text-dark text-primary-700">{name}</h3>
          <p class="text-sm text-content text-primary-700">{description}</p>
      </a>
      <div class="flex items-center justify-between">
          <span class="font-medium text-primary-700">{price}</span>
          <div class="flex items-center gap-1">
              <Icon icon="mdi:star" class="h-3.5 w-3.5 text-accent" />
              <span class="text-xs font-medium text-dark">{rating}</span>
              <span class="text-xs text-content">({reviews})</span>
          </div>
      </div>
  </div>
</div>