// Minimal logic for WoWSL Randomizer
const DATA_PATH = 'data/nations.json';

let nations = [];

function $(id){ return document.getElementById(id); }

async function loadData(){
  try{
    const res = await fetch(DATA_PATH);
    nations = await res.json();
  }catch(e){
    // fallback: minimal placeholder
    nations = [
      { id:'usa', name:'USA', flag:'assets/flags/usa.svg', carriers:true },
      { id:'uk', name:'UK', flag:'assets/flags/uk.svg', carriers:false },
    ];
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
  $('nationId').textContent = nation.id;
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
}

function resetResult(){
  $('nationName').textContent = '—';
  $('nationId').textContent = '—';
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
}

async function onRandom(){
  if(nations.length===0) await loadData();
  const allowCarrier = $('allowCarrier').classList.contains('bg-blue-600');
  const players = $('twoPlayer').classList.contains('bg-blue-600') ? 2 : 1;
  const nation = pick(nations);
  const rank = randomRank();
  const category = suggestCategory(nation, allowCarrier, players);
  applyResult({nation, rank, category});
}

function setup(){
  $('randomBtn').addEventListener('click', onRandom);
  $('onePlayer').addEventListener('click', ()=>{
    $('onePlayer').classList.add('bg-blue-600');
    $('twoPlayer').classList.remove('bg-blue-600');
    // hide second type
    $('type2').classList.add('hidden');
    // hide player labels when single player
    $('player1Label').classList.add('hidden');
    $('player2Label').classList.add('hidden');
    // reset result to initial state
    resetResult();
    // ensure divider is hidden when single player
    const divider = $('typeDivider');
    if(divider) divider.classList.add('hidden');
  });
  $('twoPlayer').addEventListener('click', ()=>{
    $('twoPlayer').classList.add('bg-blue-600');
    $('onePlayer').classList.remove('bg-blue-600');
    // show second type
    $('type2').classList.remove('hidden');
    // show player labels when two players
    $('player1Label').classList.remove('hidden');
    $('player2Label').classList.remove('hidden');
    // reset result to initial state
    resetResult();
    // ensure divider is visible when two players
    const divider = $('typeDivider');
    if(divider) divider.classList.remove('hidden');
  });

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

  // initial state
  // initial state: default = deux joueurs, but porte-avions disabled
  $('twoPlayer').classList.add('bg-blue-600');
  $('type2').classList.remove('hidden');
  // show player labels initially (two players)
  $('player1Label').classList.remove('hidden');
  $('player2Label').classList.remove('hidden');
  // ensure divider visible initially
  const divider = $('typeDivider'); if(divider) divider.classList.remove('hidden');
  // set carrier button default to disabled state
  const carrier = $('allowCarrier'); if(carrier){ carrier.classList.remove('bg-blue-600'); carrier.classList.add('bg-gray-700'); carrier.textContent='Porte-avions désactivé'; }
}

window.addEventListener('load', setup);
