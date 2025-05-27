Jeux-DS est un projet "jouet" : il est codé en HTMLS, CSS et JS. Le site était hébergé sur Codepen.io, ce qui a engendré quelques limitations techniques : il y a beaucoup de code redondant car les liens entre différentes pages, feuilles de style et scripts ne se font pas de manière traditionnelle sur Codepen.io (les "Pens" ne sont pas hiérarchisés comme des fichiers dans un dossier).
L'objectif principal de Jeux-DS est d'utiliser JS pour du back-end et un front-end dynamique :
- Pour la partie back-end, les données sont stockées dans un JSON (dûes à de précédentes limitations de Codepen.io, le JSON est lui-même une variable dans scripts/dataDS.js, mais il s'agit bien du format json).
- La partie front-end est dynamique : le menu est chargé par un script JS, donc il est identique entre chaque page tout en étant stocké à un seul endroit, reproduisant le fonctionnement d'une "view" dans un framework web. Un script dans la page index.html charge les données du JSON présent dans scripts/dataDS.js.

dataDS.html et scriptDS.html sont des pages de test : 
- dataDS.html permet de vérifier les chargements des données par le script scripts/dataDS.js
- scriptDS.html permet de vérifier que les menus sont bien chargés par le script scripts/scriptDS.js
