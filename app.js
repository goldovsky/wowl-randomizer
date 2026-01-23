// Minimal logic for WoWSL Randomizer
const DATA_PATH = 'data/nations.json';

const nation_usa = {"id":"usa","name":"U.S.A.","flag":"assets/flags/usa.png","carriers":true, categoryByRank: {
    "1": ["Destroyer","Cruiser"],
    "2": ["Destroyer","Cruiser"],
    "3": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "4": ["Destroyer","Cruiser","Battleship"],
    "5": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "6": ["Destroyer","Cruiser","Battleship"],
    "7": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "8": ["Destroyer","Cruiser","Battleship"],
    "*": ["Destroyer", "Cruiser","Battleship", "Aircraft Carrier"]
  }};

const nation_japan = {"id":"japan","name":"Japon","flag":"assets/flags/japan.png","carriers":true, categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Destroyer","Cruiser"],
    "3": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "4": ["Destroyer","Cruiser","Battleship"],
    "5": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "6": ["Destroyer","Cruiser","Battleship"],
    "7": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "8": ["Destroyer","Cruiser","Battleship"],
    "*": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"]
  }};
  
const nation_ussr = {"id":"ussr","name":"U.S.S.R.","flag":"assets/flags/ussr.png","carriers":false, categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Destroyer","Cruiser"],
    "3": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "4": ["Destroyer","Cruiser","Battleship"],
    "5": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "6": ["Destroyer","Cruiser","Battleship"],
    "7": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "8": ["Destroyer","Cruiser","Battleship"],
    "*": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"]
  }};

const nation_germany = {"id":"germany","name":"Allemagne","flag":"assets/flags/germany.png","carriers":false, categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Destroyer","Cruiser"],
    "3": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "4": ["Destroyer","Cruiser","Battleship"],
    "5": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "6": ["Destroyer","Cruiser","Battleship"],
    "7": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "8": ["Destroyer","Cruiser","Battleship"],
    "*": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"]
  }};

const nation_uk = {"id":"uk","name":"U.K.","flag":"assets/flags/uk.png","carriers":true, categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Destroyer","Cruiser"],
    "3": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "4": ["Destroyer","Cruiser","Battleship"],
    "5": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "6": ["Destroyer","Cruiser","Battleship"],
    "7": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "8": ["Destroyer","Cruiser","Battleship"],
    "*": ["Destroyer","Cruiser","Battleship"]
  }};


const nation_france = {"id":"france","name":"France","flag":"assets/flags/france.png","carriers":false, categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Destroyer","Cruiser"],
    "3": ["Destroyer","Cruiser","Battleship"],
    "4": ["Destroyer","Cruiser","Battleship"],
    "5": ["Destroyer","Cruiser","Battleship"],
    "6": ["Destroyer","Cruiser","Battleship"],
    "7": ["Destroyer","Cruiser","Battleship"],
    "8": ["Destroyer","Cruiser","Battleship"],
    "*": ["Destroyer","Cruiser","Battleship"]
  }};

const nation_italy = {"id":"italy","name":"Italie","flag":"assets/flags/italy.png","carriers":false, categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Destroyer","Cruiser"],
    "3": ["Destroyer","Cruiser","Battleship"],
    "4": ["Destroyer","Cruiser","Battleship"],
    "5": ["Destroyer","Cruiser","Battleship"],
    "6": ["Destroyer","Cruiser","Battleship"],
    "7": ["Destroyer","Cruiser","Battleship"],
    "8": ["Destroyer","Cruiser","Battleship"],
    "*": ["Destroyer","Cruiser","Battleship"]
  }};

const nation_spain = {"id":"spain","name":"Espagne","flag":"assets/flags/spain.png","carriers":false,
  categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Cruiser"],
    "3": ["Cruiser"],
    "4": ["Cruiser"],
    "5": ["Cruiser"],
    "6": ["Cruiser"],
    "7": ["Cruiser"],
    "8": ["Cruiser"],
    "*": ["Cruiser"]
  }
};

