<script>
  import "../app.scss";
  import { initClient } from '@urql/svelte';
  import { setContext } from 'svelte';

  const backendUrl = 'https://akhefale.com'
  setContext('backendUrl', backendUrl);

  initClient({
    url: `${backendUrl}/graphql`,
  });

</script>

<slot />
