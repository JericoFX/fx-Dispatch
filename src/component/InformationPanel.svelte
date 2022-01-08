<script>
  import {createEventDispatcher} from 'svelte';
  import Actions from './Actions.svelte';
  import RanksMenu from './RanksMenu.svelte';

  const dispatch = createEventDispatcher();

  $: Name = '';
  let Data = [
    {grade: {level: 4, name: 'Chief'}, source: 'FQI55932', isOnline: true, name: 'Jerico FX', isboss: true},
    {grade: {level: 3, name: 'Advanced'}, source: 'LTX65094', isOnline: true, name: 'Kelly Santurio', isboss: false},
  ];
  $: Opensito = true;

  function Close() {
    Opensito = false;
  }
  function Open() {
    Rank = false;
  }
  $: Rank = false;
  function HandleCeck() {
    Rank = true;
  }
  $: Opensito = false;
  function HandlePic(source, name) {
    Name = name;
    Opensito = true;
  }
</script>

<p>Information Panel</p>
<fieldset>
  <legend>Actions</legend>
  <br />
  <div class="e01 non-selectable">
    <div class="playerlist">
      {#each Data as players}
        <fieldset style="flex:auto;">
          <div class="relative text-center">
            <img src="https://i.blogs.es/0cfd70/6cc2d180-c223-4fd4-973f-62b0f53302f9/1366_2000.jpeg" alt="" style="position:aboslute;width:250px;height:250px;" />
          </div>
          <div class="information  text-center">
            <span>
              <p class="text-h5">Name: {players.name}</p>
              <br />
              <p class="text-h6">Rank: {players.grade.name}</p>
              <br />
              <p class="text">Phone: {players.phone}</p>
              <p class="text">Is Online: {players.isOnline ? 'Player Online' : 'Player Offline'}</p>
              {#if !players.isboss}
                <button on:click={(e) => HandlePic(players.source, players.name)}>Fire</button>
              {/if}
              <button on:click={HandleCeck}>Change Ranks</button>
            </span>
          </div>
        </fieldset>
      {/each}
    </div>
  </div>
  <fieldset>
    <p>Toda la informacion aqui contenida no debera salir afuera</p>
  </fieldset>
</fieldset>
<section class="field-row" style="justify-content: flex-end">
  <button>Add People</button>
</section>
<Actions open={Opensito} {Name} on:closeModal={Close} />
<RanksMenu open={Rank} on:closeModal={Open} />

<style>
  .playerlist {
    height: 563px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    overflow: scroll;
  }
  .text {
    font-size: 16px;
  }
</style>
