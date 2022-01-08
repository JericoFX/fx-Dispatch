<script lang="ts">
  import {push} from 'svelte-spa-router';
  import Map from './Map.svelte';
  import * as L from 'leaflet';
  import {JOB_NAME, Tables_log, PLAYER_DISPATCH} from '../store/store';
  let Duty = [{Job: '', Name: '', Event: '', Date: '', Coords: []}];
  let today = new Date();
  let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  let OpenMap = false;
  function CloseMap() {
    OpenMap = false;
  }

  const HandleDispatch = (Data: { Name: any; Message: any; Phone?: string; Steet?: string; Coords: any; }) => {
    OpenMap = true;
    let div = L.DomUtil.create('div');
    let m = new Map({
      target: div,
      props: {
        open: OpenMap,
      },
    });
    return m;
  };
</script>

<div class="window vertical-middle absolute-center" style="max-width:100vh;width:60vh;">
  <div class="title-bar">
    <div class="title-bar-text">Actividad</div>
    <div class="title-bar-controls">
      <button aria-label="Close" on:click={(e) => push('/')} />
    </div>
  </div>

  <div class="window-body text-center">
    <fieldset class="non-selectable">
      <legend>Activity tab</legend>
      <fieldset class="Raider">
        <legend>Duty Events</legend>
        <ul>
          {#each Duty as Events}
            {#if Duty.length === 0}
              ""
            {:else}
              <fieldset>
                <li>{Events.Name} {Events.Event} {Events.Date}</li>
              </fieldset>
            {/if}
          {/each}
        </ul>
      </fieldset>
      <fieldset class="Raider">
        <legend>Money Logs</legend>
        <ul>
          {#each $Tables_log as Data}
            <fieldset>
              <li>{Data.Log}</li>
            </fieldset>
          {/each}
        </ul>
      </fieldset>
      <fieldset class="Raider q-mt-lg">
        <legend>Dispatch Events</legend>
        <ul>
          {#each $PLAYER_DISPATCH as Data}
            <fieldset>
              <li on:click={(e) => HandleDispatch(Data)}>{`Nombre: ${Data.Name} Message: ${Data.Message} at ${Data.Street} Contact: ${Data.Phone}`}</li>
            </fieldset>
          {/each}
        </ul>
      </fieldset>
    </fieldset>
  </div>
  <div class="status-bar">
    <p class="status-bar-field">Something</p>
  </div>
</div>
<Map open={OpenMap} Expanded={false} MenuShow={true} Maximized={false} on:closeModal={CloseMap} />

<style>
  .Raider {
    max-height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    overflow: scroll;
  }
</style>
