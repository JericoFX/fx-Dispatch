<script lang="ts">
import { createEventDispatcher } from "svelte";


  export let open = false
  export let message = ""
  const dispatch = createEventDispatcher();

  function closeModal() {
    open = false;
    dispatch('closeModal', {open});
  }

  
</script>
<div class="windows absolute-center" style="--display: {open ? 'block' : 'none'};">
  <div class="window" style="width:50vh;">
    <div class="title-bar">
      <div class="title-bar-text"><i class="fa-solid fa-triangle-exclamation" style="color:red;" /> Detail Windows!</div>
      <div class="title-bar-controls">
        <button aria-label="Close" />
      </div>
    </div>
    <div id="jerico">
      
    </div>
    <div class="window-body">
      <fieldset class="vertical-middle">
        <legend>Vehicle Detail</legend>
   
        <p class="text-center text-subtitle1 ">{message}</p>
        <span>
          <button  style="    display: block;
          margin-left: auto;
          margin-right: auto;" on:click={closeModal}>Ok</button>
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