<script>
	import '../app.css';
	import { onMount } from 'svelte';


	onMount(() => {
		
	});

	const menu = [
		{
			title: "Song Pool",
			url: "/",
			icon: "",
			favourite: false,
			active: true,
		},
		{
			title: "Events",
			url: "/events",
			icon: "",
			favourite: false,
			active: false,
		},
		{
			title: "Rankings",
			url: "/rankings",
			icon: "",
			favourite: false,
			active: false,
		},
		{
			title: "Prayer Board",
			url: "/",
			icon: "",
			favourite: false,
			active: false,
		},
		{
			title: "Verse of the day",
			url: "/",
			icon: "",
			favourite: false,
			active: false,
		},
	]


</script>


<div class="w-full h-full min-h-screen flex flex-row bg-[#181514]">

	<!-- Sidebar -->
	<div class="h-screen w-[28vh] bg-[#070606] flex flex-col relative transition-all duration-500 ease-in-out px-6 py-4 justify-start items-center altashadow">
		<div class="py-4 w-full flex justify-start flex-col">
			<a href="/">
				<img src="/SongPoolLogo.png" alt="Sinai">
			</a>
		</div>

		<div class="w-full h-full justify-start flex flex-col gap-2 py-4">
			{#each menu as item}
				{#if item.active}
					<a href={item.url} class="w-full bg-transparent hover:bg-primary py-2 rounded-lg transition-all duration-300 ease-in-out text-white px-2 hover:text-black font-bold">
						<span>{item.title}</span>
					</a>
				{:else}
					<div class="w-full bg-transparent py-2 rounded-lg transition-all duration-300 ease-in-out text-white px-2 font-bold flex flex-row gap-2">
						<div class="opacity-40">
							<span>{item.title}</span>
						</div>
						<div class="bg-[#707070] rounded-lg px-2 hidden">
							<span>
								Coming Soon!
							</span>
						</div>
					</div>
				{/if}
				
			{/each}
		</div>
	</div>

	<div class="w-full h-full flex flex-col">
		<slot/>
	</div>

</div>
