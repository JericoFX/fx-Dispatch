<script>
  import {createEventDispatcher} from 'svelte';
  import {fade} from 'svelte/transition'
  import { pop, push } from 'svelte-spa-router';

  const dispatch = createEventDispatcher();
  export let Close = true;
  let Manage = false;
  let Information = false;
  let Activity = false;
  function closeModal() {
    Close = false;
    Manage = false;
    Information = false;
    Activity = false;
    dispatch('closeModal', {Close});
  }
  function dragMe(node) {
    let moving = false;
    let left = window.innerWidth / 2 ;
    let top = window.innerHeight / 2;

    node.style.position = 'absolute';
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
    node.style.userSelect = 'none';

    node.addEventListener('mousedown', () => {
      moving = true;
    });

    window.addEventListener('mousemove', (e) => {
      if (moving) {
        left += e.movementX;
        top += e.movementY;
        node.style.top = `${top}px`;
        node.style.left = `${left}px`;
      }
    });

    window.addEventListener('mouseup', () => {
      moving = false;
    });
  }
  function HandlePop(id){
    push(`/${id}`)
  }
</script>
{#if Close}
  <div class="window absolute-center non-selectable" style="    margin: 32px;
  max-width: 100vh;
  position: absolute;
  top: 479.5px;
  left: 834.5px;
  user-select: none;" use:dragMe in:fade="{{duration: 100}}">
    <div class="title-bar">
      <div class="title-bar-text">Select the App</div>
      <div class="title-bar-controls">
        <button aria-label="Close" on:click={e=> push("/")} />
      </div>
    </div>
    <div class="window-body">
      <div>
        <div class="field-row" style="justify-content: space-between;align-items: baseline;">
          <div class="img" on:click={e => HandlePop("PeoplesApp")} >
            <fieldset>
              <img alt="" src="https://media.discordapp.net/attachments/863929033925197844/927733988116795452/manager.png?width=462&height=462" style="width:128px;margin-left:3px;" />
              <p style="text-align:center;">Manage App</p>
            </fieldset>
          </div>
          <div class="img" style="flex:auto;" on:click={e=>HandlePop('BossMenu')}>
            <fieldset>
              <img alt="" src="https://media.discordapp.net/attachments/863929033925197844/927755523154128916/empresa.png?width=462&height=462" style="width:128px;margin-left:3px;" />
              <p style="text-align:center;">Boss Menu</p>
            </fieldset>
          </div>
          <div class="img" style="flex:auto;" on:click={e=>HandlePop('Map')}>
            <fieldset>
              <img alt="" src="https://media.discordapp.net/attachments/863929033925197844/929218220177641552/mapa.png?width=462&height=462" style="width:128px;margin-left:3px;" />
              <p style="text-align:center;">Map</p>
            </fieldset>
          </div>
        </div>
      </div>
      <section>
        <p />
      </section>
    </div>
  </div>
{/if}

<style>
  .img {
    transition: transform 0.2s;
  }
  .img:hover {
    transform: scale(1.01);
  }
</style>
