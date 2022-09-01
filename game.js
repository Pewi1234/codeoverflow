function reload(){
  location.reload()
}
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
function myPlayFunction(){
  var character = document.getElementById("character");
  var block = document.getElementById("block");
  var counter=0;
  block.style.display = "block";
  character.style.display = "block";
  document.getElementById("scoreSpan").style.display = "block"
  var checkDead = setInterval(function() {
      let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
          block.style.animation = "none";
          alert("Game Over... Your score: "+Math.floor(counter/100));
          counter=0;
          //block.style.animation = "block 1s infinite linear";
          document.getElementById("scoreSpan").style.display = "none";
          document.getElementById("again").style.display = "block";
          document.getElementById("again").style.margin = "auto";
          document.getElementById("again").innerText = "Play again?";

      }else{
          counter++;
          document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
      }
  }, 10);
}
