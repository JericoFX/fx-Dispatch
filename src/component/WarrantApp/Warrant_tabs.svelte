<script lang="ts">
  import Grid from 'gridjs-svelte';
  import {h} from 'gridjs';
  import {PLAYER_WARRANTS} from '../../store/store';
  import WarrantsDetail from './Warrant_view_tabs_detail.svelte';
  let selected: any;
  let idCell = '';
  let open = false;
  let actionBtn = {
    name: 'Actions',
    formatter: (cell: any, row: any) => {
      return h(
        'button',
        {
          className: 'btn btn-sm btn-info text-center',
          onClick: () => handleClick(row, cell),
        },
        'Select'
      );
    },
  };
  let columns = ['ID', 'Title', 'Name', 'Last Name', 'Location', 'Vehicle', 'Description', , actionBtn];
  let data = [];

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

  function closeTab() {
    open = false;
  }
  function openTab(detail: number) {
    open = true;
    let id = document.getElementById('grid');
    let m = new WarrantsDetail({
      target: id,
      props: {
        open: open,
        id: detail,
      },
    });
    m.$on('closeTab', (id) => closeTab());

    return m;
  }

  function handleClick(e: {_cells: {data: any}[]}, b: any) {
    openTab(e._cells[0].data);
  }
  const GetData = () => {
    if ($PLAYER_WARRANTS.length) {
      for (let index = 0; index < $PLAYER_WARRANTS.length; index++) {
        const element = $PLAYER_WARRANTS[index];
        console.log(element);
        data.push([element.id, element.Title, element.Name, element.LastName, element.Coords, element.Vehicle || 'None', element.Description]);
      }
    }else{
      $PLAYER_WARRANTS = []
    }
  };

</script>

<div use:GetData />
<div class="hide-scrollbar fit">
  <Grid bind:instance={selected} {columns} {data} {style} {language} pagination={true} search={{enabled: true}} />
</div>
<div id="grid" />
