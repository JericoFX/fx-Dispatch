<script lang="ts">
  import {fetchNui} from '../../util/fetchNui';
  import Vehicle from '../VehiclesApp/VehiclesApp.svelte';
  let id = '';
  let Name = '';
  let LastName = '';
  let Job = '';
  let Rank = '';
  let Delitos = ''; // Para implementar mas adelante
  let open = false;
  $: VehicleList = [];
  const viewVehicleData = (plate: string) => {
    let Id = document.getElementById('Veh');
    open = true;
    let m = new Vehicle({
      target: Id,
      props: {
        Open: open,
        Placa: plate,
        VehicleOwner: `${Name} ${LastName}`,
      },
    });

    m.$on('CloseModal', (id) => {
      closeVehApp();
    });
    return m;
  };

  const closeVehApp = () => {
    open = false;
  };
  const getPlayerInfo = () => {
    fetchNui('GetVehicleWarrants', {id}).then((cb) => {
      if (cb) {
        const Data = cb.Player[0];
        VehicleList = cb.Vehicles;
        VehicleList = VehicleList;
        Name = Data.Name;
        LastName = Data.LastName;
        Job = Data.Job;
        Rank = Data.Rank;
      }
    });
  };
</script>

<div class="window-body fit non-selectable">
  <fieldset>
    <legend>Search Player</legend>
    <p>
      <input bind:value={id} placeholder="Search By name or Citizenid" class="q-mr-sm" type="text" style="width:200px;" />
      <button on:click={getPlayerInfo}>Search</button>
    </p>
    <fieldset>
      <legend>Information</legend>
      <fieldset class="float-left">
        <legend>Image</legend>
        <p>
          <img src="https://i.blogs.es/0cfd70/6cc2d180-c223-4fd4-973f-62b0f53302f9/1366_2000.jpeg" alt="" style="position:aboslute;width:250px;height:250px;" />
        </p>
      </fieldset>
      <fieldset class="float-left scroll text-subtitle1" style="width: 50vh;height:297px;">
        <legend>Basic Information</legend>
        <p class="q-mt-sm">Name: {Name}</p>
        <br />
        <hr class="solid q-mb-md" />
        <br />
        <p>Last Name: {LastName}</p>
        <br />
        <hr class="solid q-mb-md" />
        <br />
        <p>Job: {Job}</p>
        <hr class="solid q-mb-md" />
        <br />
        <p>Rank : {Rank}</p>
        <hr class="solid q-mb-md" />
        <br />
        <p>Delitos :</p>
        <hr class="solid q-mb-md" />
        <br />
      </fieldset>
      <fieldset class="float-left scroll" style="width: 50vh;height:297px;">
        <legend> Vehicles </legend>
        <ul class="vehicle q-ml-lg text-center text-subtitle1">
          {#if VehicleList.length}
            {#each VehicleList as veh}
              <li on:click={() => viewVehicleData(veh.plate)} class="q-mt-md q-mb-sm text-uppercase">
                {veh.vehicle}
                {veh.plate}
                <hr class="solid q-mb-md q-mt-md" />
              </li>
            {/each}
          {:else}
            <li class="q-mt-md q-mb-sm text-uppercase">
              <p>No Vehicle Data</p>
              <hr class="solid q-mb-md q-mt-md" />
            </li>{/if}
        </ul>
      </fieldset>
    </fieldset>
  </fieldset>
</div>
<div id="Veh" />

<style>
  .vehicle {
  }
  .vehicle:hover {
    cursor: pointer;
  }
</style>
