<script lang="ts">
  import {JOB_NAME, JOB_PLAYERS, PLAYER_DATA,  PLAYER_WARRANTS} from '../../store/store';

  //const Name = JSON.parse();

  
  $: Players = $JOB_PLAYERS.filter((item: { grade: { onduty: any; }; }) => item.grade.onduty);
  $: Online = $JOB_PLAYERS.filter((item: { isOnline: any; }) => item.isOnline);
  $: Warrants = $PLAYER_WARRANTS.length;


</script>

<div class="window-body">
  <h2 class="text-center">{$JOB_NAME}</h2>
  <div>
    <fieldset style="height:50%;">
      <legend>Dashboard</legend>
      <p class="text-center text-h5">Pagina de inicio</p>
      <div class="container flex justify-center">
        <fieldset class="shadow-1 on-left" style="width:30vh;height:15vh;">
          <p class="text-center q-mt-sm text-bold">On Duty Polices</p>
          <p class="text-center text-h3 text-bold {Players.length >= 1 ? 'text-orange-8' : 'text-dark'}">
            {Players.length}
          </p>
        </fieldset>

        <fieldset class="shadow-1 on-left" style=" width:30vh;height:15vh;">
          <p class="text-center q-mt-sm text-bold">On Line Polices</p>
          <p class="text-center text-h3 text-bold {Online.length >= 1 ? 'text-blue-8' : 'text-dark'}">
            {Online.length}
          </p>
        </fieldset>

        <fieldset class="shadow-1 on-left" style=" width:30vh;height:15vh;">
          <p class="text-center q-mt-sm text-bold">Warrants</p>
          <p class="text-center text-h3 text-bold {Warrants >= 1 ? 'text-blue-8' : 'text-dark'}">
            {Warrants}
          </p>
        </fieldset>
      </div>
    </fieldset>
  </div>
</div>

