let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});

// function pledge(){
//         //var name = document.getElementsByName("name");
//         var name = document.getElementById('name').value;
//         var message =  document.getElementById('message').value;
//         //let name = document.createElement("p");
//         //name.style.color = "darkgreen";
//         //name.style.weight = "bold";
//         let ele = document.createElement("p");
//         let na = document.createElement("p");
//         na.innerText = name;
//         na.style.color = "green";
//         ele.innerText = message;
//         document.getElementById('pledge').appendChild(na);
//         document.getElementById('pledge').appendChild(ele);
//         }
