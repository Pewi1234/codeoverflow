function formdone() {
  var airconTime = parseInt(document.getElementById("aircon"));
  var heaterTime = parseInt(document.getElementsById("heater"));

  //Aircon calculate 1ac-> 2.5kw

  var airconConsump = (2.5 * airconTime * 32.28) / 100;
  console.log(airconConsump);
}
