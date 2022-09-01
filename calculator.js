function doneForm() {
  document.getElementById("form").style.display = "none";
  document.getElementById("tabel").style.display = "block";
  const cost = 32.38/100;
  var airconTime = parseInt(document.getElementById("aircon").value);
  var showerTime = parseInt(document.getElementById("shower").value);
  var lightTime = parseInt(document.getElementById("lights").value);
  var fanTime = parseInt(document.getElementById("fans").value); //time fan left on
  var fanNumber = parseInt(document.getElementById("fan-number").value); //num of fans

  //Aircon calculate 1ac-> 2.5kw
  var airconEnergy = 2.5 * airconTime;
  var airconCost = airconEnergy * cost * 30;
  airconCost = airconCost.toFixed(2);

  //shower calculate
  var showerCo2 = showerTime * 0.204 * 30;
  showerCo2 = showerCo2.toFixed(2);

  var showerEnergy = showerTime * 0.168 * 30;
  showerEnergy = showerEnergy.toFixed(2);

  var showerCost = showerEnergy * cost;
  showerCost = showerCost.toFixed(2);

  //light calculate
  var lightEnergy = 60/1000 * lightTime * 17 * 30;
  var lightCost = lightEnergy * cost;
  lightCost = lightCost.toFixed(2);

  //fan calculate - each fan 70 watts
  var fanEnergy = 70/1000 * fanTime * fanNumber * 30;
  fanEnergy = fanEnergy.toFixed(2);

  var fanCost = fanEnergy * cost;
  fanCost = fanCost.toFixed(2);

  //Adding the data to the table
  document.getElementById("airconconsumption").innerText=airconEnergy+"kWh";
  document.getElementById("airconco2").innerText=(airconEnergy*0.40)+"kg";
  document.getElementById("heaterconsumption").innerText=showerEnergy+"kWh";
  document.getElementById("heaterc02").innerText=(showerEnergy*0.40)+"kg";
  document.getElementById("lightsconsumption").innerText=lightEnergy+"kWh"; //
  document.getElementById("lightsco2").innerText=(lightEnergy*0.40)+"kg"; //
  document.getElementById("lightsachieve").innerText=airconEnergy+"kWh"; //
  document.getElementById("fansconsumption").innerText=fanEnergy+"kWh";//
  document.getElementById("fansco2").innerText=(fanEnergy*0.40)+"kg";//
  //document.getElementById("fansachieve").innerText=;
}
