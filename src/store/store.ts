import {writable} from 'svelte/store';
import {IS_DEV} from '../util/config';
export const JOB_NAME = writable(IS_DEV ? 'DEV' : '');
export const JOB_MONEY = writable(0);
export const JOB_PLAYERS = writable();
export const JOB_RANKS = writable();
export const IS_VISIBLE = writable(IS_DEV);
export const Tables_log = writable([]);
export const PLAYER_DATA = writable();

export const PLAYER_DISPATCH = writable();

export const VEHICLE_DATA = writable();
export const PLAYER_WARRANTS = writable()
export const PLAYERS_JOBS = writable(IS_DEV? [{Name:"Jerico FX",Citizenid:"LTX65094"},{Name:"Kelly Santurio",Citizenid:"FQI55932"}]:[])