var time = new Date().getDate();
var timeBeforeBeaumont = 30 - time + 14;

// AFFICHAGE D'UN MESSAGE PERSO SELON LE TEMPS RESTANT AVANT BEAUMONT

if (timeBeforeBeaumont < 3) {
  $(".soon").text(
    "Mais presque, alors prépare ton sac, sort ton plus beau maillot (fait un petit tour sur la météo ici d'abord ==> ) et repose toi un peu tu en aura besoin 😇"
  );
} else if (timeBeforeBeaumont < 10) {
  $(".soon").text(
    "Plus qu'une petite dizaine de jour, si tu n'as pas encore participé à la cagnotte c'est par ici ==> , pour le trajet c'est par ici ==>"
  );
} else
  $(".soon").text(
    "Mais presque, alors prépare ton sac, sort ton plus beau maillot et repose toi un peu tu en aura besoin 😇"
  );

// AFFICHAGE DU NOMBRE DE JOURS RESTANT

$(".timeLeft").append(
  "Il ne te reste plus que <span class='jour'>" +
    timeBeforeBeaumont +
    "</span>" +
    " jours à attendre"
);
