<script>
  import {JOB_PLAYERS} from '../store/store'
  import {createEventDispatcher} from 'svelte';
  import Actions from './Actions.svelte';
  import RanksMenu from './RanksMenu.svelte';
import {fetchNui} from '../util/fetchNui'
import * as L from 'leaflet';
  const dispatch = createEventDispatcher();

  $: Name = '';
  $: Opensito = true;
  $:Source = ""
  $: SourceRank = ""
  function Close() {
    Opensito = false;
  }
  function Open() {
    Rank = false;
  }
  $: Rank = false;
  function HandleCeck(source) {
    SourceRank = source
    Rank = true;
  }
  $: Opensito = false;
  function HandlePic(source, name) {
    Name = name;
    Source = source
    let M = new Actions({
      target:L.DomUtil.create('div'),
      props:{
        Name: Name,
        Source: Source
      }
    })
    Opensito = true;
  }
  const RefreshData = () =>{
    fetchNui('UpdatePlayers', ({Job:"police"})).then((cb) => {
      $JOB_PLAYERS.length = 0
    $JOB_PLAYERS = cb
    $JOB_PLAYERS =  $JOB_PLAYERS
  })
  }
</script>

<p>Information Panel</p>
<fieldset>
  <legend>Actions</legend>
  <br />
  <div class="e01 non-selectable">
    <div class="playerlist">
      {#each $JOB_PLAYERS as players}
        <fieldset style="flex:auto;">
          <div class="relative text-center" style="{players.isboss ?"background-color:#8badc12e;" : ""}">
            <img src="https://i.blogs.es/0cfd70/6cc2d180-c223-4fd4-973f-62b0f53302f9/1366_2000.jpeg" alt="" style="position:aboslute;width:250px;height:250px;" />
          </div>
          <div class="information  text-center">
            <span>
              <p class="text-h5">Name: {players.name}</p>
              <br />
              <p class="text-h6">Rank: {players.grade.name}</p>
              <br />
              <p class="text">Phone: {players.phone}</p>
              <br />
              <p class="text">Phone: {players.source}</p>
            
              <p class="text">Is Online: {players.isOnline ? 'Player Online' : 'Player Offline'}</p>
              {#if !players.isboss}
                <button on:click={(e) => HandlePic(players.source, players.name)}>Fire</button>
                <button on:click={e=> HandleCeck(players.source)}>Change Ranks</button>
              {/if}
            
            </span>
          </div>
        </fieldset>
      {/each}
    </div>
  </div>
  <fieldset>
    <button on:click={RefreshData}>Refresh Data</button>
  </fieldset>
</fieldset>
<section class="field-row" style="justify-content: flex-end">
  <button>Add People</button>
</section>
<Actions open={Opensito} {Source} {Name} on:closeModal={Close} />
<RanksMenu open={Rank} source={SourceRank} on:closeModal={Open} />

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
