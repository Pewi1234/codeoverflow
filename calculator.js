function formDone() {
  var airconTime = parseInt(document.getElementById("aircon").value);
  var showerTime = parseInt(document.getElementById("shower").value);

  //Aircon calculate 1ac-> 2.5kw
  var airconConsump = (2.5 * airconTime * 32.28) / 100;
  console.log(airconConsump);
}
