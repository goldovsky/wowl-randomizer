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

// Canonical tier list used throughout the app
const TIERS = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ', 'Ⅷ', '⭐'];

// Ship categories available in the game
const CATEGORIES = {
  DESTROYER: 'Destroyer',
  CRUISER: 'Cruiser',
  BATTLESHIP: 'Battleship',
  CARRIER: 'Aircraft Carrier'
};

// Maximum number of players supported
const MAX_PLAYERS = 3;

// ============================================================
//                      UTILITY FUNCTIONS
//  Small helper functions used across the app
// ============================================================

// Quick DOM element selector
function getElement(id) {
  return document.getElementById(id);
}

// Generate consistent element ID for player-specific elements
// Player 1's elements have no suffix (e.g., 'category', 'categoryImg')
// Players 2+ have numbered suffix (e.g., 'category2', 'categoryImg2')
function getPlayerElementId(baseName, playerNumber) {
  return playerNumber === 1 ? baseName : `${baseName}${playerNumber}`;
}

// Generate random integer from 0 to max (exclusive)
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

// Pick a random element from an array
function pickRandom(array) {
  return array[randomInt(array.length)];
}

// Pick a random tier from the TIERS list
function selectRandomTier() {
  return pickRandom(TIERS);
}

// Add a CSS class to an element
function addClass(element, className) {
  element?.classList.add(className);
}

// Remove a CSS class from an element
function removeClass(element, className) {
  element?.classList.remove(className);
}

// Show an element by removing the 'hidden' class
function showElement(element) {
  if (!element) return;
  removeClass(element, 'hidden');
}

// Hide an element by adding the 'hidden' class
function hideElement(element) {
  if (!element) return;
  addClass(element, 'hidden');
}

// Toggle button state between active (blue) and inactive (gray)
function setButtonState(button, isActive) {
  if (!button) return;

  removeClass(button, isActive ? 'bg-gray-700' : 'bg-blue-600');
  addClass(button, isActive ? 'bg-blue-600' : 'bg-gray-700');
  button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
}

// ============================================================
//                   CATEGORY SELECTION LOGIC
//  Functions to determine which ship categories to suggest
// ============================================================

// Check if a category is allowed based on carrier restrictions
function isCategoryAllowed(category, allowCarrier, nationHasCarriers) {
  if (category !== CATEGORIES.CARRIER) return true;
  return allowCarrier && nationHasCarriers;
}

// Filter categories based on carrier availability
function filterAllowedCategories(categories, allowCarrier, nationHasCarriers) {
  return categories.filter(cat => isCategoryAllowed(cat, allowCarrier, nationHasCarriers));
}

// Pick multiple categories while enforcing max 1 carrier rule
function pickCategories(count, pool) {
  // Single category - just pick one randomly
  if (count === 1) {
    return pickRandom(pool);
  }

  // Multiple categories - enforce max 1 carrier across all picks
  const result = [];
  let carrierAlreadyPicked = false;

  for (let i = 0; i < count; i++) {
    let availablePool = pool;

    // If we already picked a carrier, exclude it from future picks
    if (carrierAlreadyPicked) {
      availablePool = pool.filter(cat => cat !== CATEGORIES.CARRIER);
    }

    // Fallback to full pool if no options left
    if (availablePool.length === 0) {
      availablePool = pool;
    }

    const selected = pickRandom(availablePool);
    result.push(selected);

    if (selected === CATEGORIES.CARRIER) {
      carrierAlreadyPicked = true;
    }
  }

  return result;
}

// Get categories available for a specific nation and tier
function getCategoriesForNationTier(nation, tier, allowCarrier) {
  if (!nation?.categoryByTier?.[tier]) return null;

  const tierMapping = nation.categoryByTier[tier];
  return filterAllowedCategories(tierMapping, allowCarrier, nation.carriers);
}

