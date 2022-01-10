<script lang="ts">
import { createEventDispatcher } from "svelte";


  export let open = false
  export let Name = ""
  export let Plate = ""
  const dispatch = createEventDispatcher();

  function closeModal() {
    open = false;
    dispatch('closeModal', {open});
  }
  
</script>
<div class="windows glass absolute-center" style="--display: {open ? 'block' : 'none'}; max-width: 100vh;">
  <div class="window fixed-center" style="width:50vh;">
    <div class="title-bar">
      <div class="title-bar-text"><i class="fa-solid fa-triangle-exclamation" style="color:red;" /> Detail Windows!</div>
      <div class="title-bar-controls">
        <button aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <fieldset class="vertical-middle">
        <p class="text-center">The car with the plate {Plate} belongs to {Name} </p>
        <span>
          <button class="on-right" style="margin-left: 94px;" on:click={closeModal}>Ok</button>
        </span>
      </fieldset>
    </div>
  </div>
</div>

<style>
  .windows {
    display: var(--display);
    z-index: 2;
    filter: drop-shadow(0 0 20px #333);
  }
</style>