<script lang="ts">
	import { goto } from "$app/navigation";
    import { Button } from "$lib/components/ui/button/index.js";
  </script>

<div class="w-full h-full min-h-screen flex flex-col md:py-10 py-8 md:px-16 px-8 gap-8">

    <!-- Header -->
    <div class="w-full md:flex-row flex-col md:gap-6 gap-8 flex justify-between items-center">
        <!-- Title -->
        <div class="flex flex-col w-full">
            <h1 class="text-white text-4xl font-bold">Events</h1>
        </div>
        <div class="w-full h-full flex items-center justify-end">
            <Button href="/events/new-event" class="bg-black rounded-full font-medium hover:bg-primary transition-all duration-300 ease-in-out hover:text-black">
                New Event
            </Button>
        </div>
    </div>
    <div class="w-full md:flex-row flex-col md:gap-6 gap-8 flex items-start justify-start">
    </div>
</div>