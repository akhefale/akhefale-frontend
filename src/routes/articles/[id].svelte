<script>

    import { page } from '$app/stores';
    import { articleQuery } from '$lib/queries.js';
    import { query } from '@urql/svelte';
    import { getContext } from 'svelte';
    import { onMount } from 'svelte';
    import { sleep, until } from '$lib/utils.js';
    import { operationStore } from '@urql/svelte';
    import NavigateBack from '$lib/navigateBack.svelte';

    let article = query(operationStore(articleQuery, { id : $page.params.id }));

    onMount(async() => {

      await until(() => article.data) // wait until data has been fetched
      article = article.data.word;
      console.log(article)


    });

</script>

<NavigateBack />

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
