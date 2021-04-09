function reinitialiser_formulaire(){
    document.getElementById('input_nom_fr').value = "" ;
    document.getElementById('input_nom_eng').value = "" ;
    document.getElementById('input_univers').value = "" ;
    document.getElementById('input_hp').value = "" ;
    document.getElementById('input_atk').value = "" ;
    document.getElementById('input_atks').value = "" ;
    document.getElementById('identifiant').value = String(parseInt(document.getElementById('identifiant').value) + 1);
}

function changer_nom_fr(){
    nom_fr = document.getElementById('input_nom_fr').value
    actualiser_variable_perso()
}

function changer_nom_eng(){
    nom_eng = document.getElementById('input_nom_eng').value
    actualiser_variable_perso()
}

function changer_univers(){
    univers = document.getElementById('input_univers').value
    actualiser_variable_perso()
}
function changer_stats(){
    hp = document.getElementById('input_hp').value
    atk = document.getElementById('input_atk').value
    atks = document.getElementById('input_atks').value
    actualiser_variable_perso()
}
nom_fr=""
nom_eng=""
univers=""
rarete = ""
hp =""
atk=""
atks=""
identifiant=""
// NOM fr NOM eng        |   Rareté 
// Univers 
// Stats                 |   Image

$(document).ready(
    z()
    )

function z() {
    document.getElementsByClassName('eternal')[0].addEventListener('click', function() {rarete = "Eternal";actualiser_variable_perso()})
    document.getElementsByClassName('mythical')[0].addEventListener('click', function() {rarete = "Mythical";actualiser_variable_perso()})
    document.getElementsByClassName('legendary')[0].addEventListener('click', function() {rarete = "Legendary";actualiser_variable_perso()})
    document.getElementsByClassName('epic')[0].addEventListener('click', function() {rarete = "Epic";actualiser_variable_perso()})
    document.getElementsByClassName('rare')[0].addEventListener('click', function() {rarete = "Rare";actualiser_variable_perso()})
    document.getElementsByClassName('common')[0].addEventListener('click', function() {rarete = "Common";actualiser_variable_perso()})
    document.getElementById('reset').addEventListener('click', function() {rarete = "Common";reinitialiser_formulaire()})
    

}
function actualiser_variable_perso(){
    identifiant = document.getElementById('identifiant').value
    z = document.getElementById('pasta');
    z.innerHTML = 'Personnage("b' + identifiant + '", { "FR" :  "' + nom_fr + '", "ENG" :  "' + nom_eng + '"},  "' + univers + '", "' + rarete + '", '+hp +', '+ atk +', ' + atks + ', "Aucune",{"FR" : "","ENG" : ""},{"FR" : "","ENG" : ""},{"FR" : "","ENG" : ""},{"FR" : "","ENG" : ""})'
}




function copier(){
    copiage = document.getElementById('pasta').innerHTML;
    navigator.clipboard.writeText(copiage);
    document.execCommand("copy");
}