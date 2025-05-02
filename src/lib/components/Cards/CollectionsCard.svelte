<script lang="ts">
  export let imageSrc: string;
  export let imageAlt: string;
  export let title: string;
  export let description: string;
  export let tag: string; // Optional tag
</script>

<div class="w-100 mx-auto group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow 
            duration-300 lg:w-120">
  <div class="relative">
    <!-- Image Container -->
    <div class="aspect-[4/3]">
      <img
        src={imageSrc}
        alt={imageAlt}
        class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Content Overlay -->
    <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#8D3C42]/80 to-transparent">
      <h3 class="text-lg font-semibold text-white md:text-xl">{title}</h3>
      <p class="mt-1 text-sm text-gray-200">{description}</p>
    </div>

    <!-- Collection Tag -->
    {#if tag}
      <span class="absolute top-4 right-4 bg-[#C27983] text-white px-3 py-1 rounded-full text-sm">
        {tag}
      </span>
    {/if}
  </div>

</div>