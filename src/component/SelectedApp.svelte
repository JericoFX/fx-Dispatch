<script>
  import Peoples from "./Peoples.svelte"
  export const AppName = ""
  export const Selected = false
</script>
{#if AppName && Selected}
  <Peoples/>
{/if}