function formDone() {
  var airconTime = parseInt(document.getElementById("aircon").value);
  var showerTime = parseInt(document.getElementById("shower").value);

  //Aircon calculate 1ac-> 2.5kw
  var airconConsump = (2.5 * airconTime * 32.28) / 100;
  console.log(airconConsump);

  //shower calculate
  var showerCo2 = showerTime * 0.204;
  console.log(showerCo2);

  var showerEnergy = showerTime * 0.168;
  showerEnergy = showerEnergy.toFixed(2);
  console.log(showerEnergy);
}
