<script>

  import { asaPiliQuery } from '$lib/queries.js';
  import { query } from '@urql/svelte';
  import { getContext } from 'svelte';
  import { onMount } from 'svelte';
  import { sleep, until } from '$lib/utils.js';

  let asaPilis = query(asaPiliQuery);
  let asaPiliImages = [];

  async function shuffleSymbols() {

    while (true) {
      let e = asaPiliImages[Math.floor(Math.random() * asaPiliImages.length)];
      e.src = asaPiliImages[Math.floor(Math.random() * asaPiliImages.length)].src;
      await sleep(10);
    }

  };

  onMount(async() => {

    await until(() => asaPilis.data) // wait until data has been fetched
    asaPiliImages = document.querySelectorAll('.asaPili img');
    shuffleSymbols();

  });

</script>

<div class="splash">
  <div class="asaPilis">
    {#if $asaPilis.data}

      {#each Array(10) as _, i}
        <div class="asaPiliRow">
          {#if i == 0}
          <div class="title">
            <h1 class="colourful">AKHE<br>FALE</h1>
          </div>
          {/if}
          {#each $asaPilis.data.asaPilis as asaPili, i}
            {#each Array(1) as _}
              <div class="asaPiliContainer">
                <span class="asaPili">
                  <img src="{getContext('backendUrl') + asaPilis.data.asaPilis[Math.random() * asaPilis.data.asaPilis.length | 0].Symbol.url}" alt="{asaPili.Name}" />
                </span>
              </div>
            {/each}
          {/each}
        </div>
      {/each}

    {/if}
  </div>
</div>
