<script>
    import { createEventDispatcher } from 'svelte';
	
  const dispatch = createEventDispatcher();
  export let Name = ""
  export let open = false
  function closeModal() {
    open = false;
 dispatch('closeModal', { open });
    }
</script>


<div class="windows glass absolute-center" style="--display: {open ? 'block' : 'none'}; max-width: 100%">
	<div class="window fixed-center" style="width:32vh;" >
		<div class="title-bar">
			<div class="title-bar-text"><i class="fa-solid fa-triangle-exclamation" style="color:red;"></i> Fire Windows!</div>
			<div class="title-bar-controls">
				<button aria-label="Close"></button>
			</div>
		</div>
		<div class="window-body">
			<fieldset class="vertical-middle">
       
        <p class="text-center"> Are you sure you want to fire {Name} </p>
      
   
				<span>
				<button class="on-left">Yes</button>
				<button class="on-right" style="margin-left: 94px;" on:click={closeModal}>Cancel</button>
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