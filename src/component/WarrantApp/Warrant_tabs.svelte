<script lang="ts">
    import Grid from 'gridjs-svelte';
  import {RowSelection} from 'gridjs/plugins/selection';
  import {PluginPosition} from 'gridjs';
  import {html, h} from 'gridjs';
import { PLAYER_DISPATCH } from '../../store/store';

   let selected: any;
  let Document = document.getElementById('grid');
  let actionBtn = {
    name: 'Actions',
    formatter: (cell: any, row: any) => {
      return h(
        'button',
        {
          className: 'btn btn-sm btn-info text-center',
          onClick: () => handleClick(row),
        },
        'Select'
      );
    },
  };

  //add it via the columns property:

  let columns = ['Citizenid', 'Name', 'Message', actionBtn];

  function handleClick(e: { _cells: { data: any; }[]; }) {
    let thisId = e._cells[0].data;
    
  }
  let data = []
 const GetData = (_e: HTMLDivElement) =>{
  for (let index = 0; index < $PLAYER_DISPATCH.length; index++) {
    const element = $PLAYER_DISPATCH[index];
    data.push([element.Id,element.Name,element.Message])
    
  }
 }


  let style = {
    td: {border: '1px solid #ccc'},
    
  };
  let language = {
    search: {
      placeholder: '🔍 Buscar...',
    },
    pagination: {
      previous: '<',
      next: '>',
      showing: 'Displaying',
      results: () => 'Records',
    },
  };

 

</script>
<div use:GetData></div>
<div class="hide-scrollbar">
  <Grid bind:instance={selected} {columns} {data} {style} {language} pagination={true} search={{enabled: true}} />
</div>
<div id="grid"></div>