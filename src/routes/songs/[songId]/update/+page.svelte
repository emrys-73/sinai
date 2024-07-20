<script>
    import Button from '$lib/components/ui/button/button.svelte';
    import Input from '$lib/components/ui/input/input.svelte';
    import Textarea from '$lib/components/ui/textarea/textarea.svelte';
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import { tick } from 'svelte';

    export let data;
</script>


<div class="w-full h-full flex flex-col py-10 px-16 gap-8">
    <div>
        <h1 class="text-white text-4xl font-bold">
            <span class="italic bg-primary px-8 text-black rounded-full">
                Editing
            </span>
            {data?.song.title}
        </h1>
    </div>

    <form action="?/updateSong" method="POST" class="flex flex-col gap-8">
        <input type="text" name="songId" value="{data?.song.id}" id="" hidden>

        <div class="flex flex-row gap-6">
            <Input placeholder="Title" type="text" name="title" value={data?.song.title} class="rounded-full text-white"/>

            <Input placeholder="Author" type="text" name="author" value={data?.song.author} class="rounded-full text-white"/>
        </div>

        <div>
            <Input placeholder="Video URL" type="url" value={data?.song.video} name="video" class="rounded-full text-white"/>
        </div>

        <div>
            <Input placeholder="Chords URL" type="url" value={data?.song.chords} name="chords" class="rounded-full text-white"/>
        </div>

        <div class="flex flex-row gap-6">
           <div class="w-full h-full">
                <Textarea class="text-white h-full rounded-xl" placeholder="Lyrics" value={data?.song.lyrics} name="lyrics">

                </Textarea>
           </div>

            <div class="flex flex-col gap-6 w-full h-full">

                <Input placeholder="Original Key" type="text" value={data?.song.original_key} name="original_key" class="rounded-full text-white"/>
    
                <Input placeholder="Actual Key" type="text" value={data?.song.actual_key} name="actual_key" class="rounded-full text-white"/>
    
                <div class="flex flex-row justify-center items-center gap-2 w-full ">
                    <Input placeholder="Tempo" type="number" value={data?.song.tempo} name="tempo" class="rounded-full text-white"/>
                    <span class="text-white">
                        Bpm
                    </span>
                </div>

                <div class="w-full min-h-[25vh]">
                    <Textarea class="text-white min-h-full rounded-xl" placeholder="Description/Comments" value={data?.song.description} name="description">
        
                    </Textarea>
                </div>
                
            </div>

        </div>

       

        

        <Button type="submit" class="text-black font-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-full">
            Save changes
         </Button>
    </form>
</div>