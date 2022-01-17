<script lang="ts">
import { createEventDispatcher } from "svelte";

import { PLAYER_WARRANTS } from "../../store/store";
 const dispatch = createEventDispatcher()

  export let id = 0;
  export let open = false;
let Data = []
  const closeTab =  () =>{
    open = false
    dispatch("closeTab",{open})
  }
  $: Data = $PLAYER_WARRANTS.filter(w => w.id === id)
  function deleteRow(){
    Data = $PLAYER_WARRANTS.filter(w => w.id !== id)
    $PLAYER_WARRANTS = Data
    closeTab()
  }


</script>

{#if open}
  <div class="window fixed-center" style="max-width:100vh;width:70vh;" >
    <div class="title-bar">
      <div class="title-bar-text">Tab {id} Report </div>
      <div class="title-bar-controls">
        <button on:click="{closeTab}" aria-label="Close" />
      </div>
    </div>
    <div class="window-body" >
      <fieldset>
        <legend>Report Data</legend>
        {#if Data.length}
          
      
        <p>ID:	{Data[0].id} </p>
        <p>Title: {Data[0].Title}</p>
        <p>Location: {Data[0].Location}</p>
        <p>Description: {Data[0].Description}</p>
        {/if}
      </fieldset>
 
      <button on:click={closeTab}>Accept</button>
      <button on:click={deleteRow}>Delete</button>
      </div>

  </div>
{/if}
