<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
    import Button from '$lib/components/ui/button/button.svelte';

    // Hardcoded song data (will be used if CSV file is not found)
    let songs = [
      { name: 'Freedom', tempo: 'fast', language: 'romanian', age: 'new', votes: 0 },
      { name: 'Danke Gott', tempo: 'fast', language: 'german', age: 'new', votes: 3 },
      { name: 'Ich weiss dass mein erlöser lebt', tempo: 'fast', language: 'german', age: 'new', votes: 2 },
      { name: 'Lupta', tempo: 'fast', language: 'romanian', age: 'new', votes: 9 },
      { name: 'Frei!', tempo: 'fast', language: 'german', age: 'new', votes: 2 },
      { name: 'Jehova Nissi', tempo: 'fast', language: 'romanian', age: 'new', votes: 7 },
      { name: 'Only Jesus', tempo: 'fast', language: 'romanian', age: 'old', votes: 9 },
      { name: 'This is amazing grace', tempo: 'fast', language: 'romanian', age: 'old', votes: 1 },
      { name: 'Praise', tempo: 'fast', language: 'romanian', age: 'new', votes: 12 },
      { name: 'Vereint', tempo: 'slow', language: 'german', age: 'new', votes: 4 },
      { name: 'Dankbarkeit (Gratitude)', tempo: 'slow', language: 'german', age: 'new', votes: 8 },
      { name: 'No longer slaves', tempo: 'slow', language: 'romanian', age: 'old', votes: 7 },
      { name: 'Fii intronat in Laude', tempo: 'slow', language: 'romanian', age: 'old', votes: 2 },
      { name: 'Centrul vietii', tempo: 'slow', language: 'romanian', age: 'new', votes: 1 },
      { name: 'Sehnsucht', tempo: 'slow', language: 'german', age: 'old', votes: 11 },
      { name: 'Tu domnesti', tempo: 'slow', language: 'romanian', age: 'old', votes: 4 },
      { name: 'Holy Forever', tempo: 'slow', language: 'romanian', age: 'old', votes: 7 },
      { name: 'Yahweh se manifesta', tempo: 'slow', language: 'romanian', age: 'old', votes: 8 },
      { name: 'Poala Hainei Tale', tempo: 'slow', language: 'romanian', age: 'old', votes: 4 },
      { name: 'The Blood', tempo: 'slow', language: 'german', age: 'old', votes: 0 },
      { name: 'Ich schaffe Raum', tempo: 'slow', language: 'german', age: 'old', votes: 11 },
      { name: 'This is a move', tempo: 'slow', language: 'romanian', age: 'old', votes: 3 },
      { name: 'Dom al treziri', tempo: 'slow', language: 'romanian', age: 'old', votes: 4 },
      { name: 'Toată Inima', tempo: 'slow', language: 'romanian', age: 'old', votes: 4 }
    ];

    let setlist = [];
    let progress = [];

    // Load votes from CSV when app loads
    
    function generateSetlist() {
        progress = [];  // Reset progress log
        progress.push("Starting setlist generation...");

        // Sort the songs by votes in descending order
        let sortedSongs = songs.slice().sort((a, b) => b.votes - a.votes);

        // Initialize counters
        let fastCount = 0, slowCount = 0;
        let germanCount = 0, romanianCount = 0;
        let newCount = 0, oldCount = 0;

        setlist = [];

        for (let song of sortedSongs) {
            // Stop if we've reached 10 songs
            if (setlist.length >= 10) break;

            // Check tempo criteria
            if (song.tempo === 'fast' && fastCount >= 4) {
                progress.push(`Skipping "${song.name}" (fast) because 4 fast songs already selected.`);
                continue;
            }
            if (song.tempo === 'slow' && slowCount >= 6) {
                progress.push(`Skipping "${song.name}" (slow) because 6 slow songs already selected.`);
                continue;
            }

            // Check language criteria
            if (song.language === 'german' && germanCount >= 4) {
                progress.push(`Skipping "${song.name}" (German) because 4 German songs already selected.`);
                continue;
            }
            if (song.language === 'romanian' && romanianCount >= 6) {
                progress.push(`Skipping "${song.name}" (Romanian) because 6 Romanian songs already selected.`);
                continue;
            }

            // Check age criteria
            if (song.age === 'new' && newCount >= 4) {
                progress.push(`Skipping "${song.name}" (new) because 4 new songs already selected.`);
                continue;
            }
            if (song.age === 'old' && oldCount >= 6) {
                progress.push(`Skipping "${song.name}" (old) because 6 old songs already selected.`);
                continue;
            }

            // Add song to the setlist
            setlist.push(song);
            progress.push(`Adding "${song.name}" to setlist (Votes: ${song.votes}, Tempo: ${song.tempo}, Language: ${song.language}, Age: ${song.age})`);

            // Update counters
            if (song.tempo === 'fast') fastCount++;
            else slowCount++;

            if (song.language === 'german') germanCount++;
            else romanianCount++;

            if (song.age === 'new') newCount++;
            else oldCount++;
        }

        if (setlist.length < 10) {
            progress.push("Couldn't meet all criteria exactly with the current votes.");
        } else {
            progress.push("Setlist successfully generated!");
        }

        // Save votes to CSV file after generating the setlist
        saveVotes();
    }

    async function saveVotes() {
        try {
            const response = await fetch('/votes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ votes: songs }), // Send current votes to the server
            });
            if (response.ok) {
                progress.push("Votes saved to CSV.");
            } else {
                progress.push("Failed to save votes to CSV.");
            }
        } catch (err) {
            progress.push("Error saving to CSV: " + err.message);
        }
    }
