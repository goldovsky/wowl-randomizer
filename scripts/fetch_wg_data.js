#!/usr/bin/env node
/*
  Prototype script to fetch nations data from Wargaming API (World of Warships)
  Usage: APPLICATION_ID=your_id node scripts/fetch_wg_data.js [realm]
  realm default: eu (other realms: na, asia, wgcb)

  Notes:
  - You must register an application at https://developers.wargaming.net/ to get APPLICATION_ID
  - Script fetches /wows/encyclopedia/ships/ and derives nations and whether they have carriers
*/

const fs = require('fs');
const https = require('https');

const APP_ID = process.env.APPLICATION_ID;
if(!APP_ID){
  console.error('Please set APPLICATION_ID env var');
  process.exit(2);
}
const realm = process.argv[2] || 'eu';

function fetchShips(){
  // Construct host like api.worldofwarships.eu
  const host = `api.worldofwarships.${realm}`;
  const fields = encodeURIComponent('name,nation,is_carrier');
  const limit = 1000; // large limit for single request; adjust if needed
  const url = `https://${host}/wows/encyclopedia/ships/?application_id=${APP_ID}&fields=${fields}&limit=${limit}`;
  return new Promise((res, rej)=>{
    https.get(url, (r)=>{
      let data=''; r.on('data', c=>data+=c); r.on('end', ()=>{
        try{ res(JSON.parse(data)); }catch(e){ rej(e); }
      });
    }).on('error', rej);
  });
}

(async ()=>{
  try{
    console.log('Fetching ships...');
    const body = await fetchShips();
    if(body.status !== 'ok') throw new Error('API error: ' + JSON.stringify(body.error));
    const ships = Object.values(body.data || {});
    const nations = {};
    for(const s of ships){
      const nat = s.nation || 'unknown';
      nations[nat] = nations[nat] || { id:nat, name:nat, carriers:false, ships:0 };
      nations[nat].ships++;
      if(s.is_carrier) nations[nat].carriers = true;
    }
    const out = Object.values(nations).map(n=>({ id:n.id, name:n.name, carriers:n.carriers }));
    fs.writeFileSync('data/nations.json', JSON.stringify(out, null, 2));
    console.log('Wrote data/nations.json with', out.length, 'nations');
  }catch(e){
    console.error('Failed', e);
  }
})();