// Main function to suggest ship categories for players
function suggestCategories(nation, tier, allowCarrier, playerCount) {
  // Try to get specific categories from nation's tier mapping
  const availableCategories = getCategoriesForNationTier(nation, tier, allowCarrier);

  // If nation has specific categories for this tier, use them
  if (availableCategories && availableCategories.length > 0) {
    return pickCategories(playerCount, availableCategories);
  }

  // Fallback: use default category selection
  const baseCategories = [CATEGORIES.DESTROYER, CATEGORIES.CRUISER, CATEGORIES.BATTLESHIP];
  const allCategories = [...baseCategories];

  if (allowCarrier && nation.carriers) {
    allCategories.push(CATEGORIES.CARRIER);
  }

  return pickCategories(playerCount, allCategories);
}

// ============================================================
//                   DISPLAY / UI FUNCTIONS
//  Functions to update the UI with results
// ============================================================

// Format category label for display (abbreviate "Aircraft Carrier" in 3-player mode)
function formatCategoryLabel(category, playerCount) {
  if (!category) return '—';
  if (playerCount === 3 && category === CATEGORIES.CARRIER) {
    return 'A. Carrier';
  }
  return category;
}

// Set the category image for a player slot
function setCategoryImage(imageElement, category) {
  if (!imageElement) return;

  const imagePath = `assets/categories/${encodeURIComponent(category)}.png`;
  imageElement.src = imagePath;
  showElement(imageElement);
  imageElement.dataset.attemptedFallback = '';
}

// Update a single player's display (nation name, flag, category)
function updatePlayerDisplay(playerNumber, nation, category, playerCount) {
  const nationNameElement = getElement(`nationName${playerNumber}`);
  const flagImageElement = getElement(`flagImg${playerNumber}`);
  const categoryElement = getElement(getPlayerElementId('category', playerNumber));
  const categoryImageElement = getElement(getPlayerElementId('categoryImg', playerNumber));
  const typeElement = getElement(`type${playerNumber}`);

  // Update nation name
  if (nationNameElement) {
    nationNameElement.textContent = nation.name || nation.id;
  }

  // Update flag (only show if nation has a flag)
  if (flagImageElement && nation.flag) {
    flagImageElement.src = nation.flag;
    showElement(flagImageElement);
  }

  // Update category text and image
  if (categoryElement) {
    categoryElement.textContent = formatCategoryLabel(category, playerCount);
  }

  if (categoryImageElement && category) {
    setCategoryImage(categoryImageElement, category);
  }

  // Show the type column for this player
  showElement(typeElement);
}

// Hide a player's display slot
function hidePlayerDisplay(playerNumber) {
  const categoryElement = getElement(getPlayerElementId('category', playerNumber));
  const categoryImageElement = getElement(getPlayerElementId('categoryImg', playerNumber));
  const typeElement = getElement(`type${playerNumber}`);

  if (categoryElement) {
    categoryElement.textContent = '';
    hideElement(categoryElement);
  }

  if (categoryImageElement) {
    categoryImageElement.src = '';
    hideElement(categoryImageElement);
  }

  hideElement(typeElement);
}

// Display the randomized result on screen
function displayResult(nations, tier, categories, playerCount) {
  // Update tier display
  const tierLabelElement = getElement('tierLabel');
  const tierElement = getElement('tier');

  if (tierLabelElement) tierLabelElement.textContent = 'Tier';
  if (tierElement) tierElement.textContent = tier;

  // Ensure categories is always an array
  const categoryArray = Array.isArray(categories) ? categories : [categories];

  // Update each player's display
  for (let i = 0; i < playerCount; i++) {
    updatePlayerDisplay(i + 1, nations[i], categoryArray[i], playerCount);
  }

  // Hide unused player slots
  for (let i = playerCount; i < MAX_PLAYERS; i++) {
    hidePlayerDisplay(i + 1);
  }
}

// Reset a single player's display to empty state
function resetPlayerDisplay(playerNumber) {
  const nationNameElement = getElement(`nationName${playerNumber}`);
  const flagImageElement = getElement(`flagImg${playerNumber}`);
  const categoryElement = getElement(getPlayerElementId('category', playerNumber));
  const categoryImageElement = getElement(getPlayerElementId('categoryImg', playerNumber));

  if (nationNameElement) {
    nationNameElement.textContent = '—';
  }

  if (flagImageElement) {
    flagImageElement.src = '';
    hideElement(flagImageElement);
  }

  if (categoryElement) {
    categoryElement.textContent = '';
    hideElement(categoryElement);
  }

  if (categoryImageElement) {
    categoryImageElement.src = '';
    hideElement(categoryImageElement);
  }
}

