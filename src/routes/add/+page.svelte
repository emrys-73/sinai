<script>
	import Input from "$lib/components/ui/input/input.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";

</script>

<div class="w-full h-full flex flex-col md:py-10 py-8 md:px-16 px-8 gap-8">
    <div>
        <h1 class="text-white text-4xl font-bold">Add Song</h1>
    </div>

    <form action="?/addSong" method="POST" class="flex flex-col gap-8">
        <div class="flex flex-row gap-6">
            <Input placeholder="Title" type="text" name="title" class="rounded-full text-white"/>

            <Input placeholder="Author" type="text" name="author" class="rounded-full text-white"/>
        </div>

        <div>
            <Input placeholder="Video URL" type="url" name="video" class="rounded-full text-white"/>
        </div>

        <div>
            <Input placeholder="Chords URL" type="url" name="chords" class="rounded-full text-white"/>
        </div>

        <div class="flex md:flex-row flex-col gap-6">
           <div class="w-full h-full min-h-[40vh]">
                <Textarea class="text-white h-full rounded-xl" placeholder="Lyrics" name="lyrics">

                </Textarea>
           </div>

            <div class="flex flex-col gap-6 w-full h-full">

                <!-- <Input placeholder="Original Key" type="text" name="original_key" class="rounded-full text-white"/> -->
    
                <Input placeholder="Key" type="text" name="key" class="rounded-full text-white"/>
    
                <div class="flex flex-row justify-center items-center gap-2 w-full ">
                    <Input placeholder="Tempo" type="number" name="tempo" class="rounded-full text-white"/>
                    <span class="text-white">
                        Bpm
                    </span>
                </div>

                <div class="w-full min-h-[25vh]">
                    <Textarea class="text-white min-h-full rounded-xl" placeholder="Description/Comments" name="description">
        
                    </Textarea>
                </div>
                
            </div>

        </div>

       

        

        <Button type="submit" class="text-black font-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-full">
            Submit
         </Button>
    </form>
</div>