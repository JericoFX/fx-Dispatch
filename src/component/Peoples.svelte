<script>
  import Windows from './Windows.svelte';
  import {push} from 'svelte-spa-router';
  import {fade} from 'svelte/transition'
	import {JOB_NAME} from "../store/store"
</script>
  <div class="window glass hide-scrollbar non-selectable" in:fade="{{duration: 100}}">
    <div class="title-bar">
      <div class="title-bar-text text-center">{$JOB_NAME} Boss Menu</div>
      <div class="title-bar-controls">
        <button aria-label="Close" on:click={e => push("/")}/>
      </div>
    </div>
    <div>
      <Windows />
    </div>
  </div>
<style>
  .window{
    position:fixed;
    left: 0%;
    right: 0%;
    top: 0%;
 
  }
</style>

