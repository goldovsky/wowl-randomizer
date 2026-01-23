// This file provides a fallback for environments where fetch() cannot load
// data/nations.json (for example when opening the page via file://).
// It assigns the nations list to window.__NATIONS__ so the app can use it.
window.__NATIONS__ = [
  {"id":"usa","name":"U.S.A.","flag":"assets/flags/usa.png","carriers":true},
  {"id":"japan","name":"Japon","flag":"assets/flags/japan.png","carriers":true},
  {"id":"ussr","name":"U.S.S.R.","flag":"assets/flags/ussr.png","carriers":false},
  {"id":"germany","name":"Allemagne","flag":"assets/flags/germany.png","carriers":false},
  {"id":"uk","name":"U.K.","flag":"assets/flags/uk.png","carriers":true},
  {"id":"commonwealth","name":"Commonwealth","flag":"assets/flags/commonwealth.png","carriers":true},
  {"id":"france","name":"France","flag":"assets/flags/france.png","carriers":false},
  {"id":"italy","name":"Italie","flag":"assets/flags/italy.png","carriers":false},
  {"id":"spain","name":"Espagne","flag":"assets/flags/spain.png","carriers":false},
  {"id":"netherlands","name":"Pays-Bas","flag":"assets/flags/netherlands.png","carriers":false},
  {"id":"europe","name":"Europe","flag":"assets/flags/europe.png","carriers":false},
  {"id":"pan-america","name":"Pan-America","flag":"assets/flags/pan-america.png","carriers":false},
  {"id":"pan-asia","name":"Pan-Asie","flag":"assets/flags/pan-asia.png","carriers":false}
];
