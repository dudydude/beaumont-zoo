var time = new Date().getDate();
var timeBeforeBeaumont = 30 - time + 14;

// AFFICHAGE D'UN MESSAGE PERSO SELON LE TEMPS RESTANT AVANT BEAUMONT

if (timeBeforeBeaumont < 3) {
  $(".soon").append(
    "Presque, alors prépare ton sac, sort ton plus beau maillot, et repose toi un peu tu en aura besoin 😇"
  );
} else if (timeBeforeBeaumont < 10) {
  $(".soon").append(
    "Plus qu'une petite dizaine de jour, si tu n'as pas encore participé à la cagnotte c'est par ici ==> <a href=''>💰</a>, pour le trajet c'est par ici <a href='Extra-pages/road.html'>🚀</a>"
  );
} else
  $(".soon").append(
    "Encore un peu de patience morveux 👌 <br> Tout viens à point à qui sait attendre, en attendant chope ton plus beau déguisement et prépare ton saucisse body"
  );

// AFFICHAGE DU NOMBRE DE JOURS RESTANT

$(".timeLeft").append(
  "Il ne te reste plus que <span class='jour'>" +
    timeBeforeBeaumont +
    "</span>" +
    " jours à attendre"
);

console.log(
  "Léo ou Jordi ou Antoine si vous regardez ça ne juger pas mon code 🙈 c'est tout cracra mais je voulais faire ça en balle 🌈"
);
