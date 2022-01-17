<script>
  import InformationPanel from './InformationPanel.svelte';

  import {fade} from 'svelte/transition';
  $: cpu = 0
  setInterval(() => {
    cpu = Math.random() * 100;
  }, 5000);
let Close = true
</script>

{#if Close}
<div class="window-body  non-selectable" in:fade="{{duration: 100}}" >
  <menu role="tablist">
    <button role="tab" aria-controls="people1" aria-selected="true">Peoples</button>
  </menu>
  <article role="tabpanel" id="people1" >
    <InformationPanel />
  </article>

  <div class="status-bar">
    <p class="status-bar-field">Press F1 for help</p>
    <p class="status-bar-field">Peoples</p>
    <p class="status-bar-field">CPU Usage: {cpu.toFixed(0)}%</p>
  </div>
</div>
{/if}

