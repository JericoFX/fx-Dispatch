<script lang="ts">
  import * as L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import MarkerPopup from '../component/MarkerPopup.svelte';

  import {PLAYER_DISPATCH} from '../store/store';
  import {createEventDispatcher, onDestroy, onMount} from 'svelte';
  import {DEBUG} from '../util/config';
  export let open = false;
  export const Expanded = true;
  export let newLat = 0;
  export let newLong = 0;
  export let UseData = false;
  const dispatch = createEventDispatcher();
  var gtaOffset = 0.66;

  const greenIcon = L.icon({
    iconUrl: 'icons/signo-de-exclamacion.png',
    iconSize: [32, 32], // size of the icon
    shadowSize: [38, 35], // size of the shadow
    shadowAnchor: [4, 62], // the same for the shadow
  });
  let map: { fitBounds: (arg0: any) => void; setMaxBounds: (arg0: any) => void; flyTo: (arg0: any,arg1: number,arg2: { animate: boolean; duration: number; }) => void; addLayer: (arg0: { bindPopup: (arg0: () => any) => void; on: (arg0: string,arg1: () => void) => void; }) => void; bindPopup: (arg0: string) => { (): any; new(): any; openPopup: { (): void; new(): any; }; }; removeLayer: (arg0: any) => void; };

  var mapMinZoom = 2;
  var mapMaxZoom = 7;
  var mapMaxResolution = 0.25;
  var mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
  var mapCenterLat = -5525;
  var mapCenterLng = 3755;
  var gtaOffset = 0.66;
  var debug = false;
  var overlay = false;
  var bottomLeft = [-8192, 0];
  var topRight = [0, 8192];
  var bounds = [bottomLeft, topRight];
  var crs = L.CRS.Simple;

  crs.scale = function (zoom) {
    return Math.pow(2, zoom) / mapMinResolution;
  };

  function mapAction(container: HTMLDivElement) {
    var layer = L.tileLayer('tiles/{z}/{x}/{y}.jpg', {
      minZoom: mapMinZoom,
      maxZoom: mapMaxZoom,
      noWrap: true,
      tms: true,
    });

    map = new L.Map(container, {
      maxZoom: mapMaxZoom,
      minZoom: mapMinZoom,
      layers: [layer],
      crs: crs,
      center: [mapCenterLat, mapCenterLng],
      zoom: 2,
    });
    var corner1 = L.latLng(bottomLeft),
      corner2 = L.latLng(topRight),
      bounds1 = L.latLngBounds(corner1, corner2);
    map.fitBounds(bounds1);
    map.setMaxBounds(bounds1);

    if (UseData) {
      RemoveMarkers()
      map.flyTo(gtaToLatLng(newLat, newLong), 5);
      setTimeout(() => {
        var circle = L.circle(gtaToLatLng(newLat, newLong), {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 50,
        }).addTo(map);
        map.addLayer(circle);
        var popup = L.popup()
    .setLatLng(gtaToLatLng(newLat, newLong))
    .setContent("The Vehicle must be in this location")
    .openOn(map);
      }, 50);
    }
    return map;
  }

  async function bindPopup(marker: {bindPopup: any; on: any}, createFn: {(m: any): MarkerPopup; (m: any): MarkerPopup; (arg0: any): MarkerPopup | PromiseLike<MarkerPopup>}) {
    let popupComponent: MarkerPopup;
    marker.bindPopup(async () => {
      let container = await L.DomUtil.create('div');

      popupComponent = createFn(container);
      return container;
    });

    marker.on('popupclose', () => {
      if (popupComponent) {
        let old = popupComponent;
        popupComponent = null;

        setTimeout(() => {
          old.$destroy();
        }, 500);
      }
    });
  }

  function gtaToLatLng(x: number, y: number) {
    var lng = x * gtaOffset + mapCenterLng;
    var lat = y * gtaOffset + mapCenterLat;
    return L.latLng(lat, lng);
  }
  let marker: {bindPopup: (arg0: () => any) => void; on: (arg0: string, arg1: () => void) => void};
  let count = 0;
  let Markerid = [];

  function ChangeLocation(Data: any) {
    UpdateMarkers();
    map.flyTo(gtaToLatLng(Data.Coords.x, Data.Coords.y), 3, {
      animate: true,
      duration: 0.25,
    });
    bindPopup(marker, function (m: any) {
      let c = new MarkerPopup({
        target: m,
        props: {
          name: Data.Name,
          Description: Data.Message,
        },
      });
      return c;
    });
  }

function RemoveMarkers(){
  for (const key in Markerid) {
    if (Object.prototype.hasOwnProperty.call(Markerid, key)) {
      const element = Markerid[key];
      map.removeLayer(element)
    }
  }
}

  function UpdateMarkers() {
    if(!UseData){
      for (const key in $PLAYER_DISPATCH) {
      if (Object.prototype.hasOwnProperty.call($PLAYER_DISPATCH, key)) {
        const element = $PLAYER_DISPATCH[key];
        Markerid[element.Id] = 0;
        if (!Markerid[element.Id]) {
          Markerid[element.Id] = marker = L.marker(gtaToLatLng(element.Coords.x, element.Coords.y), {icon: greenIcon}).addTo(map);
          map.addLayer(marker);
        } else {
          map.removeLayer(Markerid[element.Id]);
          Markerid[element.Id] = marker = L.marker(gtaToLatLng(element.Coords.x, element.Coords.y), {icon: greenIcon}).addTo(map);
          map.addLayer(marker);
        }
        bindPopup(marker, function (m: any) {
          let c = new MarkerPopup({
            target: m,
            props: {
              name: element.Name,
              Description: element.Message,
              Street: element.Street,
            },
          });
          return c;
        });
      }
    }
    }else{
      return
    }
    
  }
  function closeModal() {
    open = false;
    dispatch('closeModal', {open});
  }
</script>

{#if open}
  <div
    class="window fixed-center fit"
    style="width: 135vh;
  max-width: 150vh;
  height: 100vh;"
    use:UpdateMarkers
  >
    <div class="title-bar">
      <div class="title-bar-text">Actividad</div>
      <div class="title-bar-controls">
        <button aria-label="Close" on:click={closeModal} />
      </div>
    </div>
    <div class="window-body text-center">
      <fieldset
        class="non-selectable on-left "
        style="    position: relative;
      width: 557px;"
      >
        <legend>Dispatch Map</legend>
        <div class="map" style={UseData ? " position: relative;width: 143vh;height: 91vh; outline: none;":"position: relative;width: 95vh;height: 91vh;"} use:mapAction />
      </fieldset>
      {#if UseData}
        <div></div>

        {:else}
     
      <div
        class="absolute-right float-right"
        style="    top: 34px;
          right: 12px;
          bottom: 0px;
          overflow: scroll;
          height: 94vh;
          width: 40vh;
          max-width: 50vh;"
      >
        <fieldset style="display: flex;flex-direction: column;align-content: center;justify-content: space-evenly;align-items: stretch;">
          <legend> Locations Tab</legend>
          {#each $PLAYER_DISPATCH.reverse() as Data}
            <fieldset class="shadow-1" on:click={(e) => ChangeLocation(Data)}>
              <legend>
                {Data.Message}
              </legend>
              {Data.Name}
            </fieldset>
          {/each}
        </fieldset>
      </div>
      {/if}
    </div>
  </div>
{/if}

<style>
</style>
