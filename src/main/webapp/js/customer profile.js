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
  function Customervalidation(){

    let a = document.getElementsByName("name")[0].value;
      let b = document.getElementsByName("age")[0].value;
    let c = document.getElementsByName("email")[0].value;
    let d = document.getElementsByName("address")[0].value;
       let e = document.getElementsByName("psw")[0].value;
    let f = document.getElementsByName("images")[0].value;

    if (a == "") {
      alert("Name must be filled out");
      return false;
    }

    if (b == "" ) {
      alert("age must be filled out");
      return false;
    }

    if (c =="" ) {
      alert("email must be filled out");
      return false;
    }

    if (d == "" ) {
      alert("address must be filled out");
      return false;
    }
  }
      if (d == "" ) {
      alert("psw must be filled out");
      return false;
    }
  

    if (d == "" ) {
      alert("images must be filled out");
      return false;
    }
  



  function Customerupdatevalidation(){


    let g = document.getElementsByName("name")[0].value;
      let h = document.getElementsByName("age")[0].value;
    let i = document.getElementsByName("email")[0].value;
    let j = document.getElementsByName("address")[0].value;
       let k = document.getElementsByName("psw")[0].value;
    let l = document.getElementsByName("images")[0].value;




    if (g == "") {
      alert("Name must be filled out");
      return false;
    }

    if (h == "" ) {
      alert("age must be filled out");
      return false;
    }

    if (i == "" ) {
      alert("email must be filled out");
      return false;
    }

    if (j == "" ) {
      alert("address must be filled out");
      return false;
    }
    if (k == "" ) {
      alert("password must be filled out");
      return false;
    }
    if (l == "" ) {
      alert("image must be filled out");
      return false;
    }
    

  }

  