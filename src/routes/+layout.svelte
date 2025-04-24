<script lang="ts">
	import '../app.css'
	import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';
	import Header from '$lib/components/Header.svelte';
	import HeaderGemini from '$lib/components/HeaderGemini.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>


<div class="grid h-screen grid-rows-[auto_1fr_auto]">

	<AnnouncementBar/>
	<Header/>
	<slot/>
	<Footer/>


</div>

