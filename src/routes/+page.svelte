<script>
// @ts-nocheck

  import Input from "$lib/components/ui/input/input.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Table from "$lib/components/ui/table";
  import { useChat } from '@ai-sdk/svelte';

  export let data;

  const dataToString = (data) => {
        return data.map(obj => {
            // Create a shallow copy of the object excluding specified keys
            const { new: _, spotify, video, chords, updated, youtube_music, language, last_play, collectionId, apple_music, collectionName, created, id, ...filteredObj } = obj;
            return JSON.stringify(filteredObj);
        }).join(' ');
    }

  let songsData = dataToString(data.songs);

  let systemPrompt = `You are our personal assistant that will help us with all things related to our worship songs. You will always reply in short sentences giving brief explanation of why you replied. We at Elim Church have a lot of songs we play and your task is to be able to reply all questions about them and give suggestions to what to play accordign to topics if needed. You will only reply about our songs. This is our own song database. Here is the data on our songs: ${songsData}`;

  const { input, handleSubmit, messages, setMessages } = useChat({
          api: "/api/chat",
          initialMessages: [{"role": "system", "content": `${systemPrompt}`}],
          onFinish: () => {
        }
      })

  let debug = false;

</script>


<div class="w-full h-full min-h-screen flex flex-col md:py-10 py-8 md:px-16 px-8 gap-8">

    <!-- Header -->
    <div class="w-full md:flex-row flex-col md:gap-6 gap-8 flex justify-between items-center">
        <!-- Title -->
        <div class="flex flex-col w-full">
            <h1 class="text-white text-4xl font-bold">Song Pool</h1>
        </div>

        <!-- SarchBar -->
         <form on:submit={handleSubmit} class="min-w-[45vw] flex flex-row gap-2 w-full">
            {#if $messages.length > 1}
              <Button on:click={() => setMessages([])} class="rounded-full bg-black text-white hover:bg-primary hover:text-black">
                Close chat
              </Button>
            {/if}
            <Input bind:value={$input} class="rounded-full border-opacity-50 text-white placeholder:text-white placeholder:text-opacity-50" placeholder="Smart-Seaerch coming soon!">
                
            </Input>

            <Button type="submit" class="rounded-full text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>              
            </Button>
          </form>
    </div>

    <!-- Chat Interface for Smart Search -->
     {#if $messages.length > 1}
      <div class="w-full flex flex-col gap-2 min-h-[20vh] max-h-[40vh] overflow-auto px-4 py-4">
        <ul class="w-full flex flex-col">
          {#each $messages as message}
            {#if message.role === 'assistant'}
              <li class="bg-black text-white w-full px-4 py-2 rounded-xl"><pre class="font-sans w-full overflow-y-auto whitespace-pre-wrap">{@html message.content}</pre></li>
            {:else if message.role === 'user'}
              <li class="px-4 py-2 text-white">{message.content}</li>
            {:else if debug}
              <li class="px-4 py-2 text-white">{message.content}</li>
            {/if}
          {/each}
          </ul>
        </div>
      {/if}
      
    <!-- Action Buttons -->
     <div class="w-full flex flex-row gap-2">
        <!-- Probably some Add Song button or any AI functionality here -->
         <Button href="/add" class="text-black font-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            + Add Song
         </Button>
     </div>

    <!-- table -->
     <div>
      <!-- Redesign table component someday -->
        <Table.Root class="">
            <Table.Caption class="text-white opacity-50">A list of some of our songs</Table.Caption>
            <Table.Header>
              <Table.Row class="text-white">
                <Table.Head class="w-[60vw] lg:w-[20vw] text-white font-bold">Title</Table.Head>
                <Table.Head class="text-white w-[30vw] lg:w-[15vw] font-bold">Author</Table.Head>
                <Table.Head class="text-white w-[25vw] font-bold text-right lg:text-left">Video</Table.Head>
                <Table.Head class="text-white w-full font-bold lg:flex hidden text-right justify-end">Chords</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {#each data.songs as song}
                <Table.Row class="hover:bg-black transition-all duration-300 ease-in-out font-light">
                  <Table.Cell class="font-medium text-white">
                    <a href="/songs/{song.id}" class="font-bold w-full hover:text-primary">
                      {song.title}
                    </a>
                  </Table.Cell>
                  <Table.Cell class="text-white">{song.author}</Table.Cell>
                  <!-- Add copy to clipboard button as icon -->
                  <Table.Cell class="text-white">
                    <a href={song.video} class="hover:text-primary hidden lg:flex">
                      {song.video}
                      <!-- Consider replacing it for the video icon -->
                    </a>
                    <a href={song.video} class="hover:text-primary flex lg:hidden text-right items-end justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      
                    </a>
                  </Table.Cell>
                  <Table.Cell class="text-white hidden lg:flex">
                    <a href={song.chords} class="hover:text-primary justify-end items-end flex w-full">
                      {#if song.chords}
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                          </svg>                          
                        </span>
                      {:else }
                        -
                      {/if}
                    </a>
                  </Table.Cell>
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>          
     </div>
</div>