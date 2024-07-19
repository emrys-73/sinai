<script>
// @ts-nocheck

  import Input from "$lib/components/ui/input/input.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Table from "$lib/components/ui/table";

  export let data;


</script>


<div class="w-full h-full min-h-screen flex flex-col py-10 px-16 gap-4">

    <!-- Header -->
    <div class="w-full flex-ro flex justify-between items-center">
        <!-- Title -->
        <div class="flex flex-col">
            <h1 class="text-white text-4xl font-bold">Song Pool</h1>
        </div>

        <!-- SarchBar -->
         <div class="min-w-[20vw] flex flex-col">
            <Input class="rounded-full border-opacity-50 text-white placeholder:text-white placeholder:text-opacity-50" placeholder="Smart-Seaerch coming soon!">
                
            </Input>
         </div>
    </div>

    <!-- Chat Interface for Smart Search -->
    <div>
        <!-- Will come in the future for when we have deeper integrations -->
    </div>

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
                <Table.Head class="w-[10vw] text-white font-bold">Title</Table.Head>
                <Table.Head class="text-white w-[10vw] font-bold">Author</Table.Head>
                <Table.Head class="text-white w-[20vw] font-bold">Video</Table.Head>
                <Table.Head class="text-white w-[15vw] font-bold">Chords</Table.Head>
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
                    <a href={song.video} class="hover:text-primary">
                      {song.video}
                    </a>
                  </Table.Cell>
                  <Table.Cell class="text-white">
                    <a href={song.chords} class="hover:text-primary">
                      {song.chords}
                    </a>
                  </Table.Cell>
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>          
     </div>
</div>