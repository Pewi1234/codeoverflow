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
  var airconEnergy = 2.5 * airconTime * 4;
  var airconCost = airconEnergy * cost * 30;
  airconCost = airconCost.toFixed(2);

  //shower calculate
  var showerEnergy = showerTime * 0.168 * 30;
  showerEnergy = showerEnergy.toFixed(2);

  var showerCost = showerEnergy * cost;
  showerCost = showerCost.toFixed(2);

  //light calculate
  var lightEnergy = 60/1000 * lightTime * 12 * 30;
  var lightCost = lightEnergy * cost;
  lightCost = lightCost.toFixed(2);

  //fan calculate - each fan 70 watts
  var fanEnergy = 70/1000 * fanTime * fanNumber * 30;
  fanEnergy = fanEnergy.toFixed(2);

  var fanCost = fanEnergy * cost;
  fanCost = fanCost.toFixed(2);

  //Adding the data to the table
  document.getElementById("airconconsumption").innerText=airconEnergy.toFixed(2)+"kWh";
  document.getElementById("airconco2").innerText=(airconEnergy*0.40).toFixed(2)+"kg";
  document.getElementById("airconachieve").innerText="You can reduce your carbon footprint by setting your aircon temperature not less than 25 degrees";
  document.getElementById("heaterconsumption").innerText=showerEnergy+"kWh";
  document.getElementById("heaterco2").innerText=(showerEnergy*0.40).toFixed(2)+"kg";
  document.getElementById("heaterachieve").innerText="You can reduce your carbon footprint by taking showers not longer than 5 minutes";
  document.getElementById("lightsconsumption").innerText=lightEnergy.toFixed(2)+"kWh"; //
  document.getElementById("lightsco2").innerText=(lightEnergy*0.40).toFixed(2)+"kg"; //
  document.getElementById("lightsachieve").innerText="You can reduce your carbon footprint by turning off the lights when they nobody is in that particular room"; //
  document.getElementById("heaterco2").innerText=(showerEnergy*0.40).toFixed(2)+"kg";//
  document.getElementById("lightsconsumption").innerText=lightEnergy.toFixed(2)+"kWh"; //
  document.getElementById("lightsco2").innerText=(lightEnergy*0.40).toFixed(2)+"kg"; //
  document.getElementById("fansconsumption").innerText=fanEnergy+"kWh";//
  document.getElementById("fansco2").innerText=(fanEnergy*0.40).toFixed(2)+"kg";//
  document.getElementById("fansachieve").innerText="You can reduce your carbon footprint by turning off the fans when nobody is using it";

}
