<script>
  import {createEventDispatcher} from 'svelte';
  import {useNuiEvent} from '../util/useNuiEvent';
  import {IS_DEV} from '../util/config';
  import {fetchNui} from '../util/fetchNui';
  import {JOB_NAME, JOB_MONEY, Tables_log, PLAYER_DATA} from '../store/store';
  const dispatch = createEventDispatcher();
  export let Detail = '';
  export let money = 0;
  export let open = false;
  let today = new Date();
  let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  $: Job = $JOB_MONEY;
  function closeModal() {
    open = false;
    dispatch('closeModal', {open});
  }

  const HandleDispatch = (Detail, money1) => {
    if (Detail === 'Deposit') {
      if (!IS_DEV) {
        fetchNui('DepositMoney', {Job, money1}).then(function (cb) {
          if (cb) {
            $JOB_MONEY = $JOB_MONEY + money1;
            $Tables_log.push({Job: $JOB_NAME, Name: `${$PLAYER_DATA.charinfo.firstname} ${$PLAYER_DATA.charinfo.lastname}`, Citizenid: $PLAYER_DATA.citizenid, Date: date, Type: 'Deposit', Monto: money1, Log: `Deposit Realizado Monto: $${money1}`});
            $Tables_log = $Tables_log;
            $Tables_log = $Tables_log;
          } else {
            console.log('Error you dont have the money');
          }
        });
      } else {
        $JOB_MONEY = $JOB_MONEY + money1;
        $Tables_log.push({Job: $JOB_NAME, Name: `${$PLAYER_DATA.charinfo.firstname} ${$PLAYER_DATA.charinfo.lastname}`, Citizenid: $PLAYER_DATA.citizenid, Date: date, Type: 'Deposit', Monto :money1, Log: `Deposit Realizado Monto: $${money1}`});
            $Tables_log = $Tables_log;
        $Tables_log = $Tables_log;
      }

      open = false;
      dispatch('closeModal', {open});
    } else if (Detail === 'Widthdraw') {
      if (!IS_DEV) {
        fetchNui('WidthdrawMoney', (Job, money1)).then(function (cb) {
          if ($JOB_MONEY - money1 >= 0) {
            $JOB_MONEY = $JOB_MONEY - money1;
            $Tables_log.push({Job: $JOB_NAME, Name: `${$PLAYER_DATA.charinfo.firstname} ${$PLAYER_DATA.charinfo.lastname}`, Citizenid: $PLAYER_DATA.citizenid, Date: date, Type: 'Widthdraw', Monto :money1, Log: `Retiro Realizado Monto: $${money1}`});
            $Tables_log = $Tables_log;
          } else {
            console.log('Error you dont have the money');
          }
        });
      } else {
        $JOB_MONEY = $JOB_MONEY - money;
        $Tables_log.push({Job: $JOB_NAME, Name: `${$PLAYER_DATA.charinfo.firstname} ${$PLAYER_DATA.charinfo.lastname}`, Citizenid: $PLAYER_DATA.citizenid, Date: date, Type: 'Widthdraw', Monto :money1, Log: `Retiro Realizado Monto: $${money1}`});
        $Tables_log = $Tables_log;
      }

      open = false;
      dispatch('closeModal', {open});
    }
  };
</script>

<div class="windows glass absolute-center" style="--display: {open ? 'block' : 'none'}; max-width: 100%">
  <div class="window fixed-center" style="width:32vh;">
    <div class="title-bar">
      <div class="title-bar-text"><i class="fa-solid fa-triangle-exclamation" style="color:red;" /> {Detail} Windows!</div>
      <div class="title-bar-controls">
        <button aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <fieldset class="vertical-middle">
        <p class="text-center">Are you sure you want to {Detail} ${money}</p>
        <span>
          <button class="on-left" on:click={(e) => HandleDispatch(Detail, money)}>Yes</button>
          <button class="on-right" style="margin-left: 94px;" on:click={closeModal}>Cancel</button>
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
