<script lang="ts">
  import {SvelteToast, toast} from '@zerodevx/svelte-toast';
  import {createEventDispatcher} from 'svelte';
  import {JOB_PLAYERS, JOB_RANKS} from '../store/store';
  import {fetchNui} from '../util/fetchNui';
  $: selected = '';
  const app = new SvelteToast({
    // Set where the toast container should be appended into
    target: document.body,
    props: {},
  });
  const dispatch = createEventDispatcher();
  export let open = false;
  export let source = '';
  function closeModal() {
    open = false;
    dispatch('closeModal', {open});
    selected = $JOB_RANKS[0];
  }
  function RankSelected(name: string, source: string) {
    let Name = name.name
    fetchNui('ChangeRank', {Name, source}).then((cb) => {
      if (cb) {
        let data = $JOB_PLAYERS.filter((item: { source: string; }) => item.source === source);
        toast.push(`${data[0].name} has a new rank from ${data[0].grade.name} to ${name}`, {
          theme: {
            '--toastBackground': '#48BB78',
            '--toastBarBackground': '#2F855A',
          },
        });
        data[0].grade.name = name.name;
        
        data[0].grade.level = name.id;
        $JOB_PLAYERS = $JOB_PLAYERS;
        closeModal();
      } else {
        toast.push(`An Error has been ocurred`, {
          theme: {
            '--toastBackground': '#F56565',
            '--toastBarBackground': '#C53030',
          },
        });
      }
    });
  }
</script>

<div class="windows absolute-center" style="--display: {open ? 'block' : 'none'}; max-width: 100%;height:50px;">
  <div class="window fixed-center" style="width:32vh;">
    <div class="title-bar">
      <div class="title-bar-text"><i class="fa-solid fa-triangle-exclamation" style="color:red;" />Rank Selection!</div>
      <div class="title-bar-controls">
        <button aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <fieldset
        class="vertical-middle"
        style="    position: relative;
    height: 107px;"
      >
        <p class="text-center"><i class="fa-solid fa-triangle-exclamation" style="color:red;" />Select Rank<i class="fa-solid fa-triangle-exclamation" style="color:red;" /></p>

        <select bind:value={selected} class="absolute-center">
          {#each $JOB_RANKS as rank, item}
            <option value={rank}>{rank.id} : {rank.name}</option>
          {/each}
        </select>
        <span>
          <button class="fixed-bottom-left" style="bottom: 22px;left: 16px;" on:click={(e) => RankSelected(selected, source)}>Yes</button>
          <button class="fixed-bottom-right" style="bottom: 22px;right: 16px" on:click={closeModal}>Cancel</button>
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