// Reset the display to initial empty state
function resetDisplay() {
  const tierElement = getElement('tier');
  if (tierElement) tierElement.textContent = '—';

  // Reset all player displays
  for (let i = 1; i <= MAX_PLAYERS; i++) {
    resetPlayerDisplay(i);
  }
}

// ============================================================
//               IMAGE ERROR HANDLING
//  Handle missing flag/category images with fallbacks
// ============================================================

// Try alternate image format (png <-> svg) on load error
function tryAlternateImageFormat(imageElement) {
  const alreadyTriedFallback = imageElement.dataset.attemptedFallback;
  if (alreadyTriedFallback) return false;

  imageElement.dataset.attemptedFallback = '1';
  const currentSrc = imageElement.src || '';

  if (currentSrc.endsWith('.png')) {
    imageElement.src = currentSrc.replace(/\.png$/, '.svg');
    return true;
  } else if (currentSrc.endsWith('.svg')) {
    imageElement.src = currentSrc.replace(/\.svg$/, '.png');
    return true;
  }

  return false;
}

// Setup error handlers for flag images
function setupFlagImageHandlers() {
  const flagImages = [
    getElement('flagImg1'),
    getElement('flagImg2'),
    getElement('flagImg3')
  ].filter(Boolean);

  flagImages.forEach(image => {
    image.onerror = function () {
      if (tryAlternateImageFormat(image)) {
        return;
      }

      hideElement(image);
    };

    image.onload = function () {
      addClass(image, 'object-cover');
      showElement(image);
    };
  });
}

// Setup error handlers for category images
function setupCategoryImageHandlers() {
  const categoryImages = [
    getElement('categoryImg'),
    getElement('categoryImg2'),
    getElement('categoryImg3')
  ].filter(Boolean);

  categoryImages.forEach(image => {
    image.onerror = function () {
      if (tryAlternateImageFormat(image)) {
        return;
      }

      // Hide image if all formats fail
      hideElement(image);
      image.src = '';
    };

    image.onload = function () {
      showElement(image);
      addClass(image, 'object-contain');
    };

    image.onload = function () {
      removeClass(image, 'hidden');
      addClass(image, 'object-contain');
    };
  });
}

// ============================================================
//                  GAME LOGIC / RANDOMIZATION
//  Core randomization and nation/tier selection
// ============================================================

// Get currently selected number of players (1, 2, or 3)
function getSelectedPlayerCount() {
  const onePlayerButton = getElement('onePlayer');
  const twoPlayerButton = getElement('twoPlayer');
  const threePlayerButton = getElement('threePlayer');

  // Check dataset.selected first, then fallback to CSS classes
  if (threePlayerButton?.dataset?.selected === '1') return 3;
  if (twoPlayerButton?.dataset?.selected === '1') return 2;
  if (onePlayerButton?.dataset?.selected === '1') return 1;

  // Fallback: check for blue background class
  const isBlue = (el) => el?.classList.contains('bg-blue-600') || el?.classList.contains('bg-blue-700');
  if (isBlue(threePlayerButton)) return 3;
  if (isBlue(twoPlayerButton)) return 2;

  return 1;
}

// Check if carrier selection is allowed
function isCarrierAllowed() {
  const allowCarrierButton = getElement('allowCarrier');
  return allowCarrierButton?.classList.contains('bg-blue-600');
}

// Check if axis/allies team matching is enabled
function isSameTeamEnabled() {
  const axisAlliesButton = getElement('axisAlliesToggle');
  return axisAlliesButton?.classList.contains('bg-blue-600');
}

// Check if category locking is enabled (all players get same category)
function isCategoryLockEnabled() {
  const lockCategoryButton = getElement('lockCategoryToggle');
  return lockCategoryButton?.classList.contains('bg-blue-600');
}

