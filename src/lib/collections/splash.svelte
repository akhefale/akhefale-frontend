<script>

  import { asaPiliQuery } from '$lib/queries.js';
  import { query } from '@urql/svelte';
  import { getContext } from 'svelte';
  import { onMount } from 'svelte';
  import { sleep, until } from '$lib/utils.js';

  let asaPilis = query(asaPiliQuery);

  async function shuffleSymbols() {
    let container = document.querySelector('.asaPilis');

    for (let i = container.children.length; i >= 0; i--) {
      let randChild = container.children[Math.random() * i | 0];
      if (randChild.matches('.asaPiliContainer')) {
        container.appendChild(randChild);
      }
    }

    await sleep(100);
    shuffleSymbols();
  }

  onMount(async() => {

    await until(() => asaPilis.data) // wait until data has been fetched
    shuffleSymbols();

  });

</script>

<div class="splash">
  <div class="asaPilis">
    {#if $asaPilis.data}
      <div class="title">
        <h1 class="colourful">AKHE<br>FALE</h1>
      </div>
      {#each $asaPilis.data.asaPilis as asaPili, i}
        <div class="asaPiliContainer">
          <span class="asaPili">
            <img src="{getContext('backendUrl') + asaPili.Symbol.url}" alt="{asaPili.Name}" />
          </span>
        </div>

        <div class="asaPiliContainer">
          <span class="asaPili">
            <img src="{getContext('backendUrl') + asaPilis.data.asaPilis[Math.random() * asaPilis.data.asaPilis.length | 0].Symbol.url}" alt="{asaPili.Name}" />
          </span>
        </div>

        <div class="asaPiliContainer">
          <span class="asaPili">
            <img src="{getContext('backendUrl') + asaPilis.data.asaPilis[Math.random() * asaPilis.data.asaPilis.length | 0].Symbol.url}" alt="{asaPili.Name}" />
          </span>
        </div>
      {/each}
    {/if}
  </div>
</div>
