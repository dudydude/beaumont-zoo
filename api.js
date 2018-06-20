var long = 2.078845;
var lat = 48.296187;
var apiKey = "bcc1f5d8dbb3a7962e287688322e8b8d";
var cityId = 3028198;

var logoSun = "../images/sun.png";
var logoPluie = "../images/rain.png";
var logoNuages = "../images/nuage.png";

var date = new Date();
var day = date.getDay();

var apiGoogle = "AIzaSyBnFVn9BI7PW3OrHEOngOtF1mdIUBwfneE";

// API METEO

var xmlhttp = new XMLHttpsRequest();

var url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${apiKey} `;

xmlhttp.onreadystatechange = function() {
  var midi = [];
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);

    for (i = 0; i < myArr.list.length; i++) {
      console.log(myArr.list[i].dt_txt[11] + myArr.list[i].dt_txt[12]);
      if (myArr.list[i].dt_txt[11] + myArr.list[i].dt_txt[12] === "15") {
        midi.push(myArr.list[i]);
      } else continue;
    }
    console.log(midi);
    array(midi);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function array(arr) {
  $("#meteo .meteo").remove();

  for (i = 0; i < arr.length; i++) {
    if (arr[i].weather[0].description == "clear sky") {
      $("#meteo ").append(
        `<li> 
            <h3>${moment(arr[i].dt_txt).format("dddd")}</h3>
        <img src=${logoSun}></br> <p class="temperature"> Température moyenne : <br>` +
          (arr[i].main.temp_max + arr[i].main.temp_max) / 2 +
          " °C </p></li>"
      );
    } else if (arr[i].weather[0].description.indexOf("clouds") !== -1) {
      $("#meteo ").append(
        `<li> 
        <h3>${moment(arr[i].dt_txt).format("dddd")}</h3>
        <img src=${logoNuages}></br> <p class="temperature"> Température moyenne : <br>` +
          (arr[i].main.temp_max + arr[i].main.temp_max) / 2 +
          " °C </p></li>"
      );
    } else
      $("#meteo ").append(
        `<li> 
        <h3>${moment(arr[i].dt_txt).format("dddd")}</h3>
        <img src=${logoPluie}></br> <p class="temperature"> Température moyenne : <br>` +
          (arr[i].main.temp_max + arr[i].main.temp_max / 2) +
          " °C </p></li>"
      );
  }
}

//API GOOGLE MAPS