const nation_netherlands = {"id":"netherlands","name":"Pays-Bas","flag":"assets/flags/netherlands.png","carriers":false, categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Cruiser"],
    "3": ["Cruiser"],
    "4": ["Cruiser"],
    "5": ["Cruiser"],
    "6": ["Cruiser"],
    "7": ["Cruiser"],
    "8": ["Cruiser"],
    "*": ["Cruiser"]
  }};

const nation_pan_america = {"id":"pan-america","name":"Pan-America","flag":"assets/flags/pan-america.png","carriers":false, categoryByRank: {
    "1": [],
    "2": [],
    "3": [],
    "4": ["Battleship"],
    "5": ["Destroyer"],
    "6": [],
    "7": ["Battleship"],
    "8": [],
    "*": []
  }};

const nation_commonwealth = {"id":"commonwealth","name":"Commonwealth","flag":"assets/flags/commonwealth.png","carriers":true, categoryByRank: {
    "1": [],
    "2": ["Destroyer"],
    "3": [],
    "4": [],
    "5": ["Cruiser"],
    "6": ["Battleship"],
    "7": ["Destroyer"],
    "8": ["Cruiser"],
    "*": ["Cruiser"]
  }};

const nation_pan_asia = {"id":"pan-asia","name":"Pan-Asie","flag":"assets/flags/pan-asia.png","carriers":false, categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Destroyer","Cruiser"],
    "3": ["Destroyer","Cruiser"],
    "4": ["Destroyer","Cruiser"],
    "5": ["Destroyer","Cruiser"],
    "6": ["Destroyer","Cruiser"],
    "7": ["Destroyer","Cruiser"],
    "8": ["Destroyer","Cruiser"],
    "*": ["Cruiser"]
  }};

const nation_europe = {"id":"europe","name":"Europe","flag":"assets/flags/europe.png","carriers":false,
  categoryByRank: {
    "1": ["Cruiser"],
    "2": ["Destroyer"],
    "3": ["Destroyer"],
    "4": ["Destroyer","Battleship"],
    "5": ["Destroyer"],
    "6": ["Destroyer","Battleship"],
    "7": ["Destroyer","Cruiser"],
    "8": ["Destroyer","Battleship"],
    "*": ["Destroyer"]
  }
};

// Embedded nations data — kept directly in app.js so the page works when opened
// via file:// without CORS issues.
// Nations list. Optional field `categoryByRank` lets you specify which ship
// categories are available for a given rank for that nation. Example:
//   categoryByRank: {
//     "1": "Destroyer",
//     "5": ["Cruiser","Battleship"],   // for rank 5 offer either Cruiser or Battleship
//     "8": ["Battleship","Battleship"], // for rank 8 prefer Battleship (weighting via duplicates)
//     "*": "Destroyer"                  // mapping for legendary rank
//   }
// The values may be a string (single category), or an array (used as a choice pool).
// When `players===2` and the mapping resolves to two explicit values (array length 2),
// they are used as the two player categories (subject to carrier rules). Otherwise the
// array is treated as a pool to pick from.
const NATIONS = [
  nation_usa,
  nation_japan,
  nation_ussr,
  nation_germany,
  nation_uk,
  nation_commonwealth,
  nation_france,
  nation_italy,
  nation_spain,
  nation_netherlands,
  nation_europe,
  nation_pan_america,
  nation_pan_asia,
];

let nations = [];

function $(id){ return document.getElementById(id); }

async function loadData(){
  // Use embedded data for reliability when opened locally (file://)
  nations = Array.isArray(NATIONS) ? NATIONS.slice() : [];
  if(!Array.isArray(nations) || nations.length === 0){
    const btn = $('randomBtn'); if(btn) btn.disabled = true;
    const status = $('dataStatus'); if(status) status.textContent = 'Nations chargées: 0';
  }else{
    const status = $('dataStatus'); if(status) status.textContent = 'Nations chargées: ' + nations.length;
    const btn = $('randomBtn'); if(btn) btn.disabled = false;
  }
}