// Select a random tier within the min/max range
function selectTierInRange() {
  const minTierElement = getElement('minTier');
  const maxTierElement = getElement('maxTier');

  if (!minTierElement || !maxTierElement) {
    return selectRandomTier();
  }

  const minTierValue = minTierElement.value || 'Ⅳ';
  const maxTierValue = maxTierElement.value || '⭐';

  const minIndex = TIERS.indexOf(minTierValue);
  const maxIndex = TIERS.indexOf(maxTierValue);

  if (minIndex >= 0 && maxIndex >= 0 && minIndex <= maxIndex) {
    const randomIndex = minIndex + randomInt(maxIndex - minIndex + 1);
    return TIERS[randomIndex];
  }

  return selectRandomTier();
}

// Select nations for all players
function selectNationsForPlayers(playerCount, useSameTeam) {
  const firstNation = pickRandom(nations);
  const selectedNations = [firstNation];

  if (playerCount === 1) return selectedNations;

  if (useSameTeam) {
    // All players must be from the same team (allies or axis)
    const team = firstNation.team || 'allies';
    const sameTeamNations = nations.filter(nation => (nation.team || 'allies') === team);

    for (let i = 1; i < playerCount; i++) {
      selectedNations.push(pickRandom(sameTeamNations));
    }
  } else {
    // Each player gets a random nation (can be duplicates)
    for (let i = 1; i < playerCount; i++) {
      selectedNations.push(pickRandom(nations));
    }
  }

  return selectedNations;
}

// Generate categories for all players
function generateCategoriesForPlayers(selectedNations, tier, allowCarrier, categoryLocked) {
  if (categoryLocked) {
    // All players get the same category
    const firstNation = selectedNations[0];
    const category = suggestCategories(firstNation, tier, allowCarrier, 1);
    return selectedNations.map(() => category);
  }

  // Each player gets their own category
  return selectedNations.map(nation =>
    suggestCategories(nation, tier, allowCarrier, 1)
  );
}

// Main randomization function - called when "Generate" button is clicked
function handleRandomize() {
  const playerCount = getSelectedPlayerCount();
  const allowCarrier = isCarrierAllowed();
  const useSameTeam = isSameTeamEnabled();
  const categoryLocked = isCategoryLockEnabled();

  // Disable carriers when category is locked
  const effectiveAllowCarrier = allowCarrier && !categoryLocked;

  // Select tier within configured range
  const tier = selectTierInRange();

  // Select nations for all players
  const selectedNations = selectNationsForPlayers(playerCount, useSameTeam);

  // Generate categories for all players
  const categories = generateCategoriesForPlayers(
    selectedNations,
    tier,
    effectiveAllowCarrier,
    categoryLocked
  );

  // Display the result
  displayResult(selectedNations, tier, categories, playerCount);
}

// ============================================================
//                  UI SETUP / EVENT HANDLERS
//  Initialize the interface and wire up user interactions
// ============================================================

