<script>
  import "../app.scss";
  import { initClient } from '@urql/svelte';
  import { setContext } from 'svelte';

  const backendUrl = 'https://akhefale-api.adrianelias.dk'
  setContext('backendUrl', backendUrl);

  initClient({
    url: `${backendUrl}/graphql`,
  });

</script>

<slot />