function randomInt(max){ return Math.floor(Math.random()*max); }

function pick(arr){ return arr[randomInt(arr.length)]; }

// Weighted rank selection: very rare -> common
function randomRank(){
  // weights tuned to prefer V-VIII and legendary
  // ranks: 1..8 and '*'
  const weighted = [
    1, // very rare (1)
    2,2, // very rare (2)
    3,3,3, // rare
    4,4,4,4, // pas commun
    5,5,5,5,5, // commun
    6,6,6,6,6,6, // plus fort
    7,7,7,7,7,7, // plus fort
    8,8,8,8,8,8,8, // très commun
    '*','*','*','*','*','*','*','*' // légendaire très commun
  ];
  return pick(weighted);
}

function translateCategory(cat){
  const map = {
    'Destroyer': 'Destroyer',
    'Cruiser': 'Croiseur',
    'Battleship': 'Cuirassé',
    'Aircraft Carrier': 'Porte-avions'
  };
  return map[cat] || cat;
}

function suggestCategory(nation, allowCarrier, players){
  const base = ['Destroyer','Cruiser','Battleship'];
  const categories = [...base];
  if(allowCarrier && nation.carriers) categories.push('Aircraft Carrier');

  // If the nation defines explicit categories per rank, use that mapping.
  // The mapping keys are strings: '1'..'8' or '*'. Mapping values may be:
  //  - a string (single category)
  //  - an array: either [cat1, cat2] to explicitly assign both players,
  //    or an array used as a pool of choices.
  function applyMappingForRank(rank){
    if(!nation || !nation.categoryByRank) return null;
    const key = String(rank);
    const m = nation.categoryByRank[key];
    if(m === undefined) return null;
    // helper to check carrier availability
    const allowed = (cat) => !(cat === 'Aircraft Carrier' && (!allowCarrier || !nation.carriers));

    if(typeof m === 'string'){
      if(allowed(m)) return m;
      return null; // mapping targets carrier but carriers not allowed => fall back
    }
    if(Array.isArray(m)){
      // explicit two-slot assignment when exactly two strings are provided
      if(players === 2 && m.length === 2 && typeof m[0] === 'string' && typeof m[1] === 'string'){
        let a = m[0]; let b = m[1];
        // enforce carrier rules: if one of them is an Aircraft Carrier but carriers not allowed, replace it later
        if(!allowed(a)) a = null;
        if(!allowed(b)) b = null;
        // if both ended up as carriers and carriers are allowed, enforce max 1 carrier like original logic
        if(a === 'Aircraft Carrier' && b === 'Aircraft Carrier'){
          // prefer keeping first as carrier, replace second with fallback from categories
          const poolNoCarrier = categories.filter(c => c !== 'Aircraft Carrier');
          b = poolNoCarrier.length ? pick(poolNoCarrier) : pick(categories);
        }
        // if any slot became null because carriers not allowed, fill from pool
        if(a == null) a = pick(categories.filter(allowed));
        if(b == null) b = pick(categories.filter(allowed));
        return [a, b];
      }
      // otherwise treat array as a pool to pick from
      const pool = m.slice().filter(x => typeof x === 'string' && allowed(x));
      if(pool.length === 0) return null;
      if(players === 1){
        return pick(pool);
      }
      // players === 2: pick two, enforcing max 1 carrier between them
      const first = pick(pool);
      let second;
      if(first === 'Aircraft Carrier'){
        const poolNoCarrier = pool.filter(c => c !== 'Aircraft Carrier');
        second = poolNoCarrier.length ? pick(poolNoCarrier) : pick(pool);
      }else{
        second = pick(pool);
      }
      return [first, second];
    }
    return null;
  }

  // try mapping first; if it yields a valid category (or categories), use it
  // Note: rank will be provided by caller as number or '*'
  // The caller of suggestCategory passes only nation, allowCarrier and players —
  // to use mapping that depends on rank we need the rank value. We'll support
  // mapping only when caller passes a special temporary property on the nation
  // object called `_selectedRank` (set by onRandom) to keep calling convention simple.
  const rankForMapping = nation && nation._selectedRank !== undefined ? nation._selectedRank : null;
  if(rankForMapping !== null){
    const mapped = applyMappingForRank(rankForMapping);
    if(mapped) return Array.isArray(mapped) ? mapped.map(translateCategory) : translateCategory(mapped);
  }

  // create a weighted pool favoring larger ships slightly
  const pool = [];
  for(const c of categories){
    if(c==='Destroyer') pool.push(...Array(2).fill(c));
    if(c==='Cruiser') pool.push(...Array(3).fill(c));
    if(c==='Battleship') pool.push(...Array(4).fill(c));
    if(c==='Aircraft Carrier') pool.push(...Array(3).fill(c));
  }

  if(players===2){
    // Strict rule: max 1 Aircraft Carrier between the two players
    const first = pick(pool);
    let second;
    if(first === 'Aircraft Carrier'){
      // ensure second is NOT Aircraft Carrier by filtering pool
      const poolNoCarrier = pool.filter(c => c !== 'Aircraft Carrier');
      second = poolNoCarrier.length ? pick(poolNoCarrier) : pick(pool);
    }else{
      // first is not carrier; second may be carrier
      second = pick(pool);
      // if second is carrier, it's allowed (only one carrier)
    }
    return [translateCategory(first), translateCategory(second)];
  }

  const sel = pick(pool);
  return translateCategory(sel);
}

