<script>
    import Button from '$lib/components/ui/button/button.svelte';
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import { tick } from 'svelte';

    export let data;
</script>


<div class="w-full h-full flex flex-col py-10 px-16 gap-4">
    <div>
        <h1 class="text-white text-4xl font-bold">{data?.song.title}</h1>
    </div>

    <div class="text-white opacity-80">
        {data?.song?.author}
    </div>

    <div class="flex flex-row justify-center items-center w-full h-full relative">
        <!-- Lyrics -->
        <div class="w-full h-full flex flex-col max-h-[80vh] overflow-auto bg-[#070606] rounded-xl px-6 py-6 min-w-[45vw]">
            <pre class="text-white font-sans tracking-wider">{data?.song.lyrics}</pre>
        </div>
        <div class="w-full h-full flex flex-col px-6 py-6 gap-6 relative ">
            <Button href="{data?.song?.video}"class="bg-black rounded-full px-4 py-2 font-medium hover:bg-primary transition-all duration-300 ease-in-out hover:text-black">
                {data?.song.video}
            </Button>

            {#if data?.song?.chords}
                <Button href="{data?.song?.chords}"class="bg-black rounded-full px-4 py-2 font-medium hover:bg-primary transition-all duration-300 ease-in-out hover:text-black overflow-auto">
                    Go to Chords
                </Button>
            {/if}

            <div class="w-full flex flex-row gap-4">
                <div class="flex flex-col gap-4 w-full">
                    <span class="text-white">
                        Original Key
                    </span>
                    {#if data?.song?.original_key}
                        <div class="bg-[#e6e6e6] px-4 rounded-full">
                            {data?.song?.original_key}
                        </div>
                    {:else}
                        <div class="bg-[#e6e6e6] px-4 rounded-full">
                            -
                        </div>
                    {/if}
                </div>

                <div class="flex flex-col gap-4 w-full">
                    <span class="text-white">
                        Actual Key
                    </span>
                    {#if data?.song?.actual_key}
                        <div class="bg-[#e6e6e6] px-4 rounded-full">
                            {data?.song?.actual_key}
                        </div>
                    {:else}
                        <div class="bg-[#e6e6e6] px-4 rounded-full">
                            -
                        </div>
                    {/if}
                </div>

                <div class="flex flex-col gap-4 w-full">
                    <span class="text-white">
                        Tempo
                    </span>
                    <div class="bg-[#e6e6e6] px-4 rounded-full">
                        {data?.song?.tempo} Bpm
                    </div>
                </div>
            </div>

            <div class="w-full h-full flex flex-col max-h-[30vh] overflow-auto px-4 py-4 bg-black rounded-xl">
                {#if data?.song?.description}
                    <span class="text-white">   
                        {data?.song?.description}
                    </span>
                {:else}
                    <span class="text-white text-opacity-60">   
                        No description added yet.
                    </span>
                {/if}
            </div>

            <div class="w-full flex flex-row gap-4">
                <Button href='/songs/{data?.song?.id}/update' class="bg-black rounded-full px-4 py-2 font-medium hover:bg-primary transition-all duration-300 ease-in-out hover:text-black w-full">
                    Update
                </Button>

                <AlertDialog.Root>
                    <AlertDialog.Trigger class="bg-black rounded-full px-4 py-2 font-medium hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out w-full text-white text-sm">
                        Delete
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                      <AlertDialog.Header>
                        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                        <AlertDialog.Description>
                          This will permanently delete <b>{data?.song?.title}</b>
                          and remove it from our servers.
                        </AlertDialog.Description>
                      </AlertDialog.Header>
                      <AlertDialog.Footer>
                        <AlertDialog.Cancel>Go Back</AlertDialog.Cancel>
                        <AlertDialog.Action class="text-black bg-transparent hover:bg-red-600 hover:text-white">

                          <form action="?/deleteSong" method="POST" class="w-full">
                            <input type="text" name="id" value={data?.song?.id} class="hidden" hidden>
                            <button type="submit">
                                Delete
                            </button>
                          </form>

                        </AlertDialog.Action>
                      </AlertDialog.Footer>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
            </div>
        </div>
    </div>
</div>