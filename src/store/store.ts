import {writable} from 'svelte/store';
import {IS_DEV} from '../util/config';
export const JOB_NAME = writable(IS_DEV ? 'DEV' : '');
export const JOB_MONEY = writable(0);
export const JOB_PLAYERS = writable( IS_DEV? [
  {
    source:"FQI55932",
    grade:{"payment":150,"grade":{"level":4,"name":"Chief"},"label":"Law Enforcement","isboss":true,"onduty":true,"name":"police"},
    isboss:true,
    name:"Jerico FX",
    phone:"123",
    isOnline:false
  },{
    source:"LTX65094",
    grade:{"payment":30,"grade":{"level":0,"name":"Boss"},"label":"Law Enforcement","isboss":false,"onduty":true,"name":"police"},
    isboss:false,
    name:"Kelly Santurio",
    phone:"321",
    isOnline:false
  },

]: []);
export const JOB_RANKS = writable([]);
export const IS_VISIBLE = writable(IS_DEV);
export const Tables_log = writable([]);
export const PLAYER_DATA = writable(
  IS_DEV
    ? [
        {
          id: 1,
          citizenid: 'FQI55932',
          cid: 1,
          license: 'license:a5e096a895ade109800b9d0ce185f14b0388e9a7',
          name: 'Steel Commander',
          money: '{"bank":100000000000000100000.0,"crypto":0,"cash":100000000000010260000.0}',
          charinfo: '{"phone":"1841774578","cid":"1","lastname":"FX","backstory":"placeholder backstory","firstname":"Jerico","account":"US02QBCore5959990331","nationality":"Uruguay","birthdate":"1992-04-25","gender":0}',
          job: '{"onduty":true,"name":"police","label":"Law Enforcement","grade":{"name":"Chief","level":4},"isboss":true,"payment":150}',
          gang: '{"label":"Ballas","grade":{"name":"Boss","level":3},"isboss":true,"name":"ballas"}',
          position: '{"x":-838.4307861328125,"y":-146.84835815429688,"z":19.89453125}',
          metadata: '{"stress":0,"licences":{"business":false,"driver":true,"weapon":false},"isdead":true,"currentapartment":"apartment27651","ishandcuffed":false,"criminalrecord":{"hasRecord":false},"attachmentcraftingrep":0,"craftingrep":0,"callsign":"NO CALLSIGN","commandbinds":[],"injail":0,"jailitems":[],"bloodtype":"A-","armor":0,"phonedata":{"InstalledApps":[],"SerialNumber":59571105},"fitbit":[],"inlaststand":false,"fingerprint":"zB456K67zlv2780","status":[],"jobrep":{"tow":0,"trucker":0,"hotdog":0,"taxi":0},"walletid":"QB-52374870","thirst":0,"inside":{"apartment":[]},"dealerrep":0,"tracker":false,"hunger":0,"phone":[]}',
          inventory: '[{"info":{"lastname":"FX","type":"Class C Driver License","birthdate":"1992-04-25","firstname":"Jerico"},"name":"driver_license","slot":1,"type":"item","amount":1},{"info":[],"name":"phone","slot":2,"type":"item","amount":1},{"info":{"lastname":"FX","citizenid":"FQI55932","nationality":"Uruguay","birthdate":"1992-04-25","gender":0,"firstname":"Jerico"},"name":"id_card","slot":3,"type":"item","amount":1},{"info":{"serie":"71qJl4Qa280GUFn","quality":86.04999999999947,"ammo":0},"name":"weapon_pistol","slot":4,"type":"weapon","amount":1},{"info":{"serie":"86raI6Em564XHiw","ammo":0},"name":"weapon_flashlight","slot":5,"type":"weapon","amount":1},{"info":[],"name":"handcuffs","slot":6,"type":"item","amount":1},{"info":[],"name":"tunerlaptop","slot":7,"type":"item","amount":1},{"info":[],"name":"tunerlaptop","slot":8,"type":"item","amount":1},{"info":{"serie":"01rpc5GE860WqSG"},"name":"weapon_petrolcan","slot":10,"type":"weapon","amount":1}]',
          last_updated: '2022-01-09 02:02:27',
        }
      ]
    : []
);

