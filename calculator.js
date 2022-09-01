function printForm() {
  document.getElementById("form").style.display = "none";
  document.getElementById("shit").style.display = "block";
  
}


function formDone() {
  printForm();
  const cost = 32.38/100;
  var airconTime = parseInt(document.getElementById("aircon").value);
  var showerTime = parseInt(document.getElementById("shower").value);
  var lightTime = parseInt(document.getElementById("lights").value);
  var fanTime = parseInt(document.getElementById("fans").value); //time fan left on
  var fanNumber = parseInt(document.getElementById("fan-number").value); //num of fans

  //Aircon calculate 1ac-> 2.5kw
  var airconCost = 2.5 * airconTime * cost * 30;
  airconCost = airconCost.toFixed(2); //
  console.log(airconCost);

  //shower calculate
  var showerCo2 = showerTime * 0.204 * 30;
  showerCo2 = showerCo2.toFixed(2);
  console.log(showerCo2);

  var showerEnergy = showerTime * 0.168 * 30;
  showerEnergy = showerEnergy.toFixed(2);
  console.log(showerEnergy);

  //light calculate
  var lightEnergy = 60/1000 * lightTime * 17 * 30;
  var lightCost = lightEnergy * cost;
  lightCost = lightCost.toFixed(2); //
  console.log(lightCost);

  //fan calculate - each fan 70 watts
  var fanEnergy = 70/1000 * fanTime * fanNumber * 30;
  fanEnergy = fanEnergy.toFixed(2);
  console.log(fanEnergy);
  var fanCost = fanEnergy * cost;
  fanCost = fanCost.toFixed(2); //
  console.log(fanCost);
}
