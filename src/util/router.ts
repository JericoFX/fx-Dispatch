
import Peoples from '../component/Peoples.svelte';
import BossMenu from '../component/BossMenu.svelte';
import InformationScreen from '../component/InformationScreen.svelte';
import SelectedAppPersonas from '../component/SelectedAppPersonas.svelte';
import ActividadTab from '../component/ActividadTab.svelte';
import Map1 from '../component/Map.svelte';
import {wrap} from 'svelte-spa-router/wrap'
import {JOB_NAME,IS_VISIBLE, JOB_PLAYERS} from "../store/store"
export default  {
  "/Peoples":wrap({
    component:SelectedAppPersonas,
  }),
  "/PeoplesApp":wrap({
    component:Peoples,

  }),
  "/InformationScreen":wrap({
    component:InformationScreen,
  }),
  "/BossMenu":wrap({
    component:BossMenu,
  }),
  "/Activity":wrap({
    component:ActividadTab,
  }),
  "/Map":wrap({
    component:Map1,
    props:{
      open :true,
      Maximized : true,
      MenuShow:false
    }
  })
}
