<script>
  import { projectsQuery } from '$lib/queries.js';
  import { query } from '@urql/svelte';
  import { getContext } from 'svelte';
  import { onMount } from 'svelte';
  import { sleep, until } from '$lib/utils.js';

  let projects = query(projectsQuery);

  onMount(async() => {

    await until(() => projects.data) // wait until data has been fetched
    console.log(projects.data.projects)

  });

</script>

{#if $projects.data}
  <div class="projects">
    <h1>Projekter</h1>
    <div class="main">
      {#each $projects.data.projects as project}
        <div class="project">
          <div class="column">
            <h2>{project.title}</h2>
            <span class="kicker">
              {project.kicker}
            </span>
          </div>
          <div class="column">
            <div class="symbol">
                <img src="{getContext('backendUrl') + project.symbol.url}" />
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
