<script lang="ts">
    import Icon from '@iconify/svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let openItem: string | null = null;
  
    const toggleItem = (item: string) => {
      openItem = openItem === item ? null : item;
    };
  </script>
  
  <div class="flex h-full flex-col overflow-y-auto">
    <!-- Header -->
    <div class="flex items-center justify-between border-b px-4 py-4">
      <span class="text-lg font-semibold">Candle Menu</span>
      <button on:click={() => dispatch('close')} class="rounded-full p-2 hover:bg-gray-100">
        <Icon icon="material-symbols:close" class="h-5 w-5" />
        <span class="sr-only">Close</span>
      </button>
    </div>
  
    <!-- Accordion Menu -->
    <div class="flex-1 px-4 py-6">
      <div class="w-full">
        <!-- Shop By Fragrance -->
        <div class="border-b">
          <button
            on:click={() => toggleItem('fragrance')}
            class="flex w-full items-center justify-between py-4 text-base font-medium"
          >
            <span>Shop By Fragrance</span>
            <Icon
              icon={openItem === 'fragrance' ? 'material-symbols:expand-less' : 'material-symbols:expand-more'}
              class="h-5 w-5"
            />
          </button>
          {#if openItem === 'fragrance'}
            <div class="grid gap-3 pl-1 pb-4">
              <a href="#" class="text-sm text-muted-foreground">All Scents</a>
              <a href="#" class="text-sm text-muted-foreground">Floral</a>
              <a href="#" class="text-sm text-muted-foreground">Woody</a>
              <a href="#" class="text-sm text-muted-foreground">Fresh</a>
              <a href="#" class="text-sm text-muted-foreground">Spicy</a>
              <a href="#" class="text-sm text-muted-foreground">Citrus</a>
            </div>
          {/if}
        </div>
  
        <!-- Candle Types -->
        <div class="border-b">
          <button
            on:click={() => toggleItem('types')}
            class="flex w-full items-center justify-between py-4 text-base font-medium"
          >
            <span>Candle Types</span>
            <Icon
              icon={openItem === 'types' ? 'material-symbols:expand-less' : 'material-symbols:expand-more'}
              class="h-5 w-5"
            />
          </button>
          {#if openItem === 'types'}
            <div class="grid gap-3 pl-1 pb-4">
              <a href="#" class="text-sm text-muted-foreground">All Candles</a>
              <a href="#" class="text-sm text-muted-foreground">Jar Candles</a>
              <a href="#" class="text-sm text-muted-foreground">Pillar Candles</a>
              <a href="#" class="text-sm text-muted-foreground">Tealights</a>
              <a href="#" class="text-sm text-muted-foreground">Votives</a>
              <a href="#" class="text-sm text-muted-foreground">Travel Tins</a>
            </div>
          {/if}
        </div>
  
        <!-- Collections -->
        <div class="border-b">
          <button
            on:click={() => toggleItem('collections')}
            class="flex w-full items-center justify-between py-4 text-base font-medium"
          >
            <span>Collections</span>
            <Icon
              icon={openItem === 'collections' ? 'material-symbols:expand-less' : 'material-symbols:expand-more'}
              class="h-5 w-5"
            />
          </button>
          {#if openItem === 'collections'}
            <div class="grid gap-3 pl-1 pb-4">
              <a href="#" class="text-sm text-muted-foreground">All Collections</a>
              <a href="#" class="text-sm text-muted-foreground">Seasonal</a>
              <a href="#" class="text-sm text-muted-foreground">Holiday Collection</a>
              <a href="#" class="text-sm text-muted-foreground">Essential Oils</a>
              <a href="#" class="text-sm text-muted-foreground">Summer Vibes</a>
            </div>
          {/if}
        </div>
  
        <!-- Gifts -->
        <div class="border-b">
          <button
            on:click={() => toggleItem('gifts')}
            class="flex w-full items-center justify-between py-4 text-base font-medium"
          >
            <span>Gifts & Sets</span>
            <Icon
              icon={openItem === 'gifts' ? 'material-symbols:expand-less' : 'material-symbols:expand-more'}
              class="h-5 w-5"
            />
          </button>
          {#if openItem === 'gifts'}
            <div class="grid gap-3 pl-1 pb-4">
              <a href="#" class="text-sm text-muted-foreground">All Gifts</a>
              <a href="#" class="text-sm text-muted-foreground">Gift Sets</a>
              <a href="#" class="text-sm text-muted-foreground">Subscription Box</a>
              <a href="#" class="text-sm text-muted-foreground">Corporate Gifting</a>
              <a href="#" class="text-sm text-muted-foreground">Custom Bundles</a>
            </div>
          {/if}
        </div>
      </div>
  
      <!-- Additional Links -->
      <div class="mt-6 space-y-4">
        <a href="#" class="flex items-center justify-between py-2 text-base font-medium">
          Sale <Icon icon="material-symbols:chevron-right" class="h-5 w-5" />
        </a>
        <a href="#" class="flex items-center justify-between py-2 text-base font-medium">
          Candle Care <Icon icon="material-symbols:chevron-right" class="h-5 w-5" />
        </a>
        <a href="#" class="flex items-center justify-between py-2 text-base font-medium">
          Account <Icon icon="material-symbols:chevron-right" class="h-5 w-5" />
        </a>
        <a href="#" class="flex items-center justify-between py-2 text-base font-medium">
          Track Order <Icon icon="material-symbols:chevron-right" class="h-5 w-5" />
        </a>
        <a href="#" class="flex items-center justify-between py-2 text-base font-medium">
          Loyalty Program <Icon icon="material-symbols:chevron-right" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>