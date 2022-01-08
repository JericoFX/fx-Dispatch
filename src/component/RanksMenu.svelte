<script>
  import { createEventDispatcher } from 'svelte';
let Ranks = [
  {name:"Recruit",payment: 50},
  {name:"Officer",payment:75},
  {name:"Sergeant",payment:100},
  {name:"Lieutenant",payment:125},
  {name:"Chief",payment:150}

 
]
$: selected = Ranks[0]
const dispatch = createEventDispatcher();
export let open = false
function closeModal() {
  open = false;
dispatch('closeModal', { open });
selected = Ranks[0]
  }
  function RankSelected(){

  }

$: console.log(selected);
</script>


<div class="windows absolute-center" style="--display: {open ? 'block' : 'none'}; max-width: 100%;height:50px;">
<div class="window fixed-center" style="width:32vh;" >
  <div class="title-bar">
    <div class="title-bar-text"><i class="fa-solid fa-triangle-exclamation" style="color:red;"></i>Rank Selection!</div>
    <div class="title-bar-controls">
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body">
    <fieldset class="vertical-middle" style="    position: relative;
    height: 107px;">
      
      <p class="text-center"><i class="fa-solid fa-triangle-exclamation" style="color:red;"></i>Select Rank<i class="fa-solid fa-triangle-exclamation" style="color:red;"></i></p>
     
      <select  bind:value={selected} class="absolute-center">
        {#each Ranks as rank,item}
        <option value ={rank}>{item + 1} : {rank.name}:  Payment ${rank.payment}</option>
        {/each}
      </select>
      <span>
      <button class="fixed-bottom-left" style="bottom: 22px;left: 16px;" on:click={RankSelected}>Yes</button>
      <button class="fixed-bottom-right" style="bottom: 22px;right: 16px" on:click={closeModal}>Cancel</button>
    </span>
    </fieldset>
  </div>
</div>
</div>


<style>
.windows{
    display: var(--display);
   
      z-index: 2;
      filter: drop-shadow(0 0 20px #333);
}
</style>
