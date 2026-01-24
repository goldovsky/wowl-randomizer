// ============================================================
//                          DATA
//  Static definitions: nations, flags and category mappings
// ============================================================

const usa = {"id":"usa","name":"U.S.A.","flag":"assets/flags/usa.png","carriers":true, categoryByTier: {
    "Ⅰ": ["Destroyer","Cruiser"],
    "Ⅱ": ["Destroyer","Cruiser"],
    "Ⅲ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅳ": ["Destroyer","Cruiser","Battleship"],
    "Ⅴ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅵ": ["Destroyer","Cruiser","Battleship"],
    "Ⅶ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅷ": ["Destroyer","Cruiser","Battleship"],
    "⭐": ["Destroyer", "Cruiser","Battleship", "Aircraft Carrier"]
  }};

const japan = {"id":"japan","name":"Japan","flag":"assets/flags/japan.png","carriers":true, categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Destroyer","Cruiser"],
    "Ⅲ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅳ": ["Destroyer","Cruiser","Battleship"],
    "Ⅴ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅵ": ["Destroyer","Cruiser","Battleship"],
    "Ⅶ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅷ": ["Destroyer","Cruiser","Battleship"],
    "⭐": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"]
  }};
  
const ussr = {"id":"ussr","name":"U.S.S.R.","flag":"assets/flags/ussr.png","carriers":false, categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Destroyer","Cruiser"],
    "Ⅲ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅳ": ["Destroyer","Cruiser","Battleship"],
    "Ⅴ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅵ": ["Destroyer","Cruiser","Battleship"],
    "Ⅶ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅷ": ["Destroyer","Cruiser","Battleship"],
    "⭐": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"]
  }};

const germany = {"id":"germany","name":"Germany","flag":"assets/flags/germany.png","carriers":false, categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Destroyer","Cruiser"],
    "Ⅲ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅳ": ["Destroyer","Cruiser","Battleship"],
    "Ⅴ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅵ": ["Destroyer","Cruiser","Battleship"],
    "Ⅶ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅷ": ["Destroyer","Cruiser","Battleship"],
    "⭐": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"]
  }};

const uk = {"id":"uk","name":"U.K.","flag":"assets/flags/uk.png","carriers":true, categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Destroyer","Cruiser"],
    "Ⅲ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅳ": ["Destroyer","Cruiser","Battleship"],
    "Ⅴ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅵ": ["Destroyer","Cruiser","Battleship"],
    "Ⅶ": ["Destroyer","Cruiser","Battleship", "Aircraft Carrier"],
    "Ⅷ": ["Destroyer","Cruiser","Battleship"],
    "⭐": ["Destroyer","Cruiser","Battleship"]
  }};

const france = {"id":"france","name":"France","flag":"assets/flags/france.png","carriers":false, categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Destroyer","Cruiser"],
    "Ⅲ": ["Destroyer","Cruiser","Battleship"],
    "Ⅳ": ["Destroyer","Cruiser","Battleship"],
    "Ⅴ": ["Destroyer","Cruiser","Battleship"],
    "Ⅵ": ["Destroyer","Cruiser","Battleship"],
    "Ⅶ": ["Destroyer","Cruiser","Battleship"],
    "Ⅷ": ["Destroyer","Cruiser","Battleship"],
    "⭐": ["Destroyer","Cruiser","Battleship"]
  }};

const italy = {"id":"italy","name":"Italy","flag":"assets/flags/italy.png","carriers":false, categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Destroyer","Cruiser"],
    "Ⅲ": ["Destroyer","Cruiser","Battleship"],
    "Ⅳ": ["Destroyer","Cruiser","Battleship"],
    "Ⅴ": ["Destroyer","Cruiser","Battleship"],
    "Ⅵ": ["Destroyer","Cruiser","Battleship"],
    "Ⅶ": ["Destroyer","Cruiser","Battleship"],
    "Ⅷ": ["Destroyer","Cruiser","Battleship"],
    "⭐": ["Cruiser","Battleship"]
  }};

const spain = {"id":"spain","name":"Spain","flag":"assets/flags/spain.png","carriers":false,
  categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Cruiser"],
    "Ⅲ": ["Cruiser"],
    "Ⅳ": ["Cruiser"],
    "Ⅴ": ["Cruiser"],
    "Ⅵ": ["Cruiser"],
    "Ⅶ": ["Cruiser"],
    "Ⅷ": ["Cruiser"],
    "⭐": ["Cruiser"]
  }
};

const netherlands = {"id":"netherlands","name":"Netherlands","flag":"assets/flags/netherlands.png","carriers":false, categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Cruiser"],
    "Ⅲ": ["Cruiser"],
    "Ⅳ": ["Cruiser"],
    "Ⅴ": ["Cruiser"],
    "Ⅵ": ["Cruiser"],
    "Ⅶ": ["Cruiser"],
    "Ⅷ": ["Cruiser"],
    "⭐": ["Cruiser"]
  }};

