<script>
  import {createEventDispatcher} from 'svelte';
  import { draggable } from 'svelte-drag';
  export let open = false;
  const dispatch = createEventDispatcher();
  export let Detail = '';
  export let money = 0;
 
  export let name = ""
  export let lastName=""
  export let Date = ""



 
  function closeModal() {
    open = false;
    dispatch('closeModal', {open});
  }

</script>

<div class="windows glass absolute-center" use:draggable style="--display: {open ? 'block' : 'none'}; max-width: 100vh">
  <div class="window " style="max-width:100vh;">
    <div class="title-bar">
      <div class="title-bar-text"><i class="fa-solid fa-triangle-exclamation" style="color:red;" /> {Detail} Windows!</div>
      <div class="title-bar-controls">
        <button aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <fieldset class="vertical-middle">
        <p class="text-center">The Current {Detail} was made by {name} {lastName} by the amount of <span class="text-bold">${money}</span> on the date {Date}</p>
      </fieldset>
      <section class="field-row" style="justify-content: center">
        <button   on:click={closeModal}>Ok</button>
      </section>
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
