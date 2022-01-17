<script lang="ts">
  import WarrantsTabls from './Warrant_tabs.svelte';
  import Warrant_home from './Warrant_home.svelte';
  import {push} from 'svelte-spa-router';
  import Search from './Warrant_search.svelte';
import WarrantNew from './Warrant_new.svelte';
  let open = false;
  ///////////////////////////

  const webpages = [
    {name: 'Home', component: Warrant_home},
    {name: 'Bolos', component: WarrantsTabls},
    {name: 'Search Players', component: Search},
  ];

  let selectedPage = webpages[0];
  const loadPage = (obj: {name: string; component: typeof Warrant_home}) => (selectedPage = obj);

  const openNewWarrant = () => {
    open = false
  };
</script>

<div class="windows fixed-center non-selectable fit">
  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text">A Window With A Status Bar</div>
      <div class="title-bar-controls">
        <button aria-label="Close" on:click={() => push('/')} />
      </div>
    </div>
    <div class="window-body">
      <fieldset>
        <legend>Current Warrants</legend>
        <fieldset>
          {#each webpages as webpageObj}
            <button id={webpageObj.name} class="tablink q-ml-lg on-left" title={webpageObj.name} on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button>
          {/each}
        </fieldset>
        <svelte:component this={selectedPage.component} />
      </fieldset>
      <section class="field-row" style="justify-content: center;">
        <button on:click={() => open = true}>Create New Warrant</button>
      </section>
    </div>
    <div class="status-bar">
      <p class="status-bar-field">Press F1 for help</p>
      <p class="status-bar-field">Slide 1</p>
      <p class="status-bar-field">CPU Usage: 14%</p>
    </div>
  </div>
</div>
<WarrantNew open="{open}" on:CloseNewWarrant={openNewWarrant}></WarrantNew>
