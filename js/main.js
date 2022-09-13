/**
 * @author Nika
 * @since 2022.09.13
 */

'use strict';

//recuperer les elements du formulaire
const formulaire = document.querySelector('form');

//ecouter le formulaire
formulaire.addEventListener('submit', function (event){
    //annuler l'envoi du formulaire
    event.preventDefault();
    alert('Envoyé !');
});

//recuperer les elements liste deroulante
const listeBackground = document.getElementById('background');

//ecouter le changement de la valeur de la liste deroulante
listeBackground.addEventListener('change', function(){
    const image = `./img/backgounds/${listeBackground.value}`;
    //changer l'image en fonction du choix choisi
    document.body.style.backgroundImage = `url(image)`
});


