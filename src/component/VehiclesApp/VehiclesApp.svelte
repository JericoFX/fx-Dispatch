<script lang="ts">
  import {pop, push} from 'svelte-spa-router';
  import {SvelteToast, toast} from '@zerodevx/svelte-toast';
  import {VEHICLE_DATA} from '../../store/store';
  import * as L from 'leaflet';
  import vehicleColor from '../../util/vehicle-colors';
  import VehicleInfo from './VehicleInfo.svelte';
  import Map from '../Map.svelte';
  import {createEventDispatcher} from 'svelte';
  import {fetchNui} from '../../util/fetchNui';
import { IS_DEV } from '../../util/config';
  const dispatcher = createEventDispatcher();
  const app = new SvelteToast({
    // Set where the toast container should be appended into
    target: document.body,
    props: {},
  });

  let Owner = '',
    Plate = '',
    Color = '',
    Name = '',
    Garage = '',
    Model = '';

  let Fuel = 0,
    Engine = 0,
    State = 0,
    Body = 0;
  let Requeried = false,
    open = false,
    hasgps = false,
    OpenMap = false;
  $: Plates = '';

  function UpdateData(Data) {
    let Parse = JSON.parse(Data.mods);
    Owner = Data.citizenid;
    Plate = Data.plate;
    Garage = Data.garage;
    Model = Data.vehicle;
    let recive = vehicleColor.filter((item) => item.ID === String(Parse.color1));
    Color = recive[0].Hex;
    Requeried = Data.requeried;
    Fuel = Parse.fuelLevel.toFixed(1);
    Engine = Parse.engineHealth.toFixed(1);
    Body = Parse.bodyHealth.toFixed(1);
    State = Data.state;
    Name = 'JericoFX';
    hasgps = Data.hasgps;
  }

  function GetPlate() {
    if(IS_DEV){
      let Data = $VEHICLE_DATA.filter((item) => item.plate === '25HMB316');
    UpdateData(Data[0]);
    }else{
  fetchNui('GetVehicleData', {Plates}).then((cb) => {
      if(cb){
        UpdateData(cb)
      }
    })
    }
  
  
  }
  function OpenDataName(Message) {
    let dom = document.getElementById('jerico');
    let m = new VehicleInfo({
      target: dom,
      props: {
        open: true,
        message: Message,
      },
    });
    return m;
  }
  function OpenMaps() {
    if (hasgps) {
      fetchNui('GetVehiclePosition', {Plate}).then((cb) => {
        if (cb) {
          let MapId = document.getElementById('map');
          let m = new Map({
            target: MapId,
            props: {
              open: true,
              newLat: Number(cb.x),
              newLong: Number(cb.y),
              UseData: true,
            },
          });
          return m;
        }
      });
    } else {
      toast.push(`The Selected vehicle doest have a GPS system installed`, {
        theme: {
          '--toastBackground': '#48BB78',
          '--toastBarBackground': '#2F855A',
        },
      });
    }
  }
  function CloseMaps(e: {detail: {open: boolean}}) {
    OpenMap = e.detail.open;
  }
  let newLat = -838.4307861328125;
  let newLong = -146.84835815429688;

  function CloseInfo(e: {detail: {open: boolean}}) {
    open = false;
  }
</script>

<div class="window absolute-center  non-selectable" style="width: 90vh;max-width:100vh;">
  <div class="title-bar">
    <div class="title-bar-text">Vehicle App</div>
    <div class="title-bar-controls">
      <button aria-label="Close" on:click={(e) => push('/')} />
    </div>
  </div>
  <div class="window-body">
    <fieldset>
      <legend>Vehicle App</legend>
      <fieldset>
        <legend>Search</legend>
        <span class="on-right">
          <input type="text" bind:value={Plates} placeholder="Input Plate" aria-describedby="balloon-password" />
          <button on:click={GetPlate}>Search</button>
        </span>
      </fieldset>
      <fieldset class="ellipsis">
        <legend>Vehicle Data</legend>
        <div class="field-row fit ">
          <fieldset class="fit" style="justify-content: flex-start;">
            <legend>Information</legend>
            <p class="ellipsis">Owner: <span class="text-bold">{Owner}</span></p>
            <p class="ellipsis">Plate: <span class="text-bold"> {Plate} </span></p>
            <p class="ellipsis" on:click={OpenMaps}>Model: <span class="text-bold"> {Model.toUpperCase()} </span></p>
            <p class="ellipsis">Requeried: <span class="text-bold"><span style={Requeried ? `background-color:red` : 'green'}>{Requeried}</span> </span></p>
            <p>
              State: {State === 2 ? 'Impounded' : State === 1 ? 'Garaged' : State === 0 ? 'Out' : 'Error'}
            </p>
          </fieldset>

          <fieldset class="fit" style="justify-content: center;">
            <legend>Garage</legend>
            <p disabled class="ellipsis">
              Garage: {Garage}
            </p>
            <p class="ellipsis">In Garage: {Garage === '' ? 'No esta en garage' : 'En Garage'}</p>
          </fieldset>
          <fieldset class="fit" style="justify-content: flex-end;">
            <legend>Data</legend>
            <p class="ellipsis">
              Engine : {Engine}
              <span
                ><div role="progressbar" class="animated">
                  <div style={`width:${Engine / 10}%`} />
                </div></span
              >
            </p>
            <p class="ellipsis" style="max-width:20vh;">Fuel: {Fuel}</p>
            <p class="ellipsis">Body: {Body}</p>
            <p class="ellipsis">Color: <span style={true ? `background-color:${Color}` : 'black'}>{Color}</span></p>
          </fieldset>
        </div>
        <span
          ><button class={State === 2 ? '' : 'disabled'}>Release from Impound</button> <button>Locate Vehicle</button>
          <button class={Plate === '' ? 'disabled' : ''} on:click={(e) => (Plate === '' ? OpenDataName(`No Data Loaded`) : OpenDataName(`The Vehicle with the Plate ${Plate} belongs to ${Name}`))}>Owner Information</button>
        </span>
      </fieldset>
    </fieldset>
    <div class="status-bar">
      <p class="status-bar-field">Press F1 for help</p>
      <p class="status-bar-field">Slide 1</p>
      <p class="status-bar-field">CPU Usage: 14%</p>
    </div>
  </div>
</div>
<div id="jerico" />
<div id="map" />
<!-- <Map open={OpenMap} UseData={true} {newLat} {newLong} on:closeModal={CloseMaps} /> -->
