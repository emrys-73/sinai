<script lang="ts">
  let verse = "";
  let reference = "";
  let error = "";

  // Fetch the verse of the day from the API when the component mounts
  const fetchVerseOfTheDay = async () => {
    try {
      const res = await fetch('https://beta.ourmanna.com/api/v1/get/?format=json');
      const data = await res.json();
      verse = data.verse.details.text;
      reference = data.verse.details.reference;
    } catch (err) {
      error = 'Failed to fetch the Verse of the Day.';
      console.error(err);
    }
  };

  fetchVerseOfTheDay();
</script>
<!-- TailwindCSS Styled Component -->
<main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
      {#if verse}
        <h1 class="text-2xl font-bold text-gray-900">Verse of the Day</h1>
        <p class="text-xl text-gray-700 my-4 italic">"{verse}"</p>
        <p class="text-lg text-gray-600 font-medium">{reference}</p>
      {:else if error}
        <p class="text-red-500">{error}</p>
      {:else}
        <p class="text-gray-500">Loading...</p>
      {/if}
    </div>
  </main>