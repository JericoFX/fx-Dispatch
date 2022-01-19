<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();
  import {PLAYER_WARRANTS} from '../../store/store';
  let Title = '';
  let Location = '';
  let Name = ""
  let lastName = ""
  let Description = '';
  let Tags1 = [];
  let Vehicle = false;
  $: Constripado = Title == '' || Location == '' || Description == '' || Name == ''  || lastName == ''
  export let open = false;
  const CreateNewDispatch = () => {
    let Data = Math.random() * 500
    //.toFixed(0)
    $PLAYER_WARRANTS.push({id:Data.toFixed(0),CreatedBy:"",Screenshot:"",Title: Title,Name:Name,LastName:lastName, Location: Location, Description: Description});
    
      $PLAYER_WARRANTS = $PLAYER_WARRANTS;
    open = false;
    dispatch('CloseNewWarrant', {open});
  };
  const HandleClose = () => {
    open = false;
    dispatch('CloseNewWarrant', {open});
    Title = ""
    Location = ""
    Description = ''
    Tags1 = []
    Vehicle = false
     Name = ""
   lastName = ""
  };
  function handleTags(event: { detail: { tags: any[]; }; }) {
    Tags1 = event.detail.tags;
}
</script>

{#if open}
  <div class="window fixed-center non-selectable" style="max-width:70vh;">
    <div class="title-bar">
      <div class="title-bar-text">New Report Window</div>
    </div>
    <div class="window-body">
      <fieldset
        class="text-center field-collumn"
        style="display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: flex-end;
      align-items: center;"
      >
        <legend>Incidente</legend>
        <fieldset class="fit">
          <legend>Title</legend>
          <div>
            <p>
              <input bind:value={Title} class="text-center fit " id="text21" type="text" />
            </p>
          </div>
        </fieldset>
        <fieldset class="fit">
          <legend>Datos Basicos</legend>
          <p>
            <label  class="" for="Name">Name : </label>
            <input bind:value={Name} class="fit" id="Name" type="text" />
          </p>
          <hr class="solid q-mb-md">
          <p>
            <label class="" for="Name">Last Name : </label>
            <input bind:value={lastName} class="fit" id="Name" type="text" />
          </p>
          <hr class="solid q-mb-md">
          <div class="field-row q-mb-md" style="justify-content: center;">
            <input bind:checked={Vehicle} type="checkbox" id="example2" />
            <label for="example2">Vehicle Involved?</label>
          </div>
          <hr class="solid q-mb-md">
          <p>
            <label class="" for="Name">Vehicle Plate : </label>
            <input disabled={!Vehicle} class="fit" id="Name" type="text" />
          </p>
        </fieldset>
        <fieldset class="fit">
          <legend>Location</legend>
          <div>
            <input  class="fit" bind:value={Location} id="text211" type="text" />
            <button class="q-mt-md">Get current Location</button>
          </div>
        </fieldset>
        <fieldset class="text-center fit">
          <legend>Description</legend>
          <div class="field-row-stacked">
            <!-- <label class="text-h6 text-center" style="margin:auto;" for="text24">Description</label> -->
            <textarea class="fit" bind:value={Description} id="text24" rows="8" />
          </div>
        </fieldset>
       
      </fieldset>
      <section class="field-row" style="justify-content: space-between;">
        <button disabled={Constripado ? true : false} on:click={CreateNewDispatch}>Accept</button>
        <button on:click={HandleClose}>Cancel</button>
      </section>
    </div>
    <div class="status-bar">
      <p class="status-bar-field">Press F1 for help</p>
      <p class="status-bar-field">Slide 1</p>
      <p class="status-bar-field">CPU Usage: 14%</p>
    </div>
  </div>
{/if}
