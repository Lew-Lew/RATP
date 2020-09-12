// étape n°1: squelette HTML
//étape n°2 : récupérer les parties du DOM dont on a besoin
let listeMetrosDOM = document.getElementById("listeMetros");
let listeRersDOM = document.getElementById("listeRer");
let listeTramDOM = document.getElementById("listeTrams");
let navMetro = document.getElementById("navMetro");
let navRer = document.getElementById("navRer");
let navTram = document.getElementById("navTram");
let contentLine = document.getElementById("contentLine");
let linkMetro = document.getElementById("linkMetro");
let linkRer = document.getElementById("linkRer");
let linkTram = document.getElementById("linkTram");

// étape n°3 les données: création des variables
let listeMetros = [];
let listeRers = [];
let listeTramways = [];

// étape n°4 : création des fonctions d'affichage
// ici on décide d'avoir une fonction d'affichage générale et des fonction d'affichages spécifiques à chaque parties.
// De cette façon on peut prévénir tout imprévu en n'utilisant une fonction pour une partie ou pour le tout.

linkMetro.addEventListener("click", affichageMetro2);
function affichageMetro2(e) {
  let newUlnav = document.createElement("ul");
  navMetro.appendChild(newUlnav);
  navMetro.innerHTML = "";
  for (let metro of listeMetros) {
    // la nav des metros
    let newLinav = document.createElement("li");
    let newAnav = document.createElement("a");
    newAnav.classList.add("linkNavLines");
    newAnav.innerHTML = metro.line;
    newLinav.appendChild(newAnav);
    navMetro.appendChild(newLinav);
    if (metro.slug == "normal") {
      console.log("normal");
      newAnav.style.backgroundColor = "rgba(15,127,18,0.10)";
    } else if (metro.slug == "normal_trav") {
      console.log("travaux");
      newAnav.style.backgroundColor = "rgba(253,164,40,0.10)";
    } else {
      newAnav.style.backgroundColor = "rgba(252,13,27,0.10)";
    }
    newAnav.addEventListener("click", showContent2);
    function showContent2(e) {
      console.log(e);
      contentLine.innerHTML = "";
      let divContentLine = document.createElement("div");
      divContentLine.classList.add("bordered");
      divContentLine.innerHTML =
        `<h2 class="subtitle"> LIGNE ` +
        metro.line +
        `</h2><br />` +
        metro.message;
      contentLine.appendChild(divContentLine);
    }
  }
}

linkRer.addEventListener("click", affichageRer2);
function affichageRer2(e) {
  let newUlnav = document.createElement("ul");
  navMetro.appendChild(newUlnav);
  navMetro.innerHTML = "";
  for (let rer of listeRers) {
    // la nav des rer
    let newLinav = document.createElement("li");
    let newAnav = document.createElement("a");
    newAnav.classList.add("linkNavLines");
    newAnav.innerHTML = rer.line;
    newLinav.appendChild(newAnav);
    navMetro.appendChild(newLinav);
    if (rer.slug == "normal") {
      console.log("normal");
      newAnav.style.backgroundColor = "rgba(15,127,18,0.10)";
    } else if (rer.slug == "normal_trav") {
      console.log("travaux");
      newAnav.style.backgroundColor = "rgba(253,164,40,0.10)";
    } else {
      newAnav.style.backgroundColor = "rgba(252,13,27,0.10)";
    }
    newAnav.addEventListener("click", showContent2);
    function showContent2(e) {
      console.log(e);
      contentLine.innerHTML = "";
      let divContentLine = document.createElement("div");
      divContentLine.classList.add("bordered");
      divContentLine.innerHTML =
        `<h2 class="subtitle"> LIGNE ` + rer.line + `</h2><br />` + rer.message;
      contentLine.appendChild(divContentLine);
    }
  }
}

linkTram.addEventListener("click", affichageTram2);
function affichageTram2(e) {
  let newUlnav = document.createElement("ul");
  navMetro.appendChild(newUlnav);
  navMetro.innerHTML = "";
  for (let tram of listeTramways) {
    // la nav des Tramways
    let newLinav = document.createElement("li");
    let newAnav = document.createElement("a");
    newAnav.classList.add("linkNavLines");
    newAnav.innerHTML = tram.line;
    newLinav.appendChild(newAnav);
    navMetro.appendChild(newLinav);
    if (tram.slug == "normal") {
      console.log("normal");
      newAnav.style.backgroundColor = "rgba(15,127,18,0.10)";
    } else if (tram.slug == "normal_trav") {
      console.log("travaux");
      newAnav.style.backgroundColor = "rgba(253,164,40,0.10)";
    } else {
      newAnav.style.backgroundColor = "rgba(252,13,27,0.10)";
    }
    newAnav.addEventListener("click", showContent2);
    function showContent2(e) {
      console.log(e);
      contentLine.innerHTML = "";
      let divContentLine = document.createElement("div");
      divContentLine.classList.add("bordered");
      divContentLine.innerHTML =
        `<h2 class="subtitle"> LIGNE ` +
        tram.line +
        `</h2><br />` +
        tram.message;
      contentLine.appendChild(divContentLine);
    }
  }
}

// étape n°5: tous les calculs: une partie pour les classes et une partie pour les évènements
var requestURL = `https://api-ratp.pierre-grimaud.fr/v4/traffic`;
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = reponseTraffic;
function reponseTraffic() {
  listeMetros = request.response.result.metros;
  listeRers = request.response.result.rers;
  listeTramways = request.response.result.tramways;
  affichageMetro2();
}
