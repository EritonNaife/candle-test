<script lang="ts">
    import Icon  from '@iconify/svelte'; // Importing the heart icon
    export let name;
    export let description;
    export let price;
    export let Ratings;
    export let  imageSrc;
    export let imageAlt;
  </script>
  
  <!-- Card wrapper: used to group everything, and apply group-hover effects -->
  <div class="group relative flex flex-col items-start gap-10">
  
    <!-- Image container (relative to allow absolute positioning inside it) -->
    <div class="relative w-[360px] h-[540px] group">
      
      <!-- Main product image -->
      <img
        src={imageSrc}
        alt={imageAlt}
        class="object-cover w-full h-full" 
      />
  
      <!-- Sliding Buy Now button overlay -->
      <div
        class="absolute inset-x-0 bottom-0 flex items-center justify-center 
                opacity-0 transition-all
               p-2 transition-transform duration-300 
               translate-y-full group-hover:-translate-y-2 group-hover:opacity-100"
      >
        <!-- Buy Now button -->
        <button
          class="w-full bg-black hover:bg-[#D4A373] text-white 
                 py-2 px-4 rounded-md font-medium text-sm 
                 transition-colors duration-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  
    <!-- Favorite (heart) icon positioned top-right -->
    <div class="absolute left-[90%] top-[1%] group/icon cursor-pointer transition-all duration-500">
        <!-- Outlined heart (default) -->
        <Icon
          icon="mdi:heart-outline"
          class="size-7 block group-hover/icon:hidden transition-colors"
        />
    
        <!-- Red filled heart (on hover) -->
        <Icon
          icon="mdi:heart"
          class="size-7 hidden group-hover/icon:block transition-colors"
          style="color: #f00"
        />
      </div>
    
  
    <!-- Product description area -->
    <div class="content-holder flex flex-col items-start gap-5">
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{Ratings}</p>
    </div>
  </div>
  