<script>
  import {createEventDispatcher} from 'svelte';
  import { PLAYER_DISPATCH} from '../store/store';
  const dispatch = createEventDispatcher();
  export const name = '';
  export let Description;
  export let Street = ""

</script>

<div class="window leaflet-popup-content-wrapper" style="max-width:100vh">
  <div class="title-bar">
    <div class="title-bar-text">Report Windows</div>
  </div>
  <div class="window-body">
    <fieldset class="non-selectable">
      <legend>Report Info</legend>
      {Description} at {Street}
    </fieldset>
  </div>
 
</div>

<style>
  :global(.leaflet-popup-content) {
    width: 90vh;
    max-width: 100vh;
  }
</style>
