function validateForm() {
    let x = document.getElementsByName("city")[0].value;
    let y = document.getElementsByName("name")[0].value;
    let z = document.getElementsByName("mobilenumber")[0].value;
    let i = document.getElementsByName("emailaddress")[0].value;
    let j = document.getElementsByName("lng")[0].value;
    let k = document.getElementsByName("act")[0].value;
    let l = document.getElementsByName("passwords")[0].value;
    let m = document.getElementsByName("repasswords")[0].value;

    if (x == "") {
      alert("City must be filled out");
      return false;
    }
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
    if (parseFloat(z) <= 0) {
      alert("Mobile Number contains only numbers");
      return false;
    }
    if (i == "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" ){
      alert("Plese enter correct E-mail address. Ex:xxxxx@gmail.com");
      return false;
    }
    if (j == "" ) {
      alert("Language must be filled out");
      return false;
    }

    if (k == "" ) {
        alert("Activities must be filled out");
        return false;
    }
    if (l == "" || m == "" ) {
        alert("Password must be filled out");
        return false;
    }
    if (l != m ) {
        alert("Not match the password");
        return false;
    }
  }


// guide update form
function updatevalidateForm() {
  let x = document.getElementsByName("city")[0].value;
  let y = document.getElementsByName("name")[0].value;
  let z = document.getElementsByName("mobilenumber")[0].value;
  let i = document.getElementsByName("emailaddress")[0].value;
  let j = document.getElementsByName("lng")[0].value;
  let k = document.getElementsByName("act")[0].value;
  let l = document.getElementsByName("passwords")[0].value;
  let m = document.getElementsByName("repasswords")[0].value;

  if (x == "") {
    alert("City must be filled out");
    return false;
  }
  if (y == "") {
      alert("Name must be filled out");
      return false;
  }
  if (parseFloat(z) <= 0) {
    alert("Mobile Number contains only numbers");
    return false;
  }
  if (i == "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" ){
    alert("Plese enter correct E-mail address. Ex:xxxxx@gmail.com");
    return false;
  }
  if (j == "" ) {
    alert("Language must be filled out");
    return false;
  }

  if (k == "" ) {
      alert("Activities must be filled out");
      return false;
  }
  if (l == "" || m == "" ) {
      alert("Password must be filled out");
      return false;
  }
  if (l != m ) {
      alert("Not match the password");
      return false;
  }
}


const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { 
        
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { 
            
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar();
    });
});

function openform(){
  document.getElementById("booking").style.display ="block";
}
function closeform(){
  document.getElementById("booking").style.display ="none";
}

