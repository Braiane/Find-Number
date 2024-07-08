var verif = document.getElementById('verifier');
var recommence = document.getElementById('recommencer');
var message = document.getElementById('message');
var player = document.getElementById('joueur');

const nombresecret = Math.floor(Math.random() *100);
let attemps = 500;

verif.onclick = function(){
    const input = document.getElementById('afficheur');
    if(afficheur.value != ""){
        if(afficheur.value > nombresecret){
            message.innerHTML = "Le nombre secret est plus petit que " + afficheur.value;
            message.style.color = "blue";
        } else if(afficheur.value < nombresecret){
            message.innerHTML = "Le nombre secret est plus grand que " + afficheur.value;
            message.style.color = "blue";
        }

        if(attemps == 0){
            message.innerHTML = "Vous avez perdu, il fallait trouvez "+ nombresecret;
            message.style.color = "red";
            player.style.display = 'none';
            verif.style.display = 'none';
            recommence.style.display = 'flex';
        }

        attemps--;

        if(input.value == nombresecret){
            message.innerHTML = "Bravo, le nombre secret est bien "+ nombresecret;
            message.style.color = "green";
            verif.style.display = 'none';
            player.style.display = 'none';
            recommence.style.display = 'flex';
        }

    } else {
        message.innerHTML = "Veuillez entrer un nombre"
        message.style.color = "red";
    }
}