function applyResult({nation, rank, category}){
  $('nationName').textContent = nation.name || nation.id;
  $('rank').textContent = rank;
  const divider = $('typeDivider');
  if(Array.isArray(category)){
    $('category').textContent = category[0];
    $('category2').textContent = category[1];
    $('category2').classList.remove('hidden');
    // ensure second type column + divider visible when two categories
    const t2 = $('type2'); if(t2) t2.classList.remove('hidden');
    if(divider) divider.classList.remove('hidden');
  }else{
    $('category').textContent = category;
    $('category2').classList.add('hidden');
    // hide second column + divider when single category
    const t2 = $('type2'); if(t2) t2.classList.add('hidden');
    if(divider) divider.classList.add('hidden');
  }
  const img = $('flagImg');
  if(nation.flag) img.src = nation.flag;
  // show flag image when a result is present
  const flag = $('flagImg'); if(flag) flag.classList.remove('hidden');
}

// Ensure flag image falls back to placeholder if the file is missing or fails to load
function setupFlagImageHandlers(){
  const img = $('flagImg');
  if(!img) return;
  img.onerror = function(){
    // if we haven't tried the alternate extension yet, attempt it (png <-> svg)
    try{
      const attempted = img.dataset.attemptedFallback;
      if(!attempted){
        img.dataset.attemptedFallback = '1';
        const src = img.src || '';
        if(src.endsWith('.png')){
          img.src = src.replace(/\.png$/, '.svg');
          console.warn('Flag image missing, trying .svg alternative for', src);
          return;
        }else if(src.endsWith('.svg')){
          img.src = src.replace(/\.svg$/, '.png');
          console.warn('Flag image missing, trying .png alternative for', src);
          return;
        }
      }
    }catch(e){ /* ignore and fallback */ }
    console.warn('Flag image failed to load, falling back to placeholder:', img.src);
    img.src = 'assets/flags/placeholder.svg';
  };
  img.onload = function(){
    // keep subtle background look but ensure image is visible
    img.classList.add('object-cover');
  };
}