</script>

<div class="container mx-auto p-4 text-white px-4 py-6">
    <h1 class="text-2xl font-bold mb-4">Current Voting</h1>

    <!-- Voting Table -->
    <table class="table-auto w-full mb-4">
        <thead>
            <tr>
                <th class="px-4 py-2">Song</th>
                <th class="px-4 py-2">Tempo</th>
                <th class="px-4 py-2">Language</th>
                <th class="px-4 py-2">Type</th>
                <th class="px-4 py-2">Votes</th>
            </tr>
        </thead>
        <tbody>
            {#each songs as song}
                <tr>
                    <td class="border px-4 py-2">{song.name}</td>
                    <td class="border px-4 py-2">{song.tempo}</td>
                    <td class="border px-4 py-2">{song.language}</td>
                    <td class="border px-4 py-2">{song.age}</td>
                    <td class="border px-4 py-2">
                        <input
                            type="number"
                            min="0"
                            bind:value={song.votes}
                            class="w-full border px-2 py-1 text-black"
                        />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>

    <!-- Generate Setlist Button -->
    <div class="py-6 w-full justify-center flex flex-col items-start">
        <Button
            on:click={generateSetlist}
            class=" text-black font-bold "
        >
            Generate Setlist
        </Button>
    </div>

    <!-- Progress Log -->
    <div class="mt-4">
        <h2 class="text-xl font-bold mt-4">Progress</h2>
        <ul>
            {#each progress as step}
                <li>{step}</li>
            {/each}
        </ul>
    </div>

    <!-- Display Setlist -->
    {#if setlist.length > 0}
        <h2 class="text-xl font-bold mt-4">Generated Setlist</h2>
        <ol class="list-decimal list-inside">
            {#each setlist as song}
                <li>{song.name} ({song.votes} votes)</li>
            {/each}
        </ol>

        <!-- Setlist Visualization Table -->
        <h2 class="text-xl font-bold mt-4">Setlist Details</h2>
        <table class="table-auto w-full mb-4">
            <thead>
                <tr>
                    <th class="px-4 py-2">Song</th>
                    <th class="px-4 py-2">Tempo</th>
                    <th class="px-4 py-2">Language</th>
                    <th class="px-4 py-2">Age</th>
                    <th class="px-4 py-2">Votes</th>
                </tr>
            </thead>
            <tbody>
                {#each setlist as song}
                    <tr>
                        <td class="border px-4 py-2">{song.name}</td>
                        <td class="border px-4 py-2">{song.tempo}</td>
                        <td class="border px-4 py-2">{song.language}</td>
                        <td class="border px-4 py-2">{song.age}</td>
                        <td class="border px-4 py-2">{song.votes}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
</div>
