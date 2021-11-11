<script>

    import { page } from '$app/stores';
    import { articleQuery } from '$lib/queries.js';
    import { query } from '@urql/svelte';
    import { getContext } from 'svelte';
    import { onMount } from 'svelte';
    import { sleep, until } from '$lib/utils.js';
    import { operationStore } from '@urql/svelte';

    let article = query(operationStore(articleQuery, { id : $page.params.id }));

    onMount(async() => {

      await until(() => article.data) // wait until data has been fetched
      article = article.data.word;
      console.log(article)


    });

</script>

<a href="/" class="navigation-element">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/></svg>
</a>

{#if article.title}
  <div class="article">
    <div class="main">
      <h1>
        {article.title}
      </h1>
      <span class="kicker">
        {article.kicker}
      </span>
      <div class="content">
        {article.content}
      </div>
    </div>
  </div>
{/if}
