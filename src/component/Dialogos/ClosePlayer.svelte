<script lang="ts">
import { createEventDispatcher } from 'svelte';

  import {PLAYERS_JOBS} from '../../store/store';
  const dispatch = createEventDispatcher()
  export let open = false;
  const onSelected: any = (id: string) => {};
  const closeModal = () =>{
    open = false
    dispatch("closePlayer",{open})
  }
</script>

{#if open}
  <div class="window fixed-center non-selectable" style="max-width: 70vh;width:50vh;">
    <div class="title-bar">
      <div class="title-bar-text">Add People</div>
      <div class="title-bar-controls">
        <button on:click="{closeModal}" aria-label="Close" />
      </div>
    </div>
    <div class="window-body" style="overflow:scroll;">
      <fieldset>
        <legend>People</legend>
        {#each $PLAYERS_JOBS as dia}

          <fieldset class="text-center">
            <p>
              <span class="text-h6">Nombre: </span>
              <span class="text-subtitle1">{dia.Name}</span>
            </p>
            <p>
              <span class="text-h6">ID: </span>
              <span class="text-subtitle1">{dia.Citizenid}</span> 
            </p>
            <div class="field-row" style="justify-content:center;">
              <button >Aceptar</button>
            </div>
           
          </fieldset>
        {/each}
      </fieldset>
    </div>
  </div>
{/if}