const pan_america = {"id":"pan-america","name":"Pan-America","flag":"assets/flags/pan-america.png","carriers":false, categoryByTier: {
    "Ⅰ": [],
    "Ⅱ": [],
    "Ⅲ": [],
    "Ⅳ": ["Battleship"],
    "Ⅴ": ["Destroyer"],
    "Ⅵ": [],
    "Ⅶ": ["Battleship"],
    "Ⅷ": [],
    "⭐": []
  }};

const commonwealth = {"id":"commonwealth","name":"Commonwealth","flag":"assets/flags/commonwealth.png","carriers":true, categoryByTier: {
    "Ⅰ": [],
    "Ⅱ": ["Destroyer"],
    "Ⅲ": [],
    "Ⅳ": [],
    "Ⅴ": ["Cruiser"],
    "Ⅵ": ["Battleship"],
    "Ⅶ": ["Destroyer"],
    "Ⅷ": ["Cruiser"],
    "⭐": ["Cruiser"]
  }};

const pan_asia = {"id":"pan-asia","name":"Pan-Asia","flag":"assets/flags/pan-asia.png","carriers":false, categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Destroyer","Cruiser"],
    "Ⅲ": ["Destroyer","Cruiser"],
    "Ⅳ": ["Destroyer","Cruiser"],
    "Ⅴ": ["Destroyer","Cruiser"],
    "Ⅵ": ["Destroyer","Cruiser"],
    "Ⅶ": ["Destroyer","Cruiser"],
    "Ⅷ": ["Destroyer","Cruiser"],
    "⭐": ["Cruiser"]
  }};

const europe = {"id":"europe","name":"Europe","flag":"assets/flags/europe.png","carriers":false,
  categoryByTier: {
    "Ⅰ": ["Cruiser"],
    "Ⅱ": ["Destroyer"],
    "Ⅲ": ["Destroyer"],
    "Ⅳ": ["Destroyer","Battleship"],
    "Ⅴ": ["Destroyer"],
    "Ⅵ": ["Destroyer","Battleship"],
    "Ⅶ": ["Destroyer","Cruiser"],
    "Ⅷ": ["Destroyer","Battleship"],
    "⭐": ["Destroyer"]
  }
};

const nations = [
  usa,
  japan,
  ussr,
  germany,
  uk,
  commonwealth,
  france,
  italy,
  spain,
  netherlands,
  europe,
  pan_america,
  pan_asia,
];

// ------------------------------------------------------------
//                          UTILITIES
//  Small helper functions used across the app
// ------------------------------------------------------------

function $(id){ return document.getElementById(id); }

function randomInt(max){ return Math.floor(Math.random()*max); }

function pick(arr){ return arr[randomInt(arr.length)]; }

