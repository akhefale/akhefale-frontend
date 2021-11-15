<script>
  import { articlesQuery } from '$lib/queries.js';
  import { query } from '@urql/svelte';
  import { getContext } from 'svelte';
  import { onMount } from 'svelte';
  import { sleep, until } from '$lib/utils.js';

  let articles = query(articlesQuery);

  onMount(async() => {

    await until(() => articles.data) // wait until data has been fetched
    console.log(articles.data.words)

  });

</script>
{#if $articles.data}
  <div class="articles">
    <h1>Skriverier</h1>
      <div class="main">
        <span class="kicker">
          {articles.data.words[0].kicker}
        </span>
        <div class="actions">
          <a href="/articles/1" class="button primary">
            Læs manifest
          </a>
          <a href="/articles" class="button">
            Flere skrivelser
          </a>
        </div>
      </div>
  </div>
{/if}
