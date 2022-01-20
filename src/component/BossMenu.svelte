<script lang="ts">
  import {push} from 'svelte-spa-router';
  import DepositWithDialog from './DepositWithDialog.svelte';
  import PlayerData from './Dialogos/PlayerData.svelte';
  import {JOB_NAME, JOB_MONEY, Tables_log, PLAYER_DATA} from '../store/store';
import { fetchNui } from '../util/fetchNui';
  $: Selection = '';
  let open = false;
  let withdraw = 0;
  let deposit = 0;
  let OpenData1 = false;
  const HandleData = (Data: string, money: number) => {

    
    Selection = Data;
    open = true;
    Monto = money
  };

  $: Detail = '';

  $: name = '';
  $: lastName = '';
  $: Date1 = '';
  $: Monto = 0;

  function Close() {
    open = false;
    withdraw = 0;
    deposit = 0;
  }

  function CLoseData() {
    OpenData1 = false;
  }

  function OpenData(Data: { Type: string; Date: string; Monto: number;Name:string; }) {
    OpenData1 = true;
    Detail = Data.Type;
    name = Data.Name;
    Date1 = Data.Date;
    Monto = Data.Monto;
  }
</script>

<div class="window glass vertical-middle absolute-center non-selectable" style="max-width: 50vh; max-height:100vw; ">
  <div class="title-bar">
    <div class="title-bar-text">Boss Menu</div>
    <div class="title-bar-controls">
      <button aria-label="Close" on:click={(e) => push('/')} />
    </div>
  </div>
  <div class="window-body ">
    <fieldset>
      <div class="text-h2 text-center">{$JOB_NAME.toUpperCase()} Menu</div>
    </fieldset>
    <fieldset>
      <div class="text-h5 text-center">Money Amount: <span class="text-h6">$</span> <span class="text-h6 text-red">{$JOB_MONEY}</span></div>
    </fieldset>
    <fieldset>
      <legend>Boss Menu Actions</legend>
      <fieldset>
        <legend>Withdraw</legend>
        <p>
          <span>
            <div class="field-row-stacked on-left" style="width: 200px">
              <label for="text22">Widthdraw Amount:</label>
              <input id="text22" type="number" bind:value={withdraw} />
            </div>
          </span>
          <br />
          {#if withdraw > 1}
            <button on:click={(e) => HandleData('Widthdraw', withdraw)}>Widthdraw</button>
          {:else}
            <button disabled on:click={(e) => HandleData('Widthdraw', withdraw)}>Widthdraw</button>
          {/if}
        </p>
      </fieldset>

      <fieldset class="">
        <legend>Deposit</legend>
        <p>
          <span>
            <div class="field-row-stacked on-left" style="width: 200px">
              <label for="text22">Deposit Amount:</label>
              <input id="text22" type="number" bind:value={deposit} />
            </div>
          </span>
          <br />
          {#if deposit > 1}
            <button on:click={(e) => HandleData('Deposit', deposit)}>Deposit</button>
          {:else}
            <button disabled on:click={(e) => HandleData('Deposit', deposit)}>Deposit</button>
          {/if}
        </p>
      </fieldset>

      <fieldset class=" Raider" style="max-height: 90px;">
        <legend>Log</legend>
        {#each $Tables_log as Data}
          <fieldset class="shadow-up-1" on:click={(e) => OpenData(Data)}>
            <p class="text-bold">{Data.Log}</p>
          </fieldset>
        {/each}
      </fieldset>
    </fieldset>

    <div class="status-bar non-selectable">
      <p class="status-bar-field">Press F1 for help</p>
      <p class="status-bar-field">Menu {$JOB_NAME} Software</p>
      <p class="status-bar-field">By JericoFX</p>
    </div>
  </div>
</div>
<DepositWithDialog {open} Detail={Selection} money={Selection === 'Deposit' ? deposit : withdraw} on:closeModal={Close} />

<PlayerData open={OpenData1} money={Monto} {Detail} {name} {lastName} Date={Date1} on:closeModal={CLoseData} />

<style>
  .Raider {
    height: 563px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    overflow: scroll;
  }
</style>
