<script>
  import {createEventDispatcher} from 'svelte';
  import Compo from '../util/codes';
  import {push} from 'svelte-spa-router';
  const dispatch = createEventDispatcher();

  function dragMe(node) {
    let moving = false;
    let left = 874 ;
    let top = 500;

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
</script>

<div
  class="window"
  style="margin: 32px;
    width: 500px;
    transform: translate(0%,-60%);"
  use:dragMe
>
  <div class="title-bar">
    <div class="title-bar-text">Information App</div>
  </div>
  <div class="window-body">
    <fieldset>
      <legend>Codes</legend>
      <ul class="on-right">
        {#each Object.values(Compo) as item}
          <li>
            {item.name}
          </li>
        {/each}
      </ul>
    </fieldset>
    <button aria-label="Close" on:click={(e) => push('/')}>Close</button>
  </div>
</div>
