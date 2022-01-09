<script>
  import {createEventDispatcher} from 'svelte';
	import { JOB_PLAYERS } from "../store/store";
	import {fetchNui} from '../util/fetchNui'
  const dispatch = createEventDispatcher();
  export let Name = '';
  export let open = false;
	export let Source = ""
  function closeModal() {
    open = false;
    dispatch('closeModal', {open});
  }
const firePlayer = (job,source) =>{
	fetchNui("expulsePlayer",{source}).then((cb) =>{
		if(cb){
				$JOB_PLAYERS = $JOB_PLAYERS.filter((item) => item.source !== source)
				$JOB_PLAYERS = $JOB_PLAYERS
				closeModal()
		}
	})
}
</script>

<div class="windows glass absolute-center" style="--display: {open ? 'block' : 'none'}; max-width: 100%">
  <div class="window fixed-center" style="width:32vh;">
    <div class="title-bar">
      <div class="title-bar-text"><i class="fa-solid fa-triangle-exclamation" style="color:red;" /> Fire Windows!</div>
      <div class="title-bar-controls">
        <button aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <fieldset class="vertical-middle">
        <p class="text-center">Are you sure you want to fire {Name} with the ID: {Source}</p>

        <span>
          <button class="on-left" on:click="{e=> firePlayer("police",Source)}">Yes</button>
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
