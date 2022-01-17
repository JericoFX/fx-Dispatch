<script lang="ts">
  import {PLAYER_DATA, VEHICLE_DATA} from '../../store/store';
import PlayerData from '../Dialogos/PlayerData.svelte';
  import Vehicle from '../VehiclesApp/VehiclesApp.svelte';
  let id = ""
  let Name = ""
  let LastName = ""
  let Job =""
  let Rank =""
  let Delitos = ""
  let open = false
  const viewVehicleData = (plate: string) => {
    let Id = document.getElementById('Veh');
    open = true
    let m = new Vehicle({
      target: Id,
      props: {
        Open: open,
        Placa: plate,
      },
    });

    m.$on("CloseModal",(id)=>{
      closeVehApp()
    })
    return m
  };


  const closeVehApp = () =>{
    open = false
  }
  const getPlayerInfo = () =>{
    const Data = $PLAYER_DATA.filter(Player => Player.citizenid === id)
    const DataJson = JSON.parse(Data[0].charinfo)
    const DataJson1 = JSON.parse(Data[0].job)
    Name = DataJson.firstname
    LastName = DataJson.lastname
    Job = DataJson1.label
    Rank = DataJson1.grade.name
  }
</script>

<div class="window-body fit non-selectable">
  <fieldset>
    <legend>Search Player</legend>
    <p>
      <input bind:value="{id}"  placeholder="Search By name or Citizenid" class="q-mr-sm" type="text" style="width:200px;" />
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
        <p>Delitos : </p>
        <hr class="solid q-mb-md" />
        <br />
      </fieldset>
      <fieldset class="float-left scroll" style="width: 50vh;height:297px;">
        <legend> Vehicles </legend>
        <ul class="vehicle q-ml-lg text-center text-subtitle1">
          {#each $VEHICLE_DATA as veh}
            <li on:click={() => viewVehicleData(veh.plate)} class="q-mt-md q-mb-sm text-uppercase">
              {veh.vehicle}
              {veh.plate}
              <hr class="solid q-mb-md q-mt-md" />
            </li>
          {/each}
        </ul>
      </fieldset>
      <!-- <fieldset class="float-left" style="width: 50vh;height:297px;">
        <legend>Vehicle Information</legend>
        <p>
          Model
        </p>
        <p>
          Plate
        </p>
      </fieldset> -->
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