// Update player mode display (1, 2, or 3 players)
function setPlayerMode(playerCount) {
  const onePlayerButton = getElement('onePlayer');
  const twoPlayerButton = getElement('twoPlayer');
  const threePlayerButton = getElement('threePlayer');

  // Remove all color classes first
  [onePlayerButton, twoPlayerButton, threePlayerButton].forEach(button => {
    removeClass(button, 'bg-blue-600');
    removeClass(button, 'bg-blue-700');
    removeClass(button, 'bg-gray-600');
    removeClass(button, 'bg-gray-700');
  });

  // Apply correct state to each button
  const buttons = [onePlayerButton, twoPlayerButton, threePlayerButton];
  buttons.forEach((button, index) => {
    if (!button) return;

    const isSelected = (index + 1) === playerCount;
    addClass(button, isSelected ? 'bg-blue-600' : 'bg-gray-700');
    button.dataset.selected = isSelected ? '1' : '';
    button.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  // Show/hide player columns based on player count
  const type2Element = getElement('type2');
  const type3Element = getElement('type3');
  const divider1Element = getElement('typeDivider');
  const divider2Element = getElement('typeDivider2');

  const player1Label = getElement('player1Label');
  const player2Label = getElement('player2Label');
  const player3Label = getElement('player3Label');

  // Configure visibility based on player count
  switch (playerCount) {
    case 1:
      hideElement(type2Element);
      hideElement(type3Element);
      hideElement(divider1Element);
      hideElement(divider2Element);
      showElement(player1Label);
      hideElement(player2Label);
      hideElement(player3Label);
      break;

    case 2:
      showElement(type2Element);
      hideElement(type3Element);
      showElement(divider1Element);
      hideElement(divider2Element);
      showElement(player1Label);
      showElement(player2Label);
      hideElement(player3Label);
      break;

    case 3:
      showElement(type2Element);
      showElement(type3Element);
      showElement(divider1Element);
      showElement(divider2Element);
      showElement(player1Label);
      showElement(player2Label);
      showElement(player3Label);
      break;
  }

  // Close options submenu when player mode changes
  closeOptionsSubmenu();

  // Reset result display
  resetDisplay();
}

// Close the options submenu
function closeOptionsSubmenu() {
  const submenu = getElement('submenu');
  const submenuToggle = getElement('submenuToggle');

  if (submenu?.classList.contains('open')) {
    removeClass(submenu, 'open');

    if (submenuToggle) {
      removeClass(submenuToggle, 'bg-blue-600');
      addClass(submenuToggle, 'bg-gray-700');
      submenuToggle.setAttribute('aria-expanded', 'false');
      submenuToggle.textContent = 'Options';
    }
  }
}

// Setup options submenu toggle
function setupOptionsSubmenu() {
  const submenuToggle = getElement('submenuToggle');
  const submenu = getElement('submenu');

  if (!submenuToggle || !submenu) return;

  submenuToggle.addEventListener('click', () => {
    const isOpen = submenu.classList.toggle('open');
    submenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (isOpen) {
      removeClass(submenuToggle, 'bg-gray-700');
      addClass(submenuToggle, 'bg-blue-600');
    } else {
      removeClass(submenuToggle, 'bg-blue-600');
      addClass(submenuToggle, 'bg-gray-700');
    }
  });
}

// Setup carrier toggle button
function setupCarrierToggle() {
  const allowCarrierButton = getElement('allowCarrier');
  if (!allowCarrierButton) return;

  allowCarrierButton.addEventListener('click', () => {
    const isCurrentlyEnabled = allowCarrierButton.classList.contains('bg-blue-600');

    if (isCurrentlyEnabled) {
      setButtonState(allowCarrierButton, false);
      allowCarrierButton.textContent = 'Aircraft-Carrier disabled';
    } else {
      setButtonState(allowCarrierButton, true);
      allowCarrierButton.textContent = 'Aircraft-Carrier enabled';
    }

    resetDisplay();
  });
}

// Setup category lock toggle button
function setupCategoryLockToggle() {
  const lockCategoryButton = getElement('lockCategoryToggle');
  if (!lockCategoryButton) return;

  lockCategoryButton.addEventListener('click', () => {
    const isCurrentlyEnabled = lockCategoryButton.classList.contains('bg-blue-600');
    const allowCarrierButton = getElement('allowCarrier');

    if (isCurrentlyEnabled) {
      // Turn off category lock
      setButtonState(lockCategoryButton, false);

      // Re-enable carrier button
      if (allowCarrierButton) {
        allowCarrierButton.disabled = false;
      }
    } else {
      // Turn on category lock
      setButtonState(lockCategoryButton, true);

      // Disable carrier button (to avoid multi-carrier issues)
      if (allowCarrierButton) {
        setButtonState(allowCarrierButton, false);
        allowCarrierButton.textContent = 'Aircraft-Carrier disabled';
        allowCarrierButton.disabled = true;
      }
    }

    resetDisplay();
  });
}

// Setup axis/allies team toggle button
function setupAxisAlliesToggle() {
  const axisAlliesButton = getElement('axisAlliesToggle');
  if (!axisAlliesButton) return;

  // Set initial state to enabled
  setButtonState(axisAlliesButton, true);

  axisAlliesButton.addEventListener('click', () => {
    const isCurrentlyEnabled = axisAlliesButton.classList.contains('bg-blue-600');
    setButtonState(axisAlliesButton, !isCurrentlyEnabled);
    resetDisplay();
  });
}

// Update tier selector bounds to prevent invalid min/max combinations
function updateTierSelectorBounds() {
  const minTierSelect = getElement('minTier');
  const maxTierSelect = getElement('maxTier');

  if (!minTierSelect || !maxTierSelect) return;

  const minValue = minTierSelect.value || 'Ⅰ';
  const maxValue = maxTierSelect.value || '⭐';
  const minIndex = TIERS.indexOf(minValue);
  const maxIndex = TIERS.indexOf(maxValue);

  // Disable min options greater than current max
  Array.from(minTierSelect.options).forEach(option => {
    const optionIndex = TIERS.indexOf(option.value);
    option.disabled = optionIndex > maxIndex;
  });

  // Disable max options less than current min
  Array.from(maxTierSelect.options).forEach(option => {
    const optionIndex = TIERS.indexOf(option.value);
    option.disabled = optionIndex < minIndex;
  });

  // Clamp invalid selections
  if (TIERS.indexOf(minTierSelect.value) > maxIndex) {
    minTierSelect.value = TIERS[maxIndex];
    const minLabel = minTierSelect.parentElement.querySelector('.tier-value');
    if (minLabel) minLabel.textContent = minTierSelect.value;
  }

  if (TIERS.indexOf(maxTierSelect.value) < minIndex) {
    maxTierSelect.value = TIERS[minIndex];
    const maxLabel = maxTierSelect.parentElement.querySelector('.tier-value');
    if (maxLabel) maxLabel.textContent = maxTierSelect.value;
  }
}

// Setup min/max tier selectors
function setupTierSelectors() {
  const minTierSelect = getElement('minTier');
  const maxTierSelect = getElement('maxTier');

  if (!minTierSelect || !maxTierSelect) return;

  // Set default values
  if (!minTierSelect.value) minTierSelect.value = 'Ⅳ';
  if (!maxTierSelect.value) maxTierSelect.value = '⭐';

  // Initialize visible labels
  const minLabel = minTierSelect.parentElement.querySelector('.tier-value');
  const maxLabel = maxTierSelect.parentElement.querySelector('.tier-value');

  if (minLabel) minLabel.textContent = minTierSelect.value;
  if (maxLabel) maxLabel.textContent = maxTierSelect.value;

  // Handle min tier changes
  minTierSelect.addEventListener('change', (event) => {
    updateTierSelectorBounds();
    const label = event.target.parentElement.querySelector('.tier-value');
    if (label) label.textContent = event.target.value;
    resetDisplay();
  });

  // Handle max tier changes
  maxTierSelect.addEventListener('change', (event) => {
    updateTierSelectorBounds();
    const label = event.target.parentElement.querySelector('.tier-value');
    if (label) label.textContent = event.target.value;
    resetDisplay();
  });

  // Apply initial bounds
  updateTierSelectorBounds();
}

// Main setup function - initialize all event handlers and UI state
function initializeApp() {
  // Wire up player mode buttons
  getElement('onePlayer')?.addEventListener('click', () => setPlayerMode(1));
  getElement('twoPlayer')?.addEventListener('click', () => setPlayerMode(2));
  getElement('threePlayer')?.addEventListener('click', () => setPlayerMode(3));

  // Wire up randomize button
  getElement('randomBtn')?.addEventListener('click', handleRandomize);

  // Setup all toggle buttons
  setupOptionsSubmenu();
  setupCarrierToggle();
  setupCategoryLockToggle();
  setupAxisAlliesToggle();
  setupTierSelectors();

  // Setup image error handlers
  setupFlagImageHandlers();
  setupCategoryImageHandlers();

  // Set initial UI state
  setPlayerMode(2); // Default to 2-player mode

  // Set carrier button to disabled by default
  const carrierButton = getElement('allowCarrier');
  if (carrierButton) {
    setButtonState(carrierButton, false);
    carrierButton.textContent = 'Aircraft-Carrier disabled';
  }
}

// Start the app when page loads
window.addEventListener('load', initializeApp);
