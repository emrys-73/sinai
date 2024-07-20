<script>
	import '../app.css';
	import { onMount } from 'svelte';


	onMount(() => {
		
	});

	const menu = [
		{
			title: "Song Pool",
			url: "/",
			icon: "m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z",
			favourite: false,
			active: true,
		},
		{
			title: "Events",
			url: "/events",
			icon: "M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z",
			favourite: false,
			active: false,
		},
		{
			title: "Rankings",
			url: "/rankings",
			icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
			favourite: false,
			active: false,
		},
		{
			title: "Prayer Board",
			url: "/",
			icon: "M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288",
			favourite: false,
			active: false,
		},
		{
			title: "Verse of the day",
			url: "/",
			icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
			favourite: false,
			active: false,
		},
	]


</script>


<div class="w-full h-screen flex flex-row bg-[#181514] overflow-auto">

	<!-- Sidebar -->
	<div class="h-screen md:hidden w-[15vw] bg-[#070606] flex flex-col relative transition-all duration-500 ease-in-out py-4 justify-start items-center altashadow">
		<div class="w-full px-1 sm:px-2 flex justify-center items-center">
			<a href="/">
				<img src="/Logo.png" alt="Sinai">
			</a>
		</div>

		<div class="w-full h-full justify-start items-center flex flex-col gap-6 py-8 ">
			{#each menu as item}
			{#if item.active}
				<a href="{item.url}" class="text-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
						<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
					</svg>
				</a>
			{:else}
				<div class="text-white opacity-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
						<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
					</svg>
				</div>

			{/if}
			{/each}	
		</div>
	 </div>

	<div class="h-screen hidden md:flex md:w-[30vw] lg:w-[25vw] bg-[#070606] flex-col relative transition-all duration-500 ease-in-out px-6 py-4 justify-start items-center altashadow">
		<div class="py-4 w-full flex justify-start flex-col">
			<a href="/">
				<img src="/SongPoolLogo.png" alt="Sinai">
			</a>
		</div>

		<div class="w-full h-full justify-start flex flex-col gap-2 py-4">
			{#each menu as item}
				{#if item.active}
					<a href={item.url} class="w-full bg-transparent hover:bg-primary py-2 rounded-lg transition-all duration-300 ease-in-out text-white px-2 hover:text-black font-bold flex flex-row gap-2 hover:stroke-black stroke-white">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
						</svg>
						<span>{item.title}</span>
					</a>
				{:else}
					<div class="w-full bg-transparent py-2 rounded-lg transition-all duration-300 ease-in-out text-white px-2 font-bold flex flex-row gap-2">
						<div class="opacity-40 flex flex-row gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
								<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
							</svg>
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

	<div class="w-full h-screen flex flex-col overflow-auto">
		<slot/>
	</div>

</div>
