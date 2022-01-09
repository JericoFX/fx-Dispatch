import {  writable } from 'svelte/store';
import {IS_DEV} from '../util/config'
export const JOB_NAME = writable("")
export const JOB_MONEY = writable(0)
export const JOB_PLAYERS = writable([]) 
export const JOB_RANKS = writable([]) 
export const IS_VISIBLE = writable(IS_DEV)
export const Tables_log = writable([])
export const PLAYER_DATA = writable([])
export const PLAYER_DISPATCH = writable([{"Id":"1c244dff-598c-4e8b-a21b-a20f067ce125","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"af20921c-0cb9-4698-bc04-3ae0a4c93bbe","Phone":"1882563065","Coords":{"x":233.543197631836,"y":-779.902587890625},"Street":"Elgin Avenue","Name":"Kelly","Message":""},{"Id":"0b00b728-921b-482a-9d7b-8e7838155692","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"52ae4abc-77ba-40ca-a143-35fe4c805811","Phone":"1882563065","Coords":{"x":233.543197631836,"y":-779.902587890625},"Street":"Elgin Avenue","Name":"Kelly","Message":""},{"Id":"fbe5e34e-c9be-4fbc-b436-3e3cef9f1334","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"6ba41831-3d8d-441e-8be1-f0ff69c10241","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"b7aa5bfe-d10d-4d5c-88f9-768ce69bf2ed","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"101e7b3b-e953-409b-965e-fd81d3bcba35","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"d356bfb5-5a8a-4007-87ae-6ffd5e4fb980","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"0e50bfb6-7e9e-4db2-b9f2-4278cf0187b6","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"4a4023a7-4a94-40a3-9db2-5c0553bd2806","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"6c654230-1f8d-4626-b3b4-b5f83815441e","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"79d3cc2d-29a2-4bf9-831c-a2818bbf3130","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"6b94153a-53d0-44f1-a40a-05e1384d2949","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"e3635399-df21-4e7c-be57-91d47d46e9c8","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"51a3d66e-f601-4e48-8deb-6cbe78db4f89","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"2badcf35-5ccb-4bf6-8931-3f06f9904529","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"0862b579-1bc0-4f09-821a-1ae8063ac992","Phone":"1882563065","Coords":{"x":233.54319763183598,"y":-779.902587890625},"Street":"Elgin Avenue","Name":"Kelly","Message":""},{"Id":"3a876887-27cf-44f4-846d-af7715859295","Phone":"1882563065","Coords":{"x":233.54319763183595,"y":-779.902587890625},"Street":"Elgin Avenue","Name":"Kelly","Message":""}])

// [{"Id":"1c244dff-598c-4e8b-a21b-a20f067ce125","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"af20921c-0cb9-4698-bc04-3ae0a4c93bbe","Phone":"1882563065","Coords":{"x":233.543197631836,"y":-779.902587890625},"Street":"Elgin Avenue","Name":"Kelly","Message":""},{"Id":"0b00b728-921b-482a-9d7b-8e7838155692","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"52ae4abc-77ba-40ca-a143-35fe4c805811","Phone":"1882563065","Coords":{"x":233.543197631836,"y":-779.902587890625},"Street":"Elgin Avenue","Name":"Kelly","Message":""},{"Id":"fbe5e34e-c9be-4fbc-b436-3e3cef9f1334","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"6ba41831-3d8d-441e-8be1-f0ff69c10241","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"b7aa5bfe-d10d-4d5c-88f9-768ce69bf2ed","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"101e7b3b-e953-409b-965e-fd81d3bcba35","Phone":"1841774578","Coords":{"x":-486.9179382324219,"y":207.6134796142578},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"d356bfb5-5a8a-4007-87ae-6ffd5e4fb980","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"0e50bfb6-7e9e-4db2-b9f2-4278cf0187b6","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"4a4023a7-4a94-40a3-9db2-5c0553bd2806","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"6c654230-1f8d-4626-b3b4-b5f83815441e","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"79d3cc2d-29a2-4bf9-831c-a2818bbf3130","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"6b94153a-53d0-44f1-a40a-05e1384d2949","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"e3635399-df21-4e7c-be57-91d47d46e9c8","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"51a3d66e-f601-4e48-8deb-6cbe78db4f89","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"2badcf35-5ccb-4bf6-8931-3f06f9904529","Phone":"1841774578","Coords":{"x":-486.9306335449219,"y":207.6708221435547},"Street":"Eclipse Boulevard","Name":"Jerico","Message":""},{"Id":"0862b579-1bc0-4f09-821a-1ae8063ac992","Phone":"1882563065","Coords":{"x":233.54319763183598,"y":-779.902587890625},"Street":"Elgin Avenue","Name":"Kelly","Message":""},{"Id":"3a876887-27cf-44f4-846d-af7715859295","Phone":"1882563065","Coords":{"x":233.54319763183595,"y":-779.902587890625},"Street":"Elgin Avenue","Name":"Kelly","Message":""}]