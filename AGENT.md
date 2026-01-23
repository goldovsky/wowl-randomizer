But: Agent instructions pour construire l'application "WoWSL Randomizer" (mobile-first)

- Objectif: petite application statique (déployée sur GitLab Pages) pour randomiser un navire dans World of Warships: Legends.
- Fonctionnalités minimales: tirer au sort une nationalité et un rang (1..8 + légendaire '*').
- Bonus: suggestion d'une catégorie de navire (destroyer, croiseur, cuirassé, porte-avions).

- Contraintes / décisions prises:
  - Application statique (HTML + JS + CSS) pour être simple et compatible Pages.
  - Tailwind via CDN (pas de build) pour un dev rapide et design mobile-friendly.
  - Légendaires inclus par défaut (pas d'option pour les exclure).
  - Option joueur: "1 joueur" ou "2 joueurs" — cela n'affecte que la logique de suggestion de catégorie (biais sur la suggestion pour tenir compte des règles d'équipe, voir plus bas).
  - Les porte-avions sont optionnels (switch dans l'UI). Si désactivés, on ne les propose pas.
  - Les données des nations sont externes dans `data/nations.json`. L'utilisateur fournira/complétera ce fichier ultérieurement.

- Démarche technique:
  - Fichiers principaux:
    - `index.html` — page unique mobile-first utilisant Tailwind CDN
    - `app.js` — logique: chargement `data/nations.json`, randomize, UI
    - `styles.css` — quelques styles supplémentaires
    - `data/nations.json` — jeu d'exemple/placeholder (l'utilisateur remplacera)
    - `assets/flags/*.svg` — quelques drapeaux d'exemple (placeholder)
    - `.gitlab-ci.yml` — pipeline minimal pour GitLab Pages (copie des fichiers dans `public/`).

- Règles simplifiées de suggestion de catégorie:
  - Catégories possibles: `Destroyer`, `Cruiser`, `Battleship`, `Aircraft Carrier`.
  - Si la nation n'autorise pas les porte-avions, on exclut `Aircraft Carrier`.
  - Si l'utilisateur choisit "2 joueurs" on réduit la probabilité de proposer un porte-avions (pour tenir compte de la règle "max 1 porte-avions par équipe"), mais on ne gère pas l'état de l'autre joueur — règle heuristique simple.

- Déploiement GitLab Pages:
  - `.gitlab-ci.yml` fourni copie les fichiers dans `public/` ; pas de build Node nécessaire tant qu'on reste sur Tailwind CDN.

- Données externes / améliorations possibles:
  - Remplacer `data/nations.json` par une extraction d'une API (ex: API World of Warships PC) pour récupérer liste des nations, drapeaux et règles par nation. Cela demande d'étudier l'API publique, d'obtenir une clé (si nécessaire) et de transformer les données pour le format attendu.
  - J'ai ajouté un script prototype `scripts/fetch_wg_data.js` (Node) pour extraire les données depuis l'API Wargaming (World of Warships PC). Le script demande une `APPLICATION_ID` (obtenue en enregistrant une application sur le Developer Room) et un paramètre `REALM` (par défaut `eu`).
    - Le script récupère la liste des navires via l'endpoint `encyclopedia/ships`, regroupe les nations et calcule si une nation a des porte-avions (utile pour notre champ `carriers`).
    - Il génère `data/nations.json` prêt à être affiné (tu peux compléter manuellement les liens de drapeaux ou utiliser l'option facultative pour télécharger des drapeaux depuis flagcdn).
    - Voir `scripts/fetch_wg_data.js` pour usage et options.
  - Améliorations futures: stockage local des résultats, partage via querystring, interface plus riche, build Tailwind pour personnalisation plus poussée.

- Prochaine étape que j'ai réalisée pour toi maintenant: création d'une implémentation minimale prête à déployer (fichiers ci-dessus). Tu remplaces/complètes `data/nations.json` avec ta base de données quand tu es prêt.
