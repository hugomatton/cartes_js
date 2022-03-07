// tableau contenant les 52 cartes d'un jeu
const jeu = [  "01_carreau","02_carreau","03_carreau","04_carreau","05_carreau","06_carreau","07_carreau","08_carreau","09_carreau","10_carreau","11_carreau","12_carreau","13_carreau",
				 "01_coeur","02_coeur","03_coeur","04_coeur","05_coeur","06_coeur","07_coeur","08_coeur","09_coeur","10_coeur","11_coeur","12_coeur","13_coeur",
				 "01_pique","02_pique","03_pique","04_pique","05_pique","06_pique","07_pique","08_pique","09_pique","10_pique","11_pique","12_pique","13_pique",
				 "01_trefle","02_trefle","03_trefle","04_trefle","05_trefle","06_trefle","07_trefle","08_trefle","09_trefle","10_trefle","11_trefle","12_trefle","13_trefle"];

//on recupère la balise contenant les cartes
let cartes = document.getElementById("cartes")

//question 1
let carte_q1 = document.createElement("img")
carte_q1.id = "04_pique"
carte_q1.setAttribute("src", "cartes/04_pique.gif")

cartes.appendChild(carte_q1)

//question 11
let verifierCarteDejaChoisie = function(nom_carte){
	let res = true
	let lesCartes = document.getElementById("cartes").childNodes
	for(c of lesCartes){
		if(c.id == nom_carte){
			res = false
		}
	}
	return res
}

//question 2
let ajouterCarte = function(nom){
	let ajout_ok = false
	if(verifierCarteDejaChoisie(nom)){
		let carte = document.createElement("img")
		carte.id = nom
		carte.setAttribute("src", `cartes/${nom}.gif`)
		document.getElementById("cartes").appendChild(carte)
		ajout_ok = true
	}
	return ajout_ok
}


//question 3
let retournerCarteVerso = function(nom) {	
	//création du verso
	let verso = document.createElement("img")
	verso.setAttribute("src", "./cartes/verso.gif")
	verso.id = nom+"verso"
	//retournement de la carte
	let carte = document.getElementById(nom)
	//on verifie que la carte existe
	if(carte != null){
		carte.style.display = "none"
		carte.parentElement.insertBefore(verso, carte)
	}
}

//question 4
let retournerCarteRecto = function(nom){
	//on supprime le verso
	let verso = document.getElementById(nom+"verso")
	if(verso != null){
		verso.remove()
		document.getElementById(nom).style.display = "inline"
	}
	//on change le display
}

//question 5
let carteHasard = function(jeu){
	let index = Math.floor(Math.random()*jeu.length)
	return jeu[index]
}

//question 6
let afficherCarte = function(jeu){
	let ajout = ajouterCarte(carteHasard(jeu))
	while(!ajout){
		ajout = ajouterCarte(carteHasard(jeu))
	}
}


//question 10
let afficherNCartes = function(N, jeu){
	for (let i = 0; i < N; i++){
		afficherCarte(jeu)
	}
}

afficherNCartes(5,jeu)

//question 12
let couleurCarte = function(nom){
	let color
	if(nom.includes("pique")){
		color = "noir"
	}
	if(nom.includes("trefle")){
		color = "noir"
	}
	if(nom.includes("coeur")){
		color = "rouge"
	}
	if(nom.includes("carreau")){
		color = "rouge"
	}
	return color
}

let mainIsColor = function(){
	let couleur = true
	let color_first_card = couleurCarte(document.getElementById("cartes").firstElementChild.id)
	let cartes = document.getElementById("cartes").childNodes
	for(let i = 1; i < cartes.length; i++){
		let c = cartes[i]
		let color_c = couleurCarte(c.id)
		if(color_first_card != color_c){
			couleur = false
		}
	}
	return couleur
}
console.log(mainIsColor())





