<script lang='ts'>
  // should complain never reassigned...
  let a = 'dupe'

  throw 'literal should trigger eslint';

  console.log('unreachable should trigger eslint');

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if false}
  false
{:else if a === 'dupe'}
  Not dupe
{:else if a === 'dupe'}
  Duplicate
{/if}