function resetResult(){
  $('nationName').textContent = '—';
  $('rank').textContent = '—';
  $('category').textContent = '—';
  const cat2 = $('category2');
  if(cat2){
    cat2.textContent = '—';
    // keep category2 visible only if the second slot container is visible
    const t2 = $('type2');
    if(t2 && !t2.classList.contains('hidden')){
      cat2.classList.remove('hidden');
    }else{
      cat2.classList.add('hidden');
    }
  }
  const img = $('flagImg');
  img.src = 'assets/flags/placeholder.svg';
  const divider = $('typeDivider');
  if(divider) divider.classList.add('hidden');
  // hide flag image on reset
  const flag = $('flagImg'); if(flag) flag.classList.add('hidden');
}

async function onRandom(){
  if(nations.length===0) await loadData();
  const allowCarrier = $('allowCarrier').classList.contains('bg-blue-600');
  const players = $('twoPlayer').classList.contains('bg-blue-600') ? 2 : 1;
  // quick guard: if still no nations, show an error and abort
  if(!Array.isArray(nations) || nations.length===0){
    alert('Aucune nation disponible — vérifiez la console ou recharger les données.');
    return;
  }
  const idx = randomInt(nations.length);
  const nation = nations[idx];
  const rank = randomRank();
  // expose the chosen rank temporarily on the nation object so suggestCategory
  // can consult per-rank mappings defined in the nation (categoryByRank)
  nation._selectedRank = rank;
  const category = suggestCategory(nation, allowCarrier, players);
  // cleanup temporary field
  delete nation._selectedRank;
  applyResult({nation, rank, category});
}

function setup(){
  $('randomBtn').addEventListener('click', onRandom);
  // reloadData removed (data embedded)
  function setPlayersMode(players){
    const one = $('onePlayer');
    const two = $('twoPlayer');
    const type2 = $('type2');
    const divider = $('typeDivider');
    // normalize classes: remove both color classes then add desired
    if(one){ one.classList.remove('bg-blue-600','bg-gray-700'); }
    if(two){ two.classList.remove('bg-blue-600','bg-gray-700'); }
    if(players===1){
      if(one) one.classList.add('bg-blue-600');
      if(two) two.classList.add('bg-gray-700');
      // hide second type
      if(type2) type2.classList.add('hidden');
      // hide labels
      const p1 = $('player1Label'), p2 = $('player2Label'); if(p1) p1.classList.add('hidden'); if(p2) p2.classList.add('hidden');
      // hide divider
      if(divider) divider.classList.add('hidden');
    }else{
      if(two) two.classList.add('bg-blue-600');
      if(one) one.classList.add('bg-gray-700');
      // show second type
      if(type2) type2.classList.remove('hidden');
      // show labels
      const p1 = $('player1Label'), p2 = $('player2Label'); if(p1) p1.classList.remove('hidden'); if(p2) p2.classList.remove('hidden');
      // show divider
      if(divider) divider.classList.remove('hidden');
    }
    // reset result whenever mode changes
    resetResult();
  }

  $('onePlayer').addEventListener('click', ()=> setPlayersMode(1));
  $('twoPlayer').addEventListener('click', ()=> setPlayersMode(2));

  // carrier toggle behaviour
  $('allowCarrier').addEventListener('click', ()=>{
    const el = $('allowCarrier');
    if(el.classList.contains('bg-blue-600')){
      el.classList.remove('bg-blue-600'); el.classList.add('bg-gray-700'); el.textContent='Porte-avions désactivé';
    }else{
      el.classList.remove('bg-gray-700'); el.classList.add('bg-blue-600'); el.textContent='Porte-avions activé';
    }
    // resetting result when carrier preference changes
    resetResult();
  });

  // initial state: set players mode to 2 (keeps classes consistent)
  setPlayersMode(2);
  // set carrier button default to disabled state
  const carrier = $('allowCarrier'); if(carrier){ carrier.classList.remove('bg-blue-600'); carrier.classList.add('bg-gray-700'); carrier.textContent='Porte-avions désactivé'; }
  // setup flag image fallback handlers
  setupFlagImageHandlers();
}

window.addEventListener('load', setup);
