<script lang="ts">
 

  import {push, pop, replace} from 'svelte-spa-router';
  import SelectedAppPersonas from './component/SelectedAppPersonas.svelte';
  import Router from 'svelte-spa-router';
  import {JOB_NAME, IS_VISIBLE, JOB_PLAYERS, PLAYER_DATA, PLAYER_DISPATCH} from './store/store';
  import routes from './util/router';
  import {useNuiEvent} from './util/useNuiEvent';
  import {fetchNui} from './util/fetchNui';

  useNuiEvent('GetDefaultConfig', ({job_name, visible, players_jobs, player}) => {
    $JOB_NAME = job_name;
    $IS_VISIBLE = visible || false;
    $JOB_PLAYERS = players_jobs;
    $PLAYER_DATA = player;
  });
  useNuiEvent('GetDispatchData', ({Name, Message, Phone, Steet,Coords}) => {
    $PLAYER_DISPATCH.push({Name:"Jerico", Message:"Ayuda", Phone:"ADSSAD", Steet:"ADD",Coords:{"y":2897.955322265625,"x":-2618.947998046875}});
    $PLAYER_DISPATCH = $PLAYER_DISPATCH;
    console.log(Name, Message, Phone, Steet,JSON.stringify(Coords));
  });

  function handleKeydown(event) {
    if (event.keyCode === 27) {
      $IS_VISIBLE = false;
      fetchNui('ExitApp', true);
    }
  }
  let App = [
    {
      name: 'Peoples',
      img: 'https://img.icons8.com/fluency/48/000000/user-male-circle.png',
      selected: false,
      component: SelectedAppPersonas,
    },
    {
      name: 'Vehicles',
      img: 'https://img.icons8.com/fluency/48/000000/car-top-view.png',
      selected: false,
      component: SelectedAppPersonas,
    },
    {
      name: 'Warrants',
      img: 'https://img.icons8.com/fluency/48/000000/ipad.png',
      selected: false,
      component: SelectedAppPersonas,
    },
  ];

  const HandlePage = (name: String) => {
    push(`/${name}`);
  };
</script>

<svelte:window on:keydown={handleKeydown} />
{#if $IS_VISIBLE}
  <div class="wachin window-height window-width non-selectable" style={$IS_VISIBLE ? "display:block;" : "display:none;"}>
    <div class="app" style="position:relative;display:flex; flex-direction: column; justify-content: flex-start;margin-top:10px;margin-left:10px;">
      {#each App as apps}
        <div style="flex: auto; left:10px;absolute;">
          <img class="on-right q-ml-md" src={apps.img} alt="" style="height: 46px;width:46px;" on:dblclick={(e) => HandlePage(apps.name)} />
          <h4 class="text-h6 on-left " style="top: -4px;left:4px;position:relative;">{apps.name}</h4>
        </div>
      {/each}
    </div>
    <div class="taskbar" />
  </div>
  <Router {routes} />
{/if}





<style>
  :global(html) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(.leaflet-popup-content-wrapper, .leaflet-popup-tip){
		background-color: red;
	}
  .wachin {
    display:none;
    position: absolute;
    background-image: url('https://cdn.discordapp.com/attachments/863929033925197844/927752923323195422/wallpaperflare.com_wallpaper.jpg');
  }
  .taskbar {
    position: fixed;
    bottom: 0;
    height: 43px;
    left: 0;
    width: 100%;

    background: #00417252;
  }
</style>
