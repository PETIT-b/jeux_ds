/* Fonction permettant de "charger" un 'header' : du code HTML correspondant au contenu d'une balise 'header'  vient remplacer le contenu de la balise 'header' de la page */
function loadHeader(){
  var newHeaderContent='<div id="entete_up">'
  +'<img width=100 src="images/512px-Nintendo-DSi-Bl-Open.png" />'
  +'<h1>Jeux DS</h1>'
  +'<img width=100 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/DSLite_white_trans.png/1200px-DSLite_white_trans.png"/>'
  +'</div>'
  +'<div id="navBar">'
  +'<p>Menu pas chargé :</br>cliquez sur le bouton</p>'
  +'<button onclick="menuNav()">'
  +'Click'
  +'</button>'
  +'<a href="#"><div class="bouton">Accueil</div></a>'
  +'<a href="#"><div class="bouton">Divers</div></a>'
  +'</div>';
  
  var theHeader=document.getElementsByTagName("header");
  
  theHeader[0].innerHTML=newHeaderContent;
}

/*menuNav "cherche" la balise avec pour id "navBar" et remplace son contenu par le code html spécifié dans la fonction*/
function menuNav(){
  document.getElementById("navBar").innerHTML = '<a href="index.html"><div class="bouton">Accueil</div></a>'
  +'<div class="deroulant">'
    +'<div class="derouleAlign"><button class="btnDeroule">Les DS</button><img src="https://cdn-icons-png.flaticon.com/512/25/25623.png" height=16px /></div>'
  +'<div class="eleDeroule">'
    +'<a href="presentationDS.html">les DS originales</a>'
    +'<a href="firmwareDSI.html">Firmwares DSi</a>'
    +'</div>'
    +'</div>'
    +'<a href="faqDS.html"><div class="bouton">FAQ</div></a>';
}

function loadFooter(){
  var footerContent="© <a href=http://perdu.com>mailquinexistepas@gmail.com</a> "
  +"2022";
  var theFooter=document.getElementsByTagName("footer");
  theFooter[0].innerHTML=footerContent;
}

/* Fonction test pour charger un header , affiche le nombre de header (1 normalement) */
function loadHeaderTest(){  
  var output = document.getElementById("testOutput1");
  
  var newHeaderContent='<h4>Header Chargé</h4>';
  
  var theHeader=document.getElementsByTagName("header");
  output.innerHTML=("<h4>Longueur Array LoadHeader : "+theHeader.length+"</h4>");
  theHeader[0].innerHTML=newHeaderContent;
}

