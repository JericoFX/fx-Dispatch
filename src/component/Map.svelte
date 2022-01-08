<script lang="ts">
  import * as L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import * as markerIcons from '../util/markers';
  import MarkerPopup from '../component/MarkerPopup.svelte';
  import {PLAYER_DISPATCH} from '../store/store';
  import {createEventDispatcher, onMount} from 'svelte';

  export let open = false;
  export let Expanded = false;
  export let MenuShow = false;
  export let Maximized = false;
  const dispatch = createEventDispatcher();
  $: open;

  function closeModal() {
    open = false;
    dispatch('closeModal', {open});
  }
  var gtaOffset = 0.66;

  const greenIcon = L.icon({
    iconUrl: '/icons/signo-de-exclamacion.png',
    iconSize: [32, 32], // size of the icon
    shadowSize: [38, 35], // size of the shadow
    shadowAnchor: [4, 62], // the same for the shadow
  });
  let map: {fitBounds: (arg0: any) => void; addLayer: (arg0: any) => void; removeLayer: (arg0: any) => void; flyTo: (arg0: any, arg1: number) => void};

  // const bottomLeft = [-3950, -3960];
  // const topRight = [8320, 5150];
  // const bounds = [bottomLeft, topRight];
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
    map.setMaxBounds(bounds1)
    return map;
  }

  function bindPopup(marker: {bindPopup: (arg0: () => any) => void; on: (arg0: string, arg1: () => void) => void}, createFn: {(m: any): MarkerPopup; (arg0: any): MarkerPopup}) {
    let popupComponent: MarkerPopup;
    marker.bindPopup(() => {
      let container = L.DomUtil.create('div');

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
  let marker;
  let count = 0;
  let Markerid = [];
  function ChangeLocation(Data: any) {
    Markerid[Data.Id];
    if (!Markerid[Data.Id]) {
      Markerid[Data.Id] = marker = L.marker(gtaToLatLng(Data.Coords.x, Data.Coords.y), {icon: greenIcon}).addTo(map);
      map.addLayer(marker);
    } else {
      map.removeLayer(Markerid[Data.Id]);
      Markerid[Data.Id] = marker = L.marker(gtaToLatLng(Data.Coords.x, Data.Coords.y), {icon: greenIcon}).addTo(map);
      map.addLayer(marker);
    }
    map.flyTo(gtaToLatLng(Data.Coords.x, Data.Coords.y),3,{
      animate:true,
      duration:0.25
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


</script>

{#if open}
  <div class="window fixed-center" style={Maximized ? 'width:100vh;max-width:100vh;height:100vh;' : 'width:92vh;max-width:100vh'}>
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
        <div class="map" style={Maximized ? 'position: relative;width: 95vh;height: 91vh;' : 'height:400px;width:100%'} use:mapAction />
      </fieldset>
      {#if MenuShow}
        <div
          class="absolute-right float-right"
          style="    top: 34px;
        right: 12px;
        bottom: 0px;
        overflow: scroll;
        height: 41vh;
        width: 30vh;
        max-width: 42vh;"
        >
          <fieldset style="display: flex;flex-direction: column;align-content: center;justify-content: space-evenly;align-items: stretch;">
            <legend> Locations Tab</legend>
            {#each $PLAYER_DISPATCH as Data}
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
