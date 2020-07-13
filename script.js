// étape n°1: squelette HTML
//étape n°2 : récupérer les parties du DOM dont on a besoin
let listeMetrosDOM = document.getElementById("listeMetros");
let listeRersDOM = document.getElementById("listeRer");
let listeTramDOM = document.getElementById("listeTrams");

// étape n°4 les données: création des variables
let listeMetros = [];
let listeRers = [];
let listeTramways = [];

// étape n°3 : création des fonctions d'affichage
// ici on décide d'avoir une fonction d'affichage générale et des fonction d'affichages spécifiques à chaque parties.
// De cette façon on peut prévénir tout imprévu en n'utilisant une fonction pour une partie ou pour le tout.
function affichage() {
  affichageMetro();
  affichageRER();
  affichageTram();
}

function affichageMetro() {
  for (let m of listeMetros) {
    console.log(m.line, m.message);
    let newDivLigne = document.createElement("div");
    newDivLigne.classList.add("ligneBlock");
    if (m.slug == "normal") {
      console.log("normal");
      newDivLigne.style.borderColor = "green";
      newDivLigne.style.backgroundColor = "rgba(15,127,18,0.10)";
    } else if (m.slug == "normal_trav") {
      console.log("travaux");
      newDivLigne.style.borderColor = "orange";
      newDivLigne.style.backgroundColor = "rgba(253,164,40,0.10)";
    } else {
      newDivLigne.style.borderColor = "red";
      newDivLigne.style.backgroundColor = "rgba(252,13,27,0.10)";
    }

    newDivLigne.innerHTML =
      `<h5 class="title is-5">Ligne ` +
      m.line +
      `</h5>
      <p id="etatDuTraffic">` +
      m.message +
      `</p>`;
    listeMetrosDOM.appendChild(newDivLigne);
  }
}

function affichageRER() {
  for (let r of listeRers) {
    console.log(r.line, r.message);
    let newDivLigneRer = document.createElement("div");
    newDivLigneRer.classList.add("ligneBlock");
    if (r.slug == "normal") {
      newDivLigneRer.style.borderColor = "green";
      newDivLigneRer.style.backgroundColor = "rgba(15,127,18,0.10)";
    } else if (r.slug == "normal_trav") {
      console.log("travaux");
      newDivLigneRer.style.borderColor = "orange";
      newDivLigneRer.style.backgroundColor = "rgba(253,164,40,0.10)";
    } else {
      newDivLigneRer.style.borderColor = "red";
      newDivLigneRer.style.backgroundColor = "rgba(252,13,27,0.10)";
    }

    newDivLigneRer.innerHTML =
      `<h5 class="title is-5">Ligne ` +
      r.line +
      `</h5>
      <p id="etatDuTraffic">` +
      r.message +
      `</p>`;
    listeRersDOM.appendChild(newDivLigneRer);
  }
}

function affichageTram() {
  for (let t of listeTramways) {
    console.log(t.line, t.message);
    let newDivLigneTram = document.createElement("div");
    newDivLigneTram.classList.add("ligneBlock");
    if (t.slug == "normal") {
      newDivLigneTram.style.borderColor = "green";
      newDivLigneTram.style.backgroundColor = "rgba(15,127,18,0.10)";
    } else if (t.slug == "normal_trav") {
      console.log("travaux");
      newDivLigneTram.style.borderColor = "orange";
      newDivLigneTram.style.backgroundColor = "rgba(253,164,40,0.10)";
    } else {
      newDivLigneTram.style.borderColor = "red";
      newDivLigneTram.style.backgroundColor = "rgba(252,13,27,0.10)";
    }

    newDivLigneTram.innerHTML =
      `<h5 class="title is-5">Ligne ` +
      t.line +
      `</h5>
      <p id="etatDuTraffic">` +
      t.message +
      `</p>`;
    listeTramDOM.appendChild(newDivLigneTram);
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
  affichage();
}
