<script>
  import "../app.scss";
  import { initClient } from '@urql/svelte';
  import { setContext } from 'svelte';

  const backendUrl = 'http://localhost:1337'
  setContext('backendUrl', backendUrl);

  initClient({
    url: `${backendUrl}/graphql`,
  });

</script>

<slot />