export const PLAYER_DISPATCH = writable(
  IS_DEV
    ? [
        {Id: '1c244dff-598c-4e8b-a21b-a20f067ce125', Phone: '1841774578', Coords: {x: -486.9179382324219, y: 207.6134796142578}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi distinctio deleniti, voluptas a ullam? Voluptate dolore rerum corrupti dolores commodi impedit itaque expedita. Pariatur necessitatibus asperiores nostrum molestiae odio officia eaque maxime voluptas eveniet dicta! Rem debitis hic obcaecati aliquam fugit minus blanditiis accusantium amet non earum quo maiores modi illo quisquam ea ipsa, error molestiae quasi ad sint aperiam quos voluptas fuga. Ipsam, vel? Ea ducimus aut eaque. Vel, nobis reprehenderit, magnam impedit recusandae minima quisquam accusamus molestiae quia nostrum assumenda et voluptas aliquam voluptates beatae quas cum! Itaque, impedit iusto architecto aperiam quos eos vitae corrupti velit?"},
        {Id: 'af20921c-0cb9-4698-bc04-3ae0a4c93bbe', Phone: '1882563065', Coords: {x: 233.543197631836, y: -779.902587890625}, Street: 'Elgin Avenue', Name: 'Kelly', Message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi distinctio deleniti, voluptas a ullam? Voluptate dolore rerum corrupti dolores commodi impedit itaque expedita. Pariatur necessitatibus asperiores nostrum molestiae odio officia eaque maxime voluptas eveniet dicta! Rem debitis hic obcaecati aliquam fugit minus blanditiis accusantium amet non earum quo maiores modi illo quisquam ea ipsa, error molestiae quasi ad sint aperiam quos voluptas fuga. Ipsam, vel? Ea ducimus aut eaque. Vel, nobis reprehenderit, magnam impedit recusandae minima quisquam accusamus molestiae quia nostrum assumenda et voluptas aliquam voluptates beatae quas cum! Itaque, impedit iusto architecto aperiam quos eos vitae corrupti velit?"},
        {Id: '0b00b728-921b-482a-9d7b-8e7838155692', Phone: '1841774578', Coords: {x: -486.9179382324219, y: 207.6134796142578}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi distinctio deleniti, voluptas a ullam? Voluptate dolore rerum corrupti dolores commodi impedit itaque expedita. Pariatur necessitatibus asperiores nostrum molestiae odio officia eaque maxime voluptas eveniet dicta! Rem debitis hic obcaecati aliquam fugit minus blanditiis accusantium amet non earum quo maiores modi illo quisquam ea ipsa, error molestiae quasi ad sint aperiam quos voluptas fuga. Ipsam, vel? Ea ducimus aut eaque. Vel, nobis reprehenderit, magnam impedit recusandae minima quisquam accusamus molestiae quia nostrum assumenda et voluptas aliquam voluptates beatae quas cum! Itaque, impedit iusto architecto aperiam quos eos vitae corrupti velit?"},
        {Id: '52ae4abc-77ba-40ca-a143-35fe4c805811', Phone: '1882563065', Coords: {x: 233.543197631836, y: -779.902587890625}, Street: 'Elgin Avenue', Name: 'Kelly', Message: "lorem"},
        {Id: 'fbe5e34e-c9be-4fbc-b436-3e3cef9f1334', Phone: '1841774578', Coords: {x: -486.9179382324219, y: 207.6134796142578}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '6ba41831-3d8d-441e-8be1-f0ff69c10241', Phone: '1841774578', Coords: {x: -486.9179382324219, y: 207.6134796142578}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: 'b7aa5bfe-d10d-4d5c-88f9-768ce69bf2ed', Phone: '1841774578', Coords: {x: -486.9179382324219, y: 207.6134796142578}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '101e7b3b-e953-409b-965e-fd81d3bcba35', Phone: '1841774578', Coords: {x: -486.9179382324219, y: 207.6134796142578}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: 'd356bfb5-5a8a-4007-87ae-6ffd5e4fb980', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '0e50bfb6-7e9e-4db2-b9f2-4278cf0187b6', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '4a4023a7-4a94-40a3-9db2-5c0553bd2806', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '6c654230-1f8d-4626-b3b4-b5f83815441e', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '79d3cc2d-29a2-4bf9-831c-a2818bbf3130', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '6b94153a-53d0-44f1-a40a-05e1384d2949', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: 'e3635399-df21-4e7c-be57-91d47d46e9c8', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '51a3d66e-f601-4e48-8deb-6cbe78db4f89', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '2badcf35-5ccb-4bf6-8931-3f06f9904529', Phone: '1841774578', Coords: {x: -486.9306335449219, y: 207.6708221435547}, Street: 'Eclipse Boulevard', Name: 'Jerico', Message: "lorem"},
        {Id: '0862b579-1bc0-4f09-821a-1ae8063ac992', Phone: '1882563065', Coords: {x: 233.54319763183598, y: -779.902587890625}, Street: 'Elgin Avenue', Name: 'Kelly', Message: "lorem"},
        {Id: '3a876887-27cf-44f4-846d-af7715859295', Phone: '1882563065', Coords: {x: 233.54319763183595, y: -779.902587890625}, Street: 'Elgin Avenue', Name: 'Kelly', Message: "lorem"},
      ]
    : []
);

export const VEHICLE_DATA = writable(
  IS_DEV
    ? [
      {
        "id": 4,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "manana",
        "hash": "-2124201592",
        "mods": "{\"color1\":120,\"modSideSkirt\":-1,\"modExhaust\":-1,\"windowTint\":-1,\"modHorns\":-1,\"modOrnaments\":-1,\"modSeats\":-1,\"modAPlate\":-1,\"modAirFilter\":-1,\"modEngine\":-1,\"modAerials\":-1,\"dirtLevel\":0.0,\"modSmokeEnabled\":false,\"wheels\":2,\"color2\":0,\"engineHealth\":994.4989498748004,\"modTurbo\":false,\"modWindows\":-1,\"plate\":\"25HMB316\",\"modSpeakers\":-1,\"modBrakes\":-1,\"tyreSmokeColor\":[255,255,255],\"modTrimB\":-1,\"xenonColor\":255,\"modCustomTiresR\":false,\"plateIndex\":3,\"modTrunk\":-1,\"modTank\":-1,\"modArmor\":-1,\"modVanityPlate\":-1,\"modArchCover\":-1,\"modRightFender\":-1,\"bodyHealth\":993.7046216400761,\"modShifterLeavers\":-1,\"modFrame\":-1,\"modDashboard\":-1,\"modSuspension\":-1,\"modTrimA\":-1,\"extras\":{\"1\":false,\"2\":true,\"10\":false,\"11\":false,\"12\":false},\"modRoof\":-1,\"fuelLevel\":60.36894583904539,\"modHydrolic\":-1,\"wheelColor\":156,\"modBackWheels\":-1,\"modFrontBumper\":2,\"modEngineBlock\":-1,\"modPlateHolder\":-1,\"modFender\":-1,\"modFrontWheels\":-1,\"modLivery\":-1,\"neonEnabled\":[false,false,false,false],\"interiorColor\":0,\"modCustomTiresF\":false,\"modRearBumper\":0,\"modSpoilers\":-1,\"modGrille\":-1,\"modDial\":-1,\"modHood\":1,\"pearlescentColor\":111,\"modXenon\":false,\"dashboardColor\":0,\"modStruts\":-1,\"model\":-2124201592,\"tankHealth\":999.2649192831461,\"modDoorSpeaker\":-1,\"modSteeringWheel\":-1,\"neonColor\":[255,0,255],\"modTransmission\":-1}",
        "plate": "25HMB316",
        "fakeplate": null,
        "garage": "",
        "fuel": 56,
        "engine": 1000,
        "body": 1000,
        "state": 0,
        "depotprice": 0,
        "drivingdistance": 2855,
        "status": null,
        "notes": "dsadasadsdas",
        "pics": "\"\\\"https://media.discordapp.net/attachments/290320746712924161/889303816846069790/screenshot.jpg\\\"\"",
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 1
      },
      {
        "id": 5,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "sultanrs",
        "hash": "-295689028",
        "mods": "{\"modSpoilers\":4,\"modBackWheels\":-1,\"modSeats\":-1,\"pearlescentColor\":70,\"modSpeakers\":-1,\"modTrimB\":-1,\"modArmor\":-1,\"modXenon\":false,\"modTransmission\":-1,\"modPlateHolder\":-1,\"modFrame\":4,\"modGrille\":-1,\"modTrimA\":-1,\"modRearBumper\":5,\"bodyHealth\":1000.0592475178704,\"modDial\":-1,\"modEngineBlock\":-1,\"color2\":64,\"dirtLevel\":0.0,\"modTrunk\":-1,\"wheels\":0,\"modCustomTiresF\":false,\"modHydrolic\":-1,\"plateIndex\":0,\"xenonColor\":255,\"modAirFilter\":-1,\"modAPlate\":-1,\"modLivery\":-1,\"modShifterLeavers\":-1,\"tyreSmokeColor\":[255,255,255],\"modDoorSpeaker\":-1,\"modAerials\":-1,\"extras\":[],\"modHood\":4,\"modFrontWheels\":-1,\"modBrakes\":-1,\"modOrnaments\":-1,\"modRightFender\":-1,\"windowTint\":-1,\"modTurbo\":false,\"modSideSkirt\":-1,\"modSteeringWheel\":-1,\"neonEnabled\":[false,false,false,false],\"modFender\":-1,\"modArchCover\":-1,\"modSmokeEnabled\":false,\"modSuspension\":-1,\"modVanityPlate\":-1,\"color1\":64,\"interiorColor\":31,\"modTank\":-1,\"modRoof\":-1,\"modFrontBumper\":5,\"modWindows\":-1,\"dashboardColor\":134,\"modHorns\":-1,\"plate\":\"84QZM170\",\"modCustomTiresR\":false,\"model\":-295689028,\"wheelColor\":158,\"neonColor\":[255,0,255],\"modExhaust\":-1,\"modDashboard\":-1,\"modStruts\":-1,\"tankHealth\":1000.0592475178704,\"modEngine\":-1,\"fuelLevel\":42.09939644038692,\"engineHealth\":1000.0592475178704}",
        "plate": "84QZM170",
        "fakeplate": null,
        "garage": "hayesdepot",
        "fuel": 100,
        "engine": 345,
        "body": 366,
        "state": 2,
        "depotprice": 2000,
        "drivingdistance": 12461,
        "status": null,
        "notes": "asd",
        "pics": "\"\"",
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 1
      },
      {
        "id": 6,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "zentorno",
        "hash": "-1403128555",
        "mods": "{\"bodyHealth\":366.1853162078938,\"color2\":64,\"modDashboard\":-1,\"modEngine\":-1,\"modCustomTiresR\":false,\"plate\":\"84QZM170\",\"model\":-295689028,\"plateIndex\":0,\"neonEnabled\":[false,false,false,false],\"modRoof\":-1,\"pearlescentColor\":70,\"modXenon\":false,\"wheelColor\":158,\"modAPlate\":-1,\"tyreSmokeColor\":[255,255,255],\"modRightFender\":-1,\"modLivery\":-1,\"tankHealth\":1000.0592475178704,\"fuelLevel\":67.51789995156392,\"modTrimA\":-1,\"modGrille\":-1,\"modEngineBlock\":-1,\"modSuspension\":-1,\"modTrunk\":-1,\"modDial\":-1,\"engineHealth\":345.53278210506246,\"modArmor\":-1,\"modRearBumper\":4,\"modFrontWheels\":-1,\"neonColor\":[255,0,255],\"modOrnaments\":-1,\"modHydrolic\":-1,\"color1\":64,\"modFender\":-1,\"dashboardColor\":134,\"modSteeringWheel\":-1,\"interiorColor\":31,\"modTurbo\":false,\"modFrame\":-1,\"modExhaust\":0,\"modTank\":-1,\"modSpoilers\":-1,\"windowTint\":-1,\"modAerials\":-1,\"xenonColor\":255,\"modSmokeEnabled\":false,\"modSpeakers\":-1,\"modPlateHolder\":-1,\"modBrakes\":-1,\"modStruts\":-1,\"dirtLevel\":3.9716411736214,\"modVanityPlate\":-1,\"modArchCover\":-1,\"modAirFilter\":-1,\"modHood\":-1,\"modSideSkirt\":2,\"modDoorSpeaker\":-1,\"wheels\":0,\"modTransmission\":-1,\"modShifterLeavers\":-1,\"modBackWheels\":-1,\"modWindows\":-1,\"extras\":[],\"modSeats\":-1,\"modHorns\":-1,\"modFrontBumper\":6,\"modCustomTiresF\":false,\"modTrimB\":-1}",
        "plate": "43GLP495",
        "fakeplate": null,
        "garage": "hayesdepot",
        "fuel": 56,
        "engine": 1000,
        "body": 1000,
        "state": 2,
        "depotprice": 0,
        "drivingdistance": 2060,
        "status": null,
        "notes": "",
        "pics": "\"\\\"https://media.discordapp.net/attachments/290320746712924161/889303816846069790/screenshot.jpg\\\"\"",
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 1
      },
      {
        "id": 7,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "zentorno",
        "hash": "-1403128555",
        "mods": "{\"modSteeringWheel\":-1,\"tankHealth\":999.7,\"modFrontWheels\":-1,\"modBrakes\":-1,\"modFender\":-1,\"modDashboard\":-1,\"modHood\":-1,\"modRearBumper\":-1,\"modExhaust\":-1,\"dashboardColor\":0,\"wheelColor\":156,\"modRoof\":-1,\"modRightFender\":-1,\"neonColor\":[255,0,255],\"modXenon\":false,\"modTrimA\":-1,\"engineHealth\":920.3,\"modAPlate\":-1,\"modSpoilers\":-1,\"modWindows\":-1,\"modArmor\":-1,\"modBackWheels\":-1,\"modFrame\":-1,\"xenonColor\":255,\"modStruts\":-1,\"modTank\":-1,\"model\":-1403128555,\"modEngineBlock\":-1,\"modCustomTiresR\":false,\"modShifterLeavers\":-1,\"modDial\":-1,\"modPlateHolder\":-1,\"modFrontBumper\":-1,\"modAirFilter\":-1,\"bodyHealth\":918.8,\"modOrnaments\":-1,\"plate\":\"89XDQ455\",\"tyreSmokeColor\":[255,255,255],\"modGrille\":-1,\"neonEnabled\":[false,false,false,false],\"pearlescentColor\":7,\"color1\":1,\"modEngine\":-1,\"modSpeakers\":-1,\"modSeats\":-1,\"modTurbo\":false,\"modHorns\":-1,\"windowTint\":-1,\"fuelLevel\":44.0,\"interiorColor\":0,\"modSideSkirt\":-1,\"modHydrolic\":-1,\"modTransmission\":-1,\"extras\":[],\"dirtLevel\":5.4,\"modTrimB\":-1,\"modArchCover\":-1,\"modTrunk\":-1,\"wheels\":7,\"modVanityPlate\":-1,\"modAerials\":-1,\"plateIndex\":0,\"modSmokeEnabled\":1,\"modCustomTiresF\":false,\"modDoorSpeaker\":-1,\"modLivery\":-1,\"modSuspension\":-1,\"color2\":41}",
        "plate": "89XDQ455",
        "fakeplate": null,
        "garage": "pillboxgarage",
        "fuel": 100,
        "engine": 1000,
        "body": 1000,
        "state": 1,
        "depotprice": 0,
        "drivingdistance": 2622,
        "status": null,
        "notes": "No Message",
        "pics": "\"\\\"https://media.discordapp.net/attachments/290320746712924161/889253299512021033/screenshot.jpg\\\"\"",
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 0
      },
      {
        "id": 8,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "sultanrs",
        "hash": "-295689028",
        "mods": "{\"modTurbo\":false,\"modSuspension\":-1,\"interiorColor\":31,\"modTrimB\":-1,\"wheels\":0,\"tyreSmokeColor\":[255,255,255],\"dashboardColor\":134,\"modTransmission\":-1,\"modEngineBlock\":-1,\"modAPlate\":-1,\"windowTint\":-1,\"dirtLevel\":9.2,\"modStruts\":-1,\"modArmor\":-1,\"modSeats\":-1,\"modDial\":-1,\"modSpeakers\":-1,\"neonColor\":[255,0,255],\"modSideSkirt\":-1,\"modCustomTiresR\":false,\"color1\":64,\"modRightFender\":-1,\"modTrimA\":-1,\"modFrame\":-1,\"wheelColor\":158,\"modAerials\":-1,\"extras\":[],\"neonEnabled\":[false,false,false,false],\"fuelLevel\":48.4,\"modTank\":-1,\"modHood\":-1,\"plate\":\"02KTL912\",\"modEngine\":-1,\"bodyHealth\":998.5,\"modWindows\":-1,\"modPlateHolder\":-1,\"modDashboard\":-1,\"plateIndex\":0,\"modDoorSpeaker\":-1,\"modHydrolic\":-1,\"modExhaust\":-1,\"modFender\":-1,\"modGrille\":-1,\"modShifterLeavers\":-1,\"modOrnaments\":-1,\"modSteeringWheel\":-1,\"color2\":64,\"modBackWheels\":-1,\"modXenon\":false,\"engineHealth\":997.6,\"modRearBumper\":-1,\"modFrontWheels\":-1,\"tankHealth\":999.8,\"modBrakes\":-1,\"modLivery\":-1,\"modCustomTiresF\":false,\"modVanityPlate\":-1,\"modSpoilers\":-1,\"pearlescentColor\":70,\"xenonColor\":255,\"modFrontBumper\":-1,\"modSmokeEnabled\":1,\"modRoof\":-1,\"model\":-295689028,\"modTrunk\":-1,\"modHorns\":-1,\"modArchCover\":-1,\"modAirFilter\":-1}",
        "plate": "02KTL912",
        "fakeplate": null,
        "garage": "pillboxgarage",
        "fuel": 100,
        "engine": 995,
        "body": 997,
        "state": 1,
        "depotprice": 1,
        "drivingdistance": 5224,
        "status": null,
        "notes": "No Message",
        "pics": "\"\"",
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 0
      },
      {
        "id": 11,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "dominator",
        "hash": "80636076",
        "mods": "{\"modPlateHolder\":-1,\"modTank\":-1,\"modTrimB\":-1,\"modSuspension\":-1,\"modAPlate\":-1,\"modSeats\":-1,\"modArchCover\":-1,\"modHood\":-1,\"modSideSkirt\":-1,\"modBrakes\":-1,\"modTrimA\":-1,\"xenonColor\":255,\"modSmokeEnabled\":false,\"modOrnaments\":-1,\"modSteeringWheel\":-1,\"engineHealth\":397,\"modCustomTiresF\":false,\"modEngine\":-1,\"modDashboard\":-1,\"wheelColor\":156,\"modTransmission\":-1,\"modDial\":-1,\"modShifterLeavers\":-1,\"dashboardColor\":0,\"modFrontWheels\":-1,\"plateIndex\":0,\"dirtLevel\":0.0,\"extras\":{\"11\":true,\"10\":false,\"12\":false},\"bodyHealth\":738,\"modStruts\":-1,\"modCustomTiresR\":false,\"color2\":0,\"wheels\":1,\"color1\":6,\"modArmor\":-1,\"modLivery\":-1,\"modSpoilers\":-1,\"fuelLevel\":36.41961669921875,\"modRearBumper\":-1,\"interiorColor\":0,\"modRoof\":-1,\"modXenon\":false,\"modHydrolic\":-1,\"modFrame\":-1,\"tankHealth\":1000.0,\"neonColor\":[255,0,255],\"modTurbo\":false,\"modExhaust\":-1,\"modTrunk\":-1,\"model\":80636076,\"modAirFilter\":-1,\"modEngineBlock\":-1,\"modAerials\":-1,\"windowTint\":-1,\"modGrille\":-1,\"modDoorSpeaker\":-1,\"modBackWheels\":-1,\"neonEnabled\":[false,false,false,false],\"modFender\":-1,\"modVanityPlate\":-1,\"modWindows\":-1,\"modRightFender\":-1,\"modFrontBumper\":-1,\"pearlescentColor\":111,\"modSpeakers\":-1,\"modHorns\":-1,\"plate\":\"7LI351KG\",\"tyreSmokeColor\":[255,255,255]}",
        "plate": "7LI351KG",
        "fakeplate": null,
        "garage": "hayesdepot",
        "fuel": 50,
        "engine": 878,
        "body": 944,
        "state": 2,
        "depotprice": 0,
        "drivingdistance": 38,
        "status": null,
        "notes": "No Message",
        "pics": null,
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 0
      },
      {
        "id": 13,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "zorrusso",
        "hash": "-682108547",
        "mods": "{\"wheels\":7,\"extras\":[],\"modSteeringWheel\":-1,\"plate\":\"5JC531JT\",\"modAirFilter\":-1,\"interiorColor\":13,\"color2\":29,\"modStruts\":-1,\"modShifterLeavers\":-1,\"engineHealth\":1000.0,\"neonEnabled\":[false,false,false,false],\"modBrakes\":-1,\"modExhaust\":-1,\"modArchCover\":-1,\"modOrnaments\":-1,\"fuelLevel\":82.2,\"modVanityPlate\":-1,\"modHood\":-1,\"modAPlate\":-1,\"modRoof\":-1,\"pearlescentColor\":134,\"modFrontBumper\":-1,\"modDoorSpeaker\":-1,\"modCustomTiresR\":false,\"tankHealth\":1000.0,\"modHydrolic\":-1,\"modSideSkirt\":-1,\"tyreSmokeColor\":[255,255,255],\"modWindows\":-1,\"dashboardColor\":111,\"modRightFender\":-1,\"bodyHealth\":719.2,\"dirtLevel\":3.1,\"modXenon\":false,\"modSmokeEnabled\":false,\"modSuspension\":-1,\"modFrame\":-1,\"color1\":1,\"modDashboard\":-1,\"modEngine\":-1,\"modRearBumper\":-1,\"modAerials\":-1,\"windowTint\":-1,\"modLivery\":-1,\"modFender\":-1,\"neonColor\":[255,0,255],\"plateIndex\":0,\"wheelColor\":0,\"modDial\":-1,\"modSpeakers\":-1,\"modHorns\":-1,\"modTurbo\":false,\"xenonColor\":255,\"modPlateHolder\":-1,\"modSeats\":-1,\"modSpoilers\":-1,\"model\":-682108547,\"modCustomTiresF\":false,\"modTrunk\":-1,\"modTank\":-1,\"modGrille\":-1,\"modBackWheels\":-1,\"modEngineBlock\":-1,\"modArmor\":-1,\"modTrimA\":-1,\"modTransmission\":-1,\"modFrontWheels\":-1,\"modTrimB\":-1}",
        "plate": "5JC531JT",
        "fakeplate": null,
        "garage": "pillboxgarage",
        "fuel": 82,
        "engine": 1000,
        "body": 1000,
        "state": 1,
        "depotprice": 0,
        "drivingdistance": 496,
        "status": null,
        "notes": "No Message",
        "pics": null,
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 0
      },
      {
        "id": 14,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "sanchez",
        "hash": "788045382",
        "mods": "{\"modBrakes\":-1,\"modLivery\":3,\"modWindows\":-1,\"modCustomTiresF\":false,\"modExhaust\":-1,\"modSteeringWheel\":-1,\"modHydrolic\":-1,\"neonEnabled\":[false,false,false,false],\"modTrimB\":-1,\"modXenon\":false,\"modSeats\":-1,\"modEngineBlock\":-1,\"plate\":\"8AV967XW\",\"modSmokeEnabled\":false,\"modAPlate\":-1,\"modCustomTiresR\":false,\"bodyHealth\":985.1,\"modTank\":-1,\"modDial\":-1,\"modSideSkirt\":-1,\"modDashboard\":-1,\"modGrille\":-1,\"modArmor\":-1,\"modHorns\":-1,\"modVanityPlate\":-1,\"modDoorSpeaker\":-1,\"pearlescentColor\":0,\"color1\":0,\"modRoof\":-1,\"modPlateHolder\":-1,\"windowTint\":-1,\"modOrnaments\":-1,\"model\":788045382,\"modSpoilers\":-1,\"modHood\":-1,\"modFender\":-1,\"modAerials\":-1,\"plateIndex\":0,\"modFrame\":-1,\"dashboardColor\":0,\"neonColor\":[255,0,255],\"modRearBumper\":-1,\"modRightFender\":-1,\"tankHealth\":1000.0,\"fuelLevel\":99.6,\"modEngine\":-1,\"wheelColor\":156,\"color2\":0,\"modTurbo\":false,\"wheels\":6,\"modTransmission\":-1,\"interiorColor\":0,\"dirtLevel\":6.0,\"extras\":[],\"modTrimA\":-1,\"xenonColor\":255,\"modFrontBumper\":-1,\"modStruts\":-1,\"modSuspension\":-1,\"tyreSmokeColor\":[255,255,255],\"modFrontWheels\":-1,\"modShifterLeavers\":-1,\"modArchCover\":-1,\"modBackWheels\":-1,\"modSpeakers\":-1,\"engineHealth\":1000.0,\"modAirFilter\":-1,\"modTrunk\":-1}",
        "plate": "8AV967XW",
        "fakeplate": null,
        "garage": "pillboxgarage",
        "fuel": 100,
        "engine": 1000,
        "body": 986,
        "state": 1,
        "depotprice": 0,
        "drivingdistance": 2456,
        "status": null,
        "notes": "No Message",
        "pics": null,
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 0
      },
      {
        "id": 15,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "dominator7",
        "hash": "426742808",
        "mods": "{\"modOrnaments\":-1,\"modHood\":7,\"modTurbo\":false,\"modAPlate\":-1,\"dirtLevel\":0.0,\"model\":426742808,\"modShifterLeavers\":-1,\"modTransmission\":-1,\"modFrame\":0,\"modPlateHolder\":-1,\"tyreSmokeColor\":[255,255,255],\"modCustomTiresR\":false,\"modExhaust\":2,\"tankHealth\":4000.2369900714818,\"modSpeakers\":-1,\"plateIndex\":0,\"modVanityPlate\":-1,\"interiorColor\":5,\"extras\":[],\"modTrimA\":-1,\"modCustomTiresF\":false,\"modLivery\":-1,\"color1\":112,\"neonEnabled\":[false,false,false,false],\"modTank\":-1,\"modEngineBlock\":-1,\"wheelColor\":156,\"modDashboard\":-1,\"plate\":\"0JG001EU\",\"color2\":88,\"modBrakes\":-1,\"modFrontBumper\":13,\"xenonColor\":255,\"fuelLevel\":61.16327407376967,\"modTrimB\":-1,\"modRightFender\":0,\"pearlescentColor\":4,\"modXenon\":false,\"modBackWheels\":-1,\"modSteeringWheel\":-1,\"windowTint\":-1,\"modEngine\":-1,\"modDoorSpeaker\":-1,\"modArmor\":-1,\"modAirFilter\":-1,\"dashboardColor\":111,\"engineHealth\":1000.0592475178704,\"modSuspension\":-1,\"modGrille\":2,\"modFrontWheels\":-1,\"modArchCover\":-1,\"modSpoilers\":8,\"wheels\":0,\"neonColor\":[255,0,255],\"modStruts\":-1,\"modTrunk\":-1,\"modSeats\":-1,\"modRearBumper\":12,\"modHydrolic\":-1,\"bodyHealth\":1000.0592475178704,\"modWindows\":-1,\"modHorns\":-1,\"modFender\":0,\"modRoof\":2,\"modSideSkirt\":9,\"modSmokeEnabled\":false,\"modDial\":-1,\"modAerials\":-1}",
        "plate": "0JG001EU",
        "fakeplate": null,
        "garage": "pillboxgarage",
        "fuel": 64,
        "engine": 815,
        "body": 508,
        "state": 1,
        "depotprice": 0,
        "drivingdistance": 5675,
        "status": null,
        "notes": "No Message",
        "pics": null,
        "damages": "{\"vehicle_doors\":[false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_window\":[false,1,false,false,false,false,false,false]}",
        "hasgps": 0
      },
      {
        "id": 16,
        "license": "license:a5e096a895ade109800b9d0ce185f14b0388e9a7",
        "citizenid": "FQI55932",
        "vehicle": "fcr2",
        "hash": "-757735410",
        "mods": "{\"interiorColor\":0,\"modTrimB\":-1,\"modHydrolic\":-1,\"modDashboard\":-1,\"modCustomTiresF\":false,\"modOrnaments\":-1,\"modEngine\":-1,\"modPlateHolder\":-1,\"extras\":[],\"wheelColor\":156,\"color2\":38,\"fuelLevel\":100.0,\"modDial\":-1,\"modTransmission\":-1,\"neonColor\":[255,0,255],\"modFrame\":-1,\"modRoof\":-1,\"neonEnabled\":[false,false,false,false],\"modArmor\":-1,\"pearlescentColor\":18,\"xenonColor\":255,\"modShifterLeavers\":-1,\"modSmokeEnabled\":false,\"modSuspension\":-1,\"model\":-757735410,\"tyreSmokeColor\":[255,255,255],\"windowTint\":-1,\"modSideSkirt\":-1,\"modFender\":-1,\"plate\":\"0BP927BA\",\"tankHealth\":1000.0,\"modGrille\":-1,\"modLivery\":-1,\"wheels\":6,\"modRightFender\":-1,\"modArchCover\":-1,\"modBrakes\":-1,\"modCustomTiresR\":false,\"modTank\":-1,\"modSpoilers\":-1,\"dirtLevel\":9.0,\"modStruts\":-1,\"modRearBumper\":-1,\"engineHealth\":1000.0,\"plateIndex\":0,\"modWindows\":-1,\"modHood\":-1,\"modSeats\":-1,\"modTrunk\":-1,\"modAerials\":-1,\"color1\":122,\"modHorns\":-1,\"dashboardColor\":0,\"modTurbo\":false,\"modExhaust\":-1,\"modTrimA\":-1,\"modDoorSpeaker\":-1,\"modBackWheels\":-1,\"modVanityPlate\":-1,\"modAirFilter\":-1,\"modSpeakers\":-1,\"modFrontWheels\":-1,\"modFrontBumper\":-1,\"modEngineBlock\":-1,\"bodyHealth\":1000.0,\"modXenon\":false,\"modSteeringWheel\":-1,\"modAPlate\":-1}",
        "plate": "0BP927BA",
        "fakeplate": null,
        "garage": "pillboxgarage",
        "fuel": 100,
        "engine": 1000,
        "body": 922,
        "state": 1,
        "depotprice": 0,
        "drivingdistance": 1690,
        "status": null,
        "notes": "No Message",
        "pics": null,
        "damages": "{\"vehicle_window\":[false,false,false,false,false,false,false,false],\"wheel_tires\":[false,false,false,false,false,false,false],\"vehicle_doors\":[false,false,false,false,false,false]}",
        "hasgps": 0
      }
    ]
    : []
);
export const PLAYER_WARRANTS = writable(IS_DEV ? [{
  id: 203,
  Title: "sdasdaasdsda",
  Name: "asdasdasd",
  LastName: "dasdada",
  Location: "weewq",
  Description: "as dsaewqd asd ",
  Vehicle:"None",
  Tags: [
      "#1231"
  ]
},
{
  id: 204,
  Title: "sdasdaasdsda",
  Name: "asdasdasd",
  LastName: "dasdada",
  Location: "weewq",
  Description: "as dsaewqd asd ",
  Vehicle:"None",
  Tags: [
      "#1231"
  ]
},
{
  id: 205,
  Title: "sdasdaasdsda",
  Name: "asdasdasd",
  LastName: "dasdada",
  Location: "weewq",
  Description: "as dsaewqd asd ",
  Vehicle:"None",
  Tags: [
      "#1231"
  ]
},
{
  id: 206,
  Title: "sdasdaasdsda",
  Name: "asdasdasd",
  LastName: "dasdada",
  Location: "weewq",
  Description: "as dsaewqd asd ",
  Vehicle:"None",
  Tags: [
      "#1231"
  ]
}]:[])
export const PLAYERS_JOBS = writable(IS_DEV? [{Name:"Jerico FX",Citizenid:"LTX65094"},{Name:"Kelly Santurio",Citizenid:"FQI55932"}]:[])