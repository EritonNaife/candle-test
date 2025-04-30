<script lang="ts">
	import '../app.css';
	import TransparentHeader from '$lib/components/TransparentHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>


<div class="grid h-screen grid-rows-[auto_1fr_auto]">


	<TransparentHeader/>
	<slot/>
	<Footer/>


</div>


