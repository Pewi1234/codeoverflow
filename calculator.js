function formDone() {
  const cost = 32.38/100;
  var airconTime = parseInt(document.getElementById("aircon").value);
  var showerTime = parseInt(document.getElementById("shower").value);
  var lightTime = parseInt(document.getElementById("lights").value);
  var fanTime = parseInt(document.getElementById("fans").value); //time fan left on
  var fanNumber = parseInt(document.getElementById("fan-number").value); //num of fans

  //Aircon calculate 1ac-> 2.5kw
  var airconCost = 2.5 * airconTime * cost;
  console.log(airconCost);

  //shower calculate
  var showerCo2 = showerTime * 0.204;
  console.log(showerCo2);

  var showerEnergy = showerTime * 0.168;
  showerEnergy = showerEnergy.toFixed(2);
  console.log(showerEnergy);

  //light calculate
  var lightEnergy = 60/1000 * lightTime * 17;
  var lightCost = lightEnergy * cost;
  lightCost = lightCost.toFixed(2);
  console.log(lightCost);

  //fan calculate - each fan 70 watts
  var fanEnergy = 70/1000 * fanTime * cost * fanNumber;
  fanEnergy = fanEnergy.toFixed(2);
  console.log(fanEnergy);
}
