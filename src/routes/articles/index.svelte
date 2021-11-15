<script>
  import { articlesQuery } from '$lib/queries.js';
  import { query } from '@urql/svelte';
  import { getContext } from 'svelte';
  import { onMount } from 'svelte';
  import { sleep, until } from '$lib/utils.js';
  import NavigateBack from '$lib/navigateBack.svelte';

  let articles = query(articlesQuery);

  onMount(async() => {

    await until(() => articles.data) // wait until data has been fetched
    console.log(articles.data.words)

  });

</script>

<NavigateBack />

{#if $articles.data}
  <div class="articles-list">
    <div class="main">
      {#each articles.data.words as article}
      <a class="article" href="/articles/{article.id}">
          <h2>{article.title}</h2>
          <span class="kicker">
            {article.kicker}
          </span>
          <div class="actions">
            <a href="/articles/{article.id}" class="button primary">
              Læs skrivelse
            </a>
          </div>
        </a>
      {/each}
    </div>
  </div>
{/if}
