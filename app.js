// ============================================================
//                          DATA
//  Static definitions: nations, flags and category mappings
// ============================================================

const nations = [
  // USA 
  {
    id: "usa",
    name: "U.S.A.",
    flag: "assets/flags/usa.png",
    carriers: true,
    team: "allies",
    categoryByTier: {
      "Ⅰ": ["Destroyer", "Cruiser"],
      "Ⅱ": ["Destroyer", "Cruiser"],
      "Ⅲ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅳ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅴ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅵ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅶ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅷ": ["Destroyer", "Cruiser", "Battleship"],
      "⭐": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"]
    }
  },
  // JAPAN 
  {
    id: "japan",
    name: "Japan",
    flag: "assets/flags/japan.png",
    carriers: true,
    team: "axis",
    categoryByTier: {
      "Ⅰ": ["Cruiser"],
      "Ⅱ": ["Destroyer", "Cruiser"],
      "Ⅲ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅳ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅴ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅵ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅶ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅷ": ["Destroyer", "Cruiser", "Battleship"],
      "⭐": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"]
    }
  },
  // USSR 
  {
    id: "ussr",
    name: "U.S.S.R.",
    flag: "assets/flags/ussr.png",
    carriers: false,
    team: "allies",
    categoryByTier: {
      "Ⅰ": ["Cruiser"],
      "Ⅱ": ["Destroyer", "Cruiser"],
      "Ⅲ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅳ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅴ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅵ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅶ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅷ": ["Destroyer", "Cruiser", "Battleship"],
      "⭐": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"]
    }
  },
  // GERMANY
  {
    id: "germany",
    name: "Germany",
    flag: "assets/flags/germany.png",
    carriers: false,
    team: "axis",
    categoryByTier: {
      "Ⅰ": ["Cruiser"],
      "Ⅱ": ["Destroyer", "Cruiser"],
      "Ⅲ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅳ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅴ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅵ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅶ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅷ": ["Destroyer", "Cruiser", "Battleship"],
      "⭐": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"]
    }
  },
  // UK
  {
    id: "uk",
    name: "U.K.",
    flag: "assets/flags/uk.png",
    carriers: true,
    team: "allies",
    categoryByTier: {
      "Ⅰ": ["Cruiser"],
      "Ⅱ": ["Destroyer", "Cruiser"],
      "Ⅲ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅳ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅴ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅵ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅶ": ["Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"],
      "Ⅷ": ["Destroyer", "Cruiser", "Battleship"],
      "⭐": ["Destroyer", "Cruiser", "Battleship"]
    }
  },
  // FRANCE
  {
    id: "france",
    name: "France",
    flag: "assets/flags/france.png",
    carriers: false,
    team: "allies",
    categoryByTier: {
      "Ⅰ": ["Cruiser"],
      "Ⅱ": ["Destroyer", "Cruiser"],
      "Ⅲ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅳ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅴ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅵ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅶ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅷ": ["Destroyer", "Cruiser", "Battleship"],
      "⭐": ["Destroyer", "Cruiser", "Battleship"]
    }
  },
  // ITALY
  {
    id: "italy",
    name: "Italy",
    flag: "assets/flags/italy.png",
    carriers: false,
    team: "axis",
    categoryByTier: {
      "Ⅰ": ["Cruiser"],
      "Ⅱ": ["Destroyer", "Cruiser"],
      "Ⅲ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅳ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅴ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅵ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅶ": ["Destroyer", "Cruiser", "Battleship"],
      "Ⅷ": ["Destroyer", "Cruiser", "Battleship"],
      "⭐": ["Cruiser", "Battleship"]
    }
  },
  // SPAIN
  {
    id: "spain",
    name: "Spain",
    flag: "assets/flags/spain.png",
    carriers: false,
    team: "allies",
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
  },
  // NETHERLANDS
  {
    id: "netherlands",
    name: "Netherlands",
    flag: "assets/flags/netherlands.png",
    carriers: false,
    team: "allies",
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
  },
  // PAN_AMERICA
  {
    id: "pan-america",
    name: "Pan-America",
    flag: "assets/flags/pan-america.png",
    carriers: false,
    team: "allies",
    categoryByTier: {
      "Ⅰ": [],
      "Ⅱ": [],
      "Ⅲ": [],
      "Ⅳ": ["Battleship"],
      "Ⅴ": ["Destroyer"],
      "Ⅵ": [],
      "Ⅶ": ["Battleship"],
      "Ⅷ": [],
      "⭐": []
    }
  },
  // COMMONWEALTH
  {
    id: "commonwealth",
    name: "Commonwealth",
    flag: "assets/flags/commonwealth.png",
    carriers: true,
    team: "allies",
    categoryByTier: {
      "Ⅰ": [],
      "Ⅱ": ["Destroyer"],
      "Ⅲ": [],
      "Ⅳ": [],
      "Ⅴ": ["Cruiser"],
      "Ⅵ": ["Battleship"],
      "Ⅶ": ["Destroyer"],
      "Ⅷ": ["Cruiser"],
      "⭐": ["Cruiser"]
    }
  },
  // PAN_ASIA
  {
    id: "pan-asia",
    name: "Pan-Asia",
    flag: "assets/flags/pan-asia.png",
    carriers: false,
    team: "allies",
    categoryByTier: {
      "Ⅰ": ["Cruiser"],
      "Ⅱ": ["Destroyer", "Cruiser"],
      "Ⅲ": ["Destroyer", "Cruiser"],
      "Ⅳ": ["Destroyer", "Cruiser"],
      "Ⅴ": ["Destroyer", "Cruiser"],
      "Ⅵ": ["Destroyer", "Cruiser"],
      "Ⅶ": ["Destroyer", "Cruiser"],
      "Ⅷ": ["Destroyer", "Cruiser"],
      "⭐": ["Cruiser"]
    }
  },
  // EUROPE
  {
    id: "europe",
    name: "Europe",
    flag: "assets/flags/europe.png",
    carriers: false,
    team: "allies",
    categoryByTier: {
      "Ⅰ": ["Cruiser"],
      "Ⅱ": ["Destroyer"],
      "Ⅲ": ["Destroyer"],
      "Ⅳ": ["Destroyer", "Battleship"],
      "Ⅴ": ["Destroyer"],
      "Ⅵ": ["Destroyer", "Battleship"],
      "Ⅶ": ["Destroyer", "Cruiser"],
      "Ⅷ": ["Destroyer", "Battleship"],
      "⭐": ["Destroyer"]
    }
  },
];

