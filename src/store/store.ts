import {  writable } from 'svelte/store';

export const JOB_NAME = writable("Police")
export const JOB_MONEY = writable(123)
export const JOB_PLAYERS = writable([]) 
export const JOB_RANKS = writable("") 
export const IS_VISIBLE = writable(false) 
export const Tables_log = writable([])
export const PLAYER_DATA = writable()
export const PLAYER_DISPATCH = writable([])