// Weighted tier selection: very rare -> common
function randomTier(){
  // weights tuned to prefer V-VIII and legendary
  // tiers: Ⅰ..Ⅷ and '⭐'
  const weighted = [
    'Ⅰ', // very rare (Ⅰ)
    'Ⅱ','Ⅱ', // very rare (Ⅱ)
    'Ⅲ','Ⅲ','Ⅲ', // rare
    'Ⅳ','Ⅳ','Ⅳ','Ⅳ', // pas commun
    'Ⅴ','Ⅴ','Ⅴ','Ⅴ','Ⅴ', // commun
    'Ⅵ','Ⅵ','Ⅵ','Ⅵ','Ⅵ','Ⅵ', // plus fort
    'Ⅶ','Ⅶ','Ⅶ','Ⅶ','Ⅶ','Ⅶ', // plus fort
    'Ⅷ','Ⅷ','Ⅷ','Ⅷ','Ⅷ','Ⅷ','Ⅷ', // très commun
    '⭐','⭐','⭐','⭐','⭐','⭐','⭐','⭐' // légendaire très commun
  ];
  return pick(weighted);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       APPLICATION CORE
//  Main app flow, category suggestion logic and UI glue
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function suggestCategory(nation, allowCarrier, players){
  const base = ['Destroyer','Cruiser','Battleship'];
  const categories = [...base];
  if(allowCarrier && nation.carriers) categories.push('Aircraft Carrier');

  // If the nation defines explicit categories per tier, use that mapping.
  // The mapping keys are strings: '1'..'8' or '⭐'. Mapping values may be:
  //  - a string (single category)
  //  - an array: either [cat1, cat2] to explicitly assign both players,
  //    or an array used as a pool of choices.
  function applyMappingForTier(tier){
    if(!nation || !nation.categoryByTier) return null;
    const key = String(tier);
    const m = nation.categoryByTier[key];
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
  // Note: tier will be provided by caller as number or '⭐'
  // The caller of suggestCategory passes only nation, allowCarrier and players —
  // to use mapping that depends on tier we need the tier value. We'll support
  // mapping only when caller passes a special temporary property on the nation
  // object called `_selectedTier` (set by onRandom) to keep calling convention simple.
  const tierForMapping = nation && nation._selectedTier !== undefined ? nation._selectedTier : null;
    if(tierForMapping !== null){
    const mapped = applyMappingForTier(tierForMapping);
    if(mapped) return mapped;
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
    return [first, second];
  }

  const sel = pick(pool);
  return sel;
}

function applyResult({nation, tier, category}){
  $('nationName').textContent = nation.name || nation.id;
  $('tier').textContent = tier;
  const divider = $('typeDivider');
  const catImg = $('categoryImg');
  const catImg2 = $('categoryImg2');

    function setCatImg(el, catDisplayed){
      if(!el) return;
      const path = 'assets/categories/' + encodeURIComponent(catDisplayed) + '.png';
      el.src = path;
      el.classList.remove('hidden');
      if(el.dataset) el.dataset.attemptedFallback = '';
    }

  if(Array.isArray(category)){
    $('category').textContent = category[0];
    $('category2').textContent = category[1];
    $('category2').classList.remove('hidden');
    // ensure second type column + divider visible when two categories
    const t2 = $('type2'); if(t2) t2.classList.remove('hidden');
    if(divider) divider.classList.remove('hidden');
    if(catImg) setCatImg(catImg, category[0]);
    if(catImg2) setCatImg(catImg2, category[1]);
  }else{
    $('category').textContent = category;
    $('category2').classList.add('hidden');
    // hide second column + divider when single category
    const t2 = $('type2'); if(t2) t2.classList.add('hidden');
    if(divider) divider.classList.add('hidden');
    if(catImg) setCatImg(catImg, category);
    if(catImg2){ catImg2.classList.add('hidden'); catImg2.src = ''; }
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

function setupCategoryImageHandlers(){
  const imgs = [ $('categoryImg'), $('categoryImg2') ].filter(Boolean);
  imgs.forEach(img => {
    img.onerror = function(){
      try{
        const attempted = img.dataset && img.dataset.attemptedFallback;
        if(!attempted){
          if(img.dataset) img.dataset.attemptedFallback = '1';
          const src = img.src || '';
          if(src.endsWith('.png')){
            img.src = src.replace(/\.png$/, '.svg');
            console.warn('Category image missing, trying .svg alternative for', src);
            return;
          }else if(src.endsWith('.svg')){
            img.src = src.replace(/\.svg$/, '.png');
            console.warn('Category image missing, trying .png alternative for', src);
            return;
          }
        }
      }catch(e){}
      img.classList.add('hidden');
      img.src = '';
    };
    img.onload = function(){
      img.classList.remove('hidden');
      img.classList.add('object-contain');
    };
  });
}

function resetResult(){
  $('nationName').textContent = '—';
  $('tier').textContent = '—';
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
  const cimg = $('categoryImg'); if(cimg){ cimg.src = ''; cimg.classList.add('hidden'); }
  const cimg2 = $('categoryImg2'); if(cimg2){ cimg2.src = ''; cimg2.classList.add('hidden'); }
}

async function onRandom(){
  const allowCarrier = $('allowCarrier').classList.contains('bg-blue-600');
  const players = $('twoPlayer').classList.contains('bg-blue-600') ? 2 : 1;
  // quick guard: if still no nations, show an error and abort
  if(!Array.isArray(nations) || nations.length===0){
    alert('Aucune nation disponible — vérifiez la console ou recharger les données.');
    return;
  }
  const idx = randomInt(nations.length);
  const nation = nations[idx];
  const tier = randomTier();
  // expose the chosen tier temporarily on the nation object so suggestCategory
  // can consult per-tier mappings defined in the nation (categoryByTier)
  nation._selectedTier = tier;
  const category = suggestCategory(nation, allowCarrier, players);
  // cleanup temporary field
  delete nation._selectedTier;
  // pass chosen tier into applyResult using the new param name
  applyResult({nation, tier, category});
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
      el.classList.remove('bg-blue-600'); el.classList.add('bg-gray-700'); el.textContent='Aircraft-Carrier disabled';
    }else{
      el.classList.remove('bg-gray-700'); el.classList.add('bg-blue-600'); el.textContent='Aircraft-Carrier enabled';
    }
    // resetting result when carrier preference changes
    resetResult();
  });

  // initial state: set players mode to 2 (keeps classes consistent)
  setPlayersMode(2);
  // set carrier button default to disabled state
  const carrier = $('allowCarrier'); if(carrier){ carrier.classList.remove('bg-blue-600'); carrier.classList.add('bg-gray-700'); carrier.textContent='Aircraft-Carrier disabled'; }
  // setup flag image fallback handlers
  setupFlagImageHandlers();
  // setup category images handlers
  setupCategoryImageHandlers();
}

window.addEventListener('load', setup);
