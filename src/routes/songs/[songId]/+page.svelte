<script>
    import Button from '$lib/components/ui/button/button.svelte';
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import { tick } from 'svelte';

    export let data;
</script>


<div class="w-full h-full flex flex-col py-10 md:px-16 px-6 gap-4">
    <div>
        <h1 class="text-white text-4xl font-bold">{data?.song.title}</h1>
    </div>

    <div class="text-white opacity-80">
        {data?.song?.author}
    </div>

    <div class="flex flex-col lg:flex-row justify-center items-center w-full h-full relative">
        <!-- Lyrics -->
        <div class="w-full flex flex-col lg:max-h-[80vh] h-[90vh] overflow-auto bg-[#070606] rounded-xl px-6 py-6 lg:min-w-[35vw] xl:min-w-[40vw]">
            <pre class="text-white font-sans tracking-wider">{data?.song.lyrics}</pre>
        </div>
        <div class="w-full h-full flex flex-col px-6 py-6 gap-6 relative ">
            <Button href="{data?.song?.video}"class="bg-black rounded-full px-4 py-4 font-medium hover:bg-primary flex flex-row gap-2 transition-all duration-300 ease-in-out hover:text-black overflow-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>      
                  <span>
                    Watch Video
                  </span>            
            </Button>

            {#if data?.song?.chords_url}
                <Button href="{data?.song?.chords_url}"class="bg-black flex flex-row gap-2 rounded-full px-4 py-2 font-medium hover:bg-primary transition-all duration-300 ease-in-out hover:text-black overflow-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>                   
                    Go to Chords
                </Button>
            {/if}

            <div class="w-full flex flex-row gap-4">
                <div class="flex flex-col gap-4 w-full">
                    <span class="text-white">
                        Key
                    </span>
                    {#if data?.song?.key}
                        <div class="bg-[#e6e6e6] px-4 rounded-full">
                            {data?.song?.key}
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