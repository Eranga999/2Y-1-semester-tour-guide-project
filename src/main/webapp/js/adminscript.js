let menu = document.querySelector('#menu-btn'); 
let navbar = document.querySelector('.header .navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function search(){
    const x = document.getElementById("searchText").value;
    switch(x.toLowerCase()){ 
      case ("Package").toLowerCase(): 
        window.open ("Packages.html");
        break;
      case ("About us").toLowerCase(): 
        window.open ("aboutus.html"); 
      break;
      case ("Home").toLowerCase(): 
      window.open ("home1.html"); 
    break;
    case ("Tour").toLowerCase(): 
      window.open ("Packages.html"); 
    break;
    case ("Down South").toLowerCase(): 
    window.open ("Packages.html"); 
  break;
  case ("Up Country").toLowerCase(): 
    window.open ("Packages.html"); 
  break;
    case ("north").toLowerCase(): 
    window.open ("Packages.html"); 
  break;
    case ("honeymoon").toLowerCase(): 
    window.open ("Packages.html"); 
  break;
    case ("control").toLowerCase(): 
    window.open ("control_page.html"); 
  break;
    }
  }

  

  function myFunction2() {
    let text = "Do you want Delete the profile.";
    if (confirm(text) == true) {
      
    } else {
      
    }
    document.getElementById("demo").innerHTML = text;
  }
  function aboutvalidation(){

    let x = document.getElementsByName("name")[0].value;
    let y = document.getElementsByName("email")[0].value;
    let z = document.getElementsByName("message")[0].value;
    let i = document.getElementsByName("images")[0].value;

    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    if (y == "" ) {
      alert("email must be filled out");
      return false;
    }

    if (z.length < 10 ) {
      alert("please enter more than 10 words");
      return false;
    }

    if (i == "" ) {
      alert("image must be filled out");
      return false;
    }
  }


  function adminupdatevalidation(){

    let x = document.getElementsByName("name")[0].value;
    let y = document.getElementsByName("email")[0].value;
    let z = document.getElementsByName("address")[0].value;
    let i = document.getElementsByName("hobbies")[0].value;
    let j = document.getElementsByName("job")[0].value;
    let k = document.getElementsByName("skill")[0].value;



    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    if (y == "" ) {
      alert("email must be filled out");
      return false;
    }

    if (z == "" ) {
      alert("address must be filled out");
      return false;
    }

    if (i == "" ) {
      alert("hobbies must be filled out");
      return false;
    }
    if (j == "" ) {
      alert("job must be filled out");
      return false;
    }
    if (k == "" ) {
      alert("skills must be filled out");
      return false;
    }
  }


  function adminregistration(){

    let x = document.getElementsByName("name")[0].value;
    let y = document.getElementsByName("email")[0].value;
    let z = document.getElementsByName("address")[0].value;
    let i = document.getElementsByName("hobbies")[0].value;
    let j = document.getElementsByName("job")[0].value;
    let k = document.getElementsByName("skills")[0].value;



    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    if (y == "" ) {
      alert("email must be filled out");
      return false;
    }

    if (z == "" ) {
      alert("address must be filled out");
      return false;
    }

    if (i == "" ) {
      alert("hobbies must be filled out");
      return false;
    }
    if (j == "" ) {
      alert("job must be filled out");
      return false;
    }
    if (k == "" ) {
      alert("skills must be filled out");
      return false;
    }
  }

 
  