/* defnition d'un json (copié collé à partir d'un fichier json que j'ai fait */
var classement = {
  "nom": "Top 5 jeux DS",
  "siteReferent": "JeuxVideos.com",
  "urlReferent":"https://www.jeuxvideo.com/meilleurs/machine-380/mode-3200/",
  "active": true,
  "jeux": [
    {
      "nom": "Chrono Trigger",
      "annee": 2009,
      "synopsis": "Dan JukesSuite aux dysfonctionnements d'un système de téléportation durant la Fête du Millénaire, une jeune fille devient prisonnière d'un enchevêtrement de dangers situés dans le passé et dans le présent. Le jeune Chrono décide de partir à sa rescousse. Cette version DS de l'un des plus grands classiques du jeu de rôle apporte des <mark>donjons inédits</mark>, une présentation adaptée au double écran et au stylet, ainsi qu'un mode de jeu sans fil."
    },
    {
      "nom": "SolatoRobo : Red the Hunter",
      "annee": 2011,
      "synopsis": "Solatorobo : Red the Hunter est un jeu d'action/RPG sur Nintendo DS. Vous y incarnez Red Savarin, un chien anthropomorphe qui peut se transformer à loisir en humain pour combattre des robots géants et de nombreux ennemis au fil de ses explorations."
    },
    {
      "nom": "Dragon Quest VI : Le Royaume des Songes",
      "annee": 2011,
      "synopsis": "Dragon Quest VI : Le Royaume des Songes est la réédition sur Nintendo DS du jeu de rôle sorti sur Super Nintendo. Ce sixième volet clôt la trilogie du Ciel et nous fait voyager à travers deux mondes parallèles : le monde réel et le monde des rêves. Cette version comporte quelques suppléments inédits, comme le <mark>partage des rêves entre joueurs</mark> ainsi que des mini-jeux bonus. L'abbaye des vocations permet de modifier la classe de ses personnages tout au long de la partie."
    },
	{
		"nom":"Professeur Layton et le Destin Perdu",
		"annee":2010,
		"synopsis":"Troisième volet de la fameuse série, Professeur Layton : Le Destin Perdu sur DS vous amènera dans le Londres du futur. Après avoir été mystérieusement transporté, le professeur et Luke devront tenter de s'échapper pour éviter tout conflit temporel."
	},
	{
		"nom":"Dragon Quest IX : Les Sentinelles du Firmament",
		"annee":2010,
		"synopsis":"Dragon Quest IX est un jeu de rôle au tour par tour sur DS. Si le soft repose en grande partie sur les bases établies par ses aînés, il offre néanmoins un bon nombre de nouveautés, à commencer par la possibilité de <mark>créer ses héros de toutes pièces</mark>. Six classes de base sont disponibles : troubadour, guerrier, artiste martial, magicien, prêtre et voleur. L'aventure est également jouable en multijoueur et permet à quatre aventuriers de fracasser du slime en coopération."
	}
  ]
}
;

/* affiche un titre et sous-titre (en HTML) à partir du nom du classement, du nom et de l'url du site référent dans le json */
function afficherTitre(){
  document.write('<h1>'+classement.nom+"</h1>");
  document.write('<h3>Site référent : ');
  document.write('<a href ="'+classement.urlReferent+'"/>');
  document.write(classement.siteReferent);
  document.write('</a>');
  document.write('</h3>');
}

/* affiche une liste ordonnée HTML (ol) et chaque élément (li) correspond aux informations d'un jeu (un li par jeu) */
function afficherDonnees(){
document.write("<ol>");
classement.jeux.forEach(function(item){
  document.write('<li class="unJeu">');
  document.write('<h4>'+item.nom+"</h4>");
  document.write('<p>'+item.annee+'</p>');
  document.write("<p>"+item.synopsis+"</p>");
  document.write("</li>");
});
document.write("</ol>");
//Cette ligne affiche dans la console
//console.log(classement.jeux[0].name);
}