// canonical tier list used throughout the app
const TIERS = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ', 'Ⅷ', '⭐'];

// ------------------------------------------------------------
//                          UTILITIES
//  Small helper functions used across the app
// ------------------------------------------------------------

function $(id) { return document.getElementById(id); }

function randomInt(max) { return Math.floor(Math.random() * max); }

function pick(arr) { return arr[randomInt(arr.length)]; }

// Weighted tier selection: very rare -> common
function randomTier() {
  // uniform random tier selection across all tiers (no weighting)
  return pick(TIERS);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       APPLICATION CORE
//  Main app flow, category suggestion logic and UI glue
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function suggestCategory(nation, allowCarrier, players) {
  const base = ['Destroyer', 'Cruiser', 'Battleship'];
  const categories = [...base];
  if (allowCarrier && nation.carriers) categories.push('Aircraft Carrier');

  // If the nation defines explicit categories per tier, use that mapping.
  // The mapping keys are strings: '1'..'8' or '⭐'. Mapping values may be:
  //  - a string (single category)
  //  - an array: either [cat1, cat2] to explicitly assign both players,
  //    or an array used as a pool of choices.
  function applyMappingForTier(tier) {
    if (!nation || !nation.categoryByTier) return null;
    const key = String(tier);
    const m = nation.categoryByTier[key];
    if (m === undefined) return null;
    // helper to check carrier availability
    const allowed = (cat) => !(cat === 'Aircraft Carrier' && (!allowCarrier || !nation.carriers));

    if (typeof m === 'string') {
      if (allowed(m)) return m;
      return null; // mapping targets carrier but carriers not allowed => fall back
    }
    if (Array.isArray(m)) {
      // explicit three-slot assignment when exactly three strings are provided
      if (players === 3 && m.length === 3 && typeof m[0] === 'string' && typeof m[1] === 'string' && typeof m[2] === 'string') {
        let a = m[0]; let b = m[1]; let c = m[2];
        if (!allowed(a)) a = null;
        if (!allowed(b)) b = null;
        if (!allowed(c)) c = null;
        // if more than one carrier present, keep the first carrier and replace others
        const slots = [a, b, c];
        const carrierIndices = slots.map((s, i) => s === 'Aircraft Carrier' ? i : -1).filter(i => i >= 0);
        if (carrierIndices.length > 1) {
          // keep first carrier, replace others from fallback pool without carriers
          const poolNoCarrier = categories.filter(x => x !== 'Aircraft Carrier').filter(allowed);
          for (let i = 1; i < carrierIndices.length; i++) {
            const idx = carrierIndices[i];
            slots[idx] = poolNoCarrier.length ? pick(poolNoCarrier) : pick(categories.filter(allowed));
          }
        }
        // fill any null slots from allowed pool
        for (let i = 0; i < 3; i++) if (slots[i] == null) slots[i] = pick(categories.filter(allowed));
        return slots;
      }
      // explicit two-slot assignment when exactly two strings are provided
      if (players === 2 && m.length === 2 && typeof m[0] === 'string' && typeof m[1] === 'string') {
        let a = m[0]; let b = m[1];
        // enforce carrier rules: if one of them is an Aircraft Carrier but carriers not allowed, replace it later
        if (!allowed(a)) a = null;
        if (!allowed(b)) b = null;
        // if both ended up as carriers and carriers are allowed, enforce max 1 carrier
        if (a === 'Aircraft Carrier' && b === 'Aircraft Carrier') {
          const poolNoCarrier = categories.filter(c => c !== 'Aircraft Carrier');
          b = poolNoCarrier.length ? pick(poolNoCarrier) : pick(categories);
        }
        if (a == null) a = pick(categories.filter(allowed));
        if (b == null) b = pick(categories.filter(allowed));
        return [a, b];
      }
      // otherwise treat array as a pool to pick from
      const pool = m.slice().filter(x => typeof x === 'string' && allowed(x));
      if (pool.length === 0) return null;
      if (players === 1) {
        return pick(pool);
      }
      if (players === 2) {
        // players === 2: pick two, enforcing max 1 carrier between them
        const first = pick(pool);
        let second;
        if (first === 'Aircraft Carrier') {
          const poolNoCarrier = pool.filter(c => c !== 'Aircraft Carrier');
          second = poolNoCarrier.length ? pick(poolNoCarrier) : pick(pool);
        } else {
          second = pick(pool);
        }
        return [first, second];
      }
      // players === 3: pick three, enforcing max 1 carrier among them
      const pickPool = pool.slice();
      const result = [];
      let carrierChosen = false;
      for (let i = 0; i < 3; i++) {
        let candidatePool = pickPool;
        if (carrierChosen) {
          candidatePool = pickPool.filter(c => c !== 'Aircraft Carrier');
        }
        if (candidatePool.length === 0) candidatePool = pickPool;
        const sel = pick(candidatePool);
        result.push(sel);
        if (sel === 'Aircraft Carrier') carrierChosen = true;
      }
      return result;
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
  if (tierForMapping !== null) {
    const mapped = applyMappingForTier(tierForMapping);
    if (mapped) return mapped;
  }

  // create a weighted pool favoring larger ships slightly
  const pool = [];
  for (const c of categories) {
    if (c === 'Destroyer') pool.push(...Array(2).fill(c));
    if (c === 'Cruiser') pool.push(...Array(3).fill(c));
    if (c === 'Battleship') pool.push(...Array(4).fill(c));
    if (c === 'Aircraft Carrier') pool.push(...Array(3).fill(c));
  }

  if (players === 2) {
    // Strict rule: max 1 Aircraft Carrier between the two players
    const first = pick(pool);
    let second;
    if (first === 'Aircraft Carrier') {
      // ensure second is NOT Aircraft Carrier by filtering pool
      const poolNoCarrier = pool.filter(c => c !== 'Aircraft Carrier');
      second = poolNoCarrier.length ? pick(poolNoCarrier) : pick(pool);
    } else {
      // first is not carrier; second may be carrier
      second = pick(pool);
      // if second is carrier, it's allowed (only one carrier)
    }
    return [first, second];
  }

  const sel = pick(pool);
  return sel;
}

function applyResult({ nation, tier, category, players = 1 }) {
  // set tier (now displayed on left) and per-player nation names
  // set tier label and result positions
  const tierLabelEl = $('tierLabel'); if (tierLabelEl) tierLabelEl.textContent = 'Tier';
  $('tier').textContent = tier;
  const _n1 = $('nationName1'); if (_n1) _n1.textContent = nation.name || nation.id;
  // ensure other nation name slots are present when used
  const _n2 = $('nationName2'); if (_n2) _n2.textContent = '—';
  const _n3 = $('nationName3'); if (_n3) _n3.textContent = '—';
  const divider = $('typeDivider');
  const divider2 = $('typeDivider2');
  const catImg = $('categoryImg');
  const catImg2 = $('categoryImg2');
  const catImg3 = $('categoryImg3');

  function setCatImg(el, catDisplayed) {
    if (!el) return;
    const path = 'assets/categories/' + encodeURIComponent(catDisplayed) + '.png';
    el.src = path;
    el?.classList.remove('hidden');
    if (el.dataset) el.dataset.attemptedFallback = '';
  }

  function formatLabel(cat) {
    if (!cat) return '—';
    // when in 3-player mode abbreviate long "Aircraft Carrier" label to avoid wrapping
    if (players === 3 && cat === 'Aircraft Carrier') return 'A. Carrier';
    return cat;
  }

  if (Array.isArray(category)) {
    // support arrays of length 2 or 3
    const len = category.length;
    $('category').textContent = formatLabel(category[0]) || '—';
    if (len >= 2) {
      $('category2').textContent = formatLabel(category[1]) || '—';
      $('category2')?.classList.remove('hidden');
      $('type2')?.classList.remove('hidden');
      if (catImg2) setCatImg(catImg2, category[1]);
    } else {
      $('category2')?.classList.add('hidden');
      $('type2')?.classList.add('hidden');
      if (catImg2) { catImg2?.classList.add('hidden'); catImg2.src = ''; }
    }
    if (len >= 3) {
      $('category3').textContent = formatLabel(category[2]) || '—';
      $('category3')?.classList.remove('hidden');
      $('type3')?.classList.remove('hidden');
      if (catImg3) setCatImg(catImg3, category[2]);
    } else {
      $('category3')?.classList.add('hidden');
      $('type3')?.classList.add('hidden');
      if (catImg3) { catImg3?.classList.add('hidden'); catImg3.src = ''; }
    }
    // set first category image
    if (catImg) setCatImg(catImg, category[0]);
  } else {
    $('category').textContent = formatLabel(category);
    $('category2')?.classList.add('hidden');
    $('category3')?.classList.add('hidden');
    // hide second column + divider when single category
    $('type2')?.classList.add('hidden');
    if (divider) divider?.classList.add('hidden');
    if (catImg) setCatImg(catImg, category);
    if (catImg2) { catImg2?.classList.add('hidden'); catImg2.src = ''; }
    // hide third column + divider when single category
    $('type3')?.classList.add('hidden');
    if (divider2) divider2?.classList.add('hidden');
    if (catImg3) { catImg3?.classList.add('hidden'); catImg3.src = ''; }
  }
  // set flag for player 1; other players will be set when they exist
  const img1 = $('flagImg1'); if (img1 && nation.flag) { img1.src = nation.flag; img1.classList.remove('hidden'); img1.hidden = false; }
}

// Ensure flag image falls back to placeholder if the file is missing or fails to load
function setupFlagImageHandlers() {
  // flag handlers: update for per-player flag elements (flagImg1/2/3)
  const imgs = [$('flagImg1'), $('flagImg2'), $('flagImg3')].filter(Boolean);
  imgs.forEach(img => {
    img.onerror = function () {
      // if we haven't tried the alternate extension yet, attempt it (png <-> svg)
      try {
        const attempted = img.dataset.attemptedFallback;
        if (!attempted) {
          img.dataset.attemptedFallback = '1';
          const src = img.src || '';
          if (src.endsWith('.png')) {
            img.src = src.replace(/\.png$/, '.svg');
            console.warn('Flag image missing, trying .svg alternative for', src);
            return;
          } else if (src.endsWith('.svg')) {
            img.src = src.replace(/\.svg$/, '.png');
            console.warn('Flag image missing, trying .png alternative for', src);
            return;
          }
        }
      } catch (e) { /* ignore and fallback */ }
      console.warn('Flag image failed to load, falling back to placeholder:', img.src);
      img.src = 'assets/flags/placeholder.svg';
    };
    img.onload = function () {
      // keep subtle background look but ensure image is visible
      img?.classList.add('object-cover');
      img?.classList.remove('hidden');
    };
  });
}

function setupCategoryImageHandlers() {
  const imgs = [$('categoryImg'), $('categoryImg2'), $('categoryImg3')].filter(Boolean);
  imgs.forEach(img => {
    img.onerror = function () {
      try {
        const attempted = img.dataset && img.dataset.attemptedFallback;
        if (!attempted) {
          if (img.dataset) img.dataset.attemptedFallback = '1';
          const src = img.src || '';
          if (src.endsWith('.png')) {
            img.src = src.replace(/\.png$/, '.svg');
            console.warn('Category image missing, trying .svg alternative for', src);
            return;
          } else if (src.endsWith('.svg')) {
            img.src = src.replace(/\.svg$/, '.png');
            console.warn('Category image missing, trying .png alternative for', src);
            return;
          }
        }
      } catch (e) { }
      img?.classList.add('hidden');
      img.src = '';
    };
    img.onload = function () {
      img?.classList.remove('hidden');
      img?.classList.add('object-contain');
    };
  });
}

function resetResult() {
  const _r1 = $('nationName1'); if (_r1) _r1.textContent = '—';
  const _r2 = $('nationName2'); if (_r2) _r2.textContent = '—';
  const _r3 = $('nationName3'); if (_r3) _r3.textContent = '—';
  // when no result: hide flags, categories and tier — only show the single dash per player
  $('tier').textContent = '—';
  $('category').textContent = '';

  // hide secondary category displays when no result
  const cat2 = $('category2'); if (cat2) { cat2.textContent = ''; cat2?.classList.add('hidden'); }
  const cat3 = $('category3'); if (cat3) { cat3.textContent = ''; cat3?.classList.add('hidden'); }

  // reset per-player flags: hide flags (no placeholder) when no result
  const img1 = $('flagImg1'); if (img1) { img1.src = 'assets/flags/placeholder.svg'; img1.classList.add('hidden'); img1.setAttribute('hidden', ''); }
  const img2 = $('flagImg2'); if (img2) { img2.src = 'assets/flags/placeholder.svg'; img2.classList.add('hidden'); img2.setAttribute('hidden', ''); }
  const img3 = $('flagImg3'); if (img3) { img3.src = 'assets/flags/placeholder.svg'; img3.classList.add('hidden'); img3.setAttribute('hidden', ''); }
  // separators removed: no-op (kept for compatibility)
  // hide legacy flag image on reset (no longer used)
  $('flagImg')?.classList.add('hidden');
  const cimg = $('categoryImg'); if (cimg) { cimg.src = ''; cimg?.classList.add('hidden'); }
  const cimg2 = $('categoryImg2'); if (cimg2) { cimg2.src = ''; cimg2?.classList.add('hidden'); }
  const cimg3 = $('categoryImg3'); if (cimg3) { cimg3.src = ''; cimg3?.classList.add('hidden'); }
}

async function onRandom() {
  const allowCarrier = $('allowCarrier')?.classList.contains('bg-blue-600');
  // tier min/max filters (defaults handled in DOM). We'll pick tier within bounds
  const minTierEl = $('minTier');
  const maxTierEl = $('maxTier');

  // detect selected players mode: prefer dataset.selected, then visual classes for backward compatibility
  let players = 1;
  const threeEl = $('threePlayer');
  const twoEl = $('twoPlayer');
  const oneEl = $('onePlayer');
  if (threeEl && threeEl.dataset && threeEl.dataset.selected === '1') players = 3;
  else if (twoEl && twoEl.dataset && twoEl.dataset.selected === '1') players = 2;
  else if (oneEl && oneEl.dataset && oneEl.dataset.selected === '1') players = 1;
  else {
    // fallback to inspecting classes (support both bg-blue-600 and bg-blue-700)
    const isBlue = (el) => el && (el.classList.contains('bg-blue-600') || el.classList.contains('bg-blue-700'));
    if (isBlue(threeEl)) players = 3;
    else if (isBlue(twoEl)) players = 2;
  }

  const useSameTeam = $('axisAlliesToggle')?.classList.contains('bg-blue-600');
  const idx = randomInt(nations.length);
  const nation = nations[idx];
  // If Axis/Allies option is enabled, pick player 1's nation at random then
  // constrain other players to the same team. Nations are annotated in
  // the `team` property which we'll define below. If not enabled, fall back
  // to previous behaviour (random independent nations).
  // choose tier while respecting min/max selectors. default to randomTier() if selectors not present
  let tier;
  if (minTierEl && maxTierEl) {
    const minVal = minTierEl.value || 'Ⅳ';
    const maxVal = maxTierEl.value || '⭐';
    const minIdx = TIERS.indexOf(minVal);
    const maxIdx = TIERS.indexOf(maxVal);
    if (minIdx >= 0 && maxIdx >= 0 && minIdx <= maxIdx) {
      tier = TIERS[minIdx + randomInt(maxIdx - minIdx + 1)];
    } else {
      tier = randomTier();
    }
  } else {
    tier = randomTier();
  }
  // expose the chosen tier temporarily on the nation object so suggestCategory
  // can consult per-tier mappings defined in the nation (categoryByTier)
  // We'll compute nations selected for each player depending on Axis/Allies option.
  // nationsSelected[0] is the already chosen `nation` for player 1.
  const nationsSelected = [nation];
  if (useSameTeam && players > 1) {
    const team = nation.team || 'allies';
    const pool = nations.filter(n => (n.team || 'allies') === team);
    for (let i = 1; i < players; i++) nationsSelected.push(pick(pool));
  } else {
    // independent nations per player (random for each), allow repeats
    for (let i = 1; i < players; i++) nationsSelected.push(nations[randomInt(nations.length)]);
  }

  // compute categories per selected nation. Use per-player context (players=1)
  // so mappings don't try to emit multi-slot arrays for a single nation.
  const categoriesPerPlayer = [];
  for (const n of nationsSelected) {
    // expose chosen tier temporarily on each nation so mapping can use it
    n._selectedTier = tier;
    categoriesPerPlayer.push(suggestCategory(n, allowCarrier, 1));
  }
  // cleanup temporary field
  for (const n of nationsSelected) delete n._selectedTier;

  // apply result using player1 as primary nation and pass categories array
  const categoryToShow = players > 1 ? categoriesPerPlayer : categoriesPerPlayer[0];
  applyResult({ nation: nationsSelected[0], tier, category: categoryToShow, players });

  // set each player's nation name and flag
  for (let i = 0; i < nationsSelected.length; i++) {
    const slot = i + 1;
    const nameEl = $('nationName' + slot);
    const flagEl = $('flagImg' + slot);
    const n = nationsSelected[i];
    if (nameEl) nameEl.textContent = n.name || n.id;
    if (flagEl) {
      if (n.flag) { flagEl.src = n.flag; flagEl.classList.remove('hidden'); flagEl.removeAttribute('hidden'); }
      else { flagEl.src = 'assets/flags/placeholder.svg'; flagEl.classList.remove('hidden'); flagEl.removeAttribute('hidden'); }
    }
  }
}

function setup() {
  $('randomBtn').addEventListener('click', onRandom);
  // reloadData removed (data embedded)
  function setPlayersMode(players) {
    const one = $('onePlayer');
    const two = $('twoPlayer');
    const three = $('threePlayer');
    const type2 = $('type2');
    const divider = $('typeDivider');

    // normalize classes: remove known selection/unselected color classes
    one?.classList.remove('bg-blue-600', 'bg-blue-700', 'bg-gray-600', 'bg-gray-700');
    two?.classList.remove('bg-blue-600', 'bg-blue-700', 'bg-gray-600', 'bg-gray-700');
    three?.classList.remove('bg-blue-600', 'bg-blue-700', 'bg-gray-600', 'bg-gray-700');

    // apply a consistent class scheme: selected => bg-blue-600, unselected => bg-gray-700
    const setBtn = (el, sel) => {
      if (!el) return;
      if (sel) el.classList.add('bg-blue-600');
      else el.classList.add('bg-gray-700');
    };

    setBtn(one, players === 1);
    setBtn(two, players === 2);
    setBtn(three, players === 3);

    // show/hide columns and labels according to players
    if (players === 1) {
      type2?.classList.add('hidden');
      $('type3')?.classList.add('hidden');
      // show Player I label even in single-player mode
      $('player1Label')?.classList.remove('hidden');
      $('player2Label')?.classList.add('hidden');
      $('player3Label')?.classList.add('hidden');
      divider?.classList.add('hidden');
      const divider2 = $('typeDivider2'); if (divider2) divider2?.classList.add('hidden');
    } else if (players === 2) {
      type2?.classList.remove('hidden');
      $('type3')?.classList.add('hidden');
      $('player1Label')?.classList.remove('hidden');
      $('player2Label')?.classList.remove('hidden');
      $('player3Label')?.classList.add('hidden');
      divider?.classList.remove('hidden');
      const divider2 = $('typeDivider2'); if (divider2) divider2?.classList.add('hidden');
    } else { // 3
      type2?.classList.remove('hidden');
      $('type3')?.classList.remove('hidden');
      $('player1Label')?.classList.remove('hidden');
      $('player2Label')?.classList.remove('hidden');
      $('player3Label')?.classList.remove('hidden');
      divider?.classList.remove('hidden');
      const divider2 = $('typeDivider2'); if (divider2) divider2?.classList.remove('hidden');
    }

    // set dataset / aria state so selection detection is robust (don't rely only on Tailwind classes)
    [one, two, three].forEach((el, i) => {
      if (!el) return;
      if (players === i + 1) { el.dataset.selected = '1'; el.setAttribute('aria-pressed', 'true'); }
      else { delete el.dataset.selected; el.setAttribute('aria-pressed', 'false'); }
    });

    // close options submenu when player mode changes
    try {
      const submenu = $('submenu');
      const submenuToggle = $('submenuToggle');
      if (submenu && submenu.classList.contains('open')) {
        submenu.classList.remove('open');
        if (submenuToggle) {
          submenuToggle.classList.remove('bg-blue-600');
          submenuToggle.classList.add('bg-gray-700');
          submenuToggle.setAttribute('aria-expanded', 'false');
          submenuToggle.textContent = 'Options';
        }
      }
    } catch (e) {/* ignore */ }

    // reset result whenever mode changes
    resetResult();
  }

  $('onePlayer').addEventListener('click', () => setPlayersMode(1));
  $('twoPlayer').addEventListener('click', () => setPlayersMode(2));
  $('threePlayer').addEventListener('click', () => setPlayersMode(3));

  // carrier toggle behaviour
  // submenu toggle + carrier toggle behaviour
  const submenuToggle = $('submenuToggle');
  const submenu = $('submenu');
  if (submenuToggle && submenu) {
    submenuToggle.addEventListener('click', () => {
      const open = submenu.classList.toggle('open');
      submenuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      // change button color when open
      if (open) { submenuToggle.classList.remove('bg-gray-700'); submenuToggle.classList.add('bg-blue-600'); }
      else { submenuToggle.classList.remove('bg-blue-600'); submenuToggle.classList.add('bg-gray-700'); }
    });
  }

  const allowEl = $('allowCarrier');
  if (allowEl) {
    allowEl.addEventListener('click', () => {
      const el = allowEl;
      if (el?.classList.contains('bg-blue-600')) {
        el?.classList.remove('bg-blue-600'); el?.classList.add('bg-gray-700'); el.textContent = 'Aircraft-Carrier disabled';
        el.setAttribute('aria-pressed', 'false');
      } else {
        el?.classList.remove('bg-gray-700'); el?.classList.add('bg-blue-600'); el.textContent = 'Aircraft-Carrier enabled';
        el.setAttribute('aria-pressed', 'true');
      }
      // resetting result when carrier preference changes
      resetResult();
    });
  }

  // ensure sensible defaults for min/max tier selectors when options panel opens
  const minTierSelect = $('minTier');
  const maxTierSelect = $('maxTier');
  if (minTierSelect && maxTierSelect) {
    // use TIERS constant for ordering and comparisons

    // set defaults if not already set
    if (!minTierSelect.value) minTierSelect.value = 'Ⅳ';
    if (!maxTierSelect.value) maxTierSelect.value = '⭐';

    // helper to ensure options outside the allowed range are disabled
    function updateTierBounds() {
      const minVal = minTierSelect.value || 'Ⅰ';
      const maxVal = maxTierSelect.value || '⭐';
      const minIdx = TIERS.indexOf(minVal);
      const maxIdx = TIERS.indexOf(maxVal);
      // disable min options that are greater than current max
      Array.from(minTierSelect.options).forEach(opt => {
        const i = TIERS.indexOf(opt.value);
        opt.disabled = i > maxIdx;
      });
      // disable max options that are less than current min
      Array.from(maxTierSelect.options).forEach(opt => {
        const i = TIERS.indexOf(opt.value);
        opt.disabled = i < minIdx;
      });
      // if selections are invalid, clamp them
      if (TIERS.indexOf(minTierSelect.value) > maxIdx) {
        minTierSelect.value = TIERS[maxIdx];
        const el = minTierSelect.parentElement.querySelector('.tier-value'); if (el) el.textContent = minTierSelect.value;
      }
      if (TIERS.indexOf(maxTierSelect.value) < minIdx) {
        maxTierSelect.value = TIERS[minIdx];
        const el = maxTierSelect.parentElement.querySelector('.tier-value'); if (el) el.textContent = maxTierSelect.value;
      }
    }

    // initialize visible labels
    const minLabelEl = minTierSelect.parentElement.querySelector('.tier-value'); if (minLabelEl) minLabelEl.textContent = minTierSelect.value;
    const maxLabelEl = maxTierSelect.parentElement.querySelector('.tier-value'); if (maxLabelEl) maxLabelEl.textContent = maxTierSelect.value;

    // wire changes: update bounds first (may clamp), then refresh visible label and reset result
    minTierSelect.addEventListener('change', (e) => {
      updateTierBounds();
      const v = e.target.value;
      const el = e.target.parentElement.querySelector('.tier-value'); if (el) el.textContent = v;
      resetResult();
    });
    maxTierSelect.addEventListener('change', (e) => {
      updateTierBounds();
      const v = e.target.value;
      const el = e.target.parentElement.querySelector('.tier-value'); if (el) el.textContent = v;
      resetResult();
    });

    // apply initial bounds disabling
    updateTierBounds();
  }

  // axis/allies toggle: active by default
  const axisEl = $('axisAlliesToggle');
  if (axisEl) {
    // ensure default active appearance
    axisEl.classList.remove('bg-gray-700');
    axisEl.classList.add('bg-blue-600');
    axisEl.setAttribute('aria-pressed', 'true');

    axisEl.addEventListener('click', () => {
      const el = axisEl;
      if (el?.classList.contains('bg-blue-600')) {
        el?.classList.remove('bg-blue-600'); el?.classList.add('bg-gray-700');
        el.setAttribute('aria-pressed', 'false');
      } else {
        el?.classList.remove('bg-gray-700'); el?.classList.add('bg-blue-600');
        el.setAttribute('aria-pressed', 'true');
      }
      // reset result when option changes
      resetResult();
    });
  }

  // initial state: set players mode to 2 (keeps classes consistent)
  setPlayersMode(2);
  // set carrier button default to disabled state
  const carrier = $('allowCarrier'); if (carrier) { carrier?.classList.remove('bg-blue-600'); carrier?.classList.add('bg-gray-700'); carrier.textContent = 'Aircraft-Carrier disabled'; }
  // setup flag image fallback handlers
  setupFlagImageHandlers();
  // setup category images handlers
  setupCategoryImageHandlers();
}

window.addEventListener('load', setup);
