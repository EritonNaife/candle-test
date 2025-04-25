<script lang="ts">

    import CollectionsCard from '$lib/components/CollectionsCard.svelte';
    import CardRating from '$lib/components/CardRating.svelte';
    export let data;

</script>

<main class="bg-[#FDEEEF] font-[Poppins]"> <!-- Added font -->

    <!-- Hero Section -->
    <section class="hero-section relative h-screen overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="" alt="" class="w-full h-full object-cover">
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#FDEEEF]/60 to-transparent"></div>
        </div>

        <div class="absolute bottom-60 left-20 md:p-10">
              <h1 class="text-6xl font-bold sm:text-4xl text-[#8D3C42] font-[PlayfairDisplay]"> <!-- Wine color + serif -->
                Your Hero Title
              </h1>
             
             <div class="mt-4 flex gap-4 mr-10">
                <button type="button" 
                        class="btn bg-[#8D3C42] text-white px-8 py-3 rounded-lg  
                               hover:bg-[#D4A373] transition-colors duration-300"> <!-- Primary CTA -->
                    Shop Now
                </button>
                <button type="button" 
                        class="btn border-2 border-[#8D3C42] text-[#8D3C42] px-8 py-3 rounded-lg
                               hover:bg-[#8D3C42] hover:text-white transition-colors duration-300"> <!-- Secondary CTA -->
                    Learn More
                </button>
             </div>
          </div>
    </section>

    <!-- Collections Section -->
    <section class="container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="flex flex-col items-start justify-between mb-8 gap-4 sm:flex-row sm:items-center
                    border-b-2 border-[#C27983]/10 pb-4"> <!-- Subtle border -->
          <h2 class="text-2xl font-bold text-[#8D3C42] font-[PlayfairDisplay]">Our Collections</h2>
          <a href="#" class="text-[#C27983] hover:text-[#D4A373] transition-colors duration-300"> <!-- Hover effect -->
            View All →
          </a>
        </div>
      
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each data.collections as collection (collection.title)}
            <CollectionsCard
              imageSrc={collection.imageSrc}
              imageAlt={collection.imageAlt}
              title={collection.title}
              description={collection.description}
              tag={collection.tag}
            />
          {/each}
        </div>
    </section>

   
    <!-- Featured Section -->
    <!-- Enhanced Featured Section -->
<section class="featured py-12 md:min-h-[600px] bg-[#F9F5F3] overflow-hidden">
  <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#8D3C42] font-[PlayfairDisplay] 
              animate-fade-in-up">
              You Might Like
          </h2>
          <p class="text-lg leading-relaxed max-w-prose text-[#5A5A5A] 
                     opacity-0 animate-fade-in-delayed">
              Obsessed with scents? Same. These candles are seriously worth a sniff —
              your next favorite might be right here.
          </p>
      </div>

      <!-- Mobile Carousel -->
      <div class="md:hidden relative group max-w-[100vw] ml-4">
          <div class="flex space-x-6 overflow-x-auto pb-8 px-2 scrollbar-hide pl-4 pr-16 
                      snap-x snap-mandatory">
              {#each data.featuredProducts as product}
                  <div class="flex-shrink-0 w-64 snap-center">
                      <CardRating
                          name={product.name}
                          description={product.description}
                          price={product.price}
                          rating={product.rating}
                          reviews={product.reviews}
                          imageSrc={product.imageSrc}
                      />
                  </div>
              {/each}
          </div>

          <!-- Gradient fade effects with animation -->
          <div class="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9F5F3] to-transparent 
                      pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F9F5F3] to-transparent 
                      pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <!-- Desktop Grid -->
      <div class="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full 
                  opacity-0 animate-fade-in-up-delayed">
          {#each data.featuredProducts as product}
              <CardRating
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews}
                  imageSrc={product.imageSrc}
                 
              />
          {/each}
      </div>
  </div>
</section>



    <!-- CTA Section -->
    <section class="call-to-action py-20 bg-[#8D3C42]"> <!-- Wine background -->
        <div class="container mx-auto px-4">
            <div class="flex flex-col items-center text-center space-y-8">
                <h2 class="text-4xl text-black md:text-5xl font-bold text-white tracking-tight font-[PlayfairDisplay]">
                  Join Our Community
                </h2>
                <p class="text-xl text-[#FDEEEF] max-w-2xl"> <!-- Light pink text -->
                    Discover the perfect scent for your space. Sign up now for exclusive offers and early access.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <button type="button" 
                            class="btn bg-[#D4A373] text-[#8D3C42] px-8 py-3 rounded-lg
                                   hover:bg-[#C27983] hover:text-white transition-colors"> <!-- Gold button -->
                        Shop Now
                    </button>
                    <button type="button" 
                            class="btn border-2 border-white text-white px-8 py-3 rounded-lg
                                   hover:border-[#D4A373] hover:text-[#D4A373] transition-colors"> <!-- Hover effect -->
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>
</main>


<style global>
  /* Keyframe animations */
  @keyframes fade-in-up {
      from {
          opacity: 0;
          transform: translateY(20px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out forwards;
  }

  .animate-fade-in-delayed {
      animation: fade-in-up 0.6s ease-out 0.3s forwards;
  }

  .animate-fade-in-up-delayed {
      animation: fade-in-up 0.6s ease-out 0.4s forwards;
  }

  /* Smooth card transitions */
  .transition-transform {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Hover glow effect */
  .hover-glow {
      transition: box-shadow 0.3s ease;
  }
  .hover-glow:hover {
      box-shadow: 0 4px 24px -4px rgba(141, 60, 66, 0.2);
  }

  /* Scroll snap behavior */
  .snap-x {
      scroll-snap-type: x mandatory;
  }
  .snap-center {
      scroll-snap-align: center;
  }
</style>

