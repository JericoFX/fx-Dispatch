
import Peoples from '../component/Peoples.svelte';
import BossMenu from '../component/BossMenu.svelte';
import SelectedAppPersonas from '../component/SelectedAppPersonas.svelte';
import Map1 from '../component/Map.svelte';
import VehicleApp from '../component/VehiclesApp/VehiclesApp.svelte';
import Warrant from '../component/WarrantApp/Warrant_index.svelte';

import {wrap} from 'svelte-spa-router/wrap'
import {JOB_NAME,IS_VISIBLE, JOB_PLAYERS} from "../store/store"
export default  {
  "/Peoples":wrap({
    component:SelectedAppPersonas,
  }),
  "/PeoplesApp":wrap({
    component:Peoples,

  }),
  "/BossMenu":wrap({
    component:BossMenu,
  }),
  "/Map":wrap({
    component:Map1,
    props:{
      open :true,
      Maximized : true,
      MenuShow:false
    }
  }),
  "/Vehicles":wrap({
    component:VehicleApp,
    props:{
      Open :true
    }
  }),
  "/Warrant":wrap({
    component:Warrant,
  })
}
