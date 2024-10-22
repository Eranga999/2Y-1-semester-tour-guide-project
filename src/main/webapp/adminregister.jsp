<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Registration</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" >
     <link rel="stylesheet" href="css/adminstyle.css">
</head>

<body>
<section class="header">
    <a href="home1.html" class="logo"> Mytravel.</a>
    <div class="search-box">
        <button class="btn-search" onclick="search()"><i class="fas fa-search"></i></button>
        <input id="searchText" type="text" class="input-search" placeholder="Type to Search...">
    </div> 
    
    <nav class="navbar">
        <a href="home1.html">Home</a>
        <a href="Packages.html">Packages</a>
        <a href="guide.html">Guides</a>
        <a href="about.html">About</a>
        <a href="review.html">Review</a>
        <button class="button"><a href="#"></a>Log in</button>
    </nav>

    <div id="menu-btn" class="fas fa-bars"></div>

</section>


<div class="heading" style="background:url(images/adre.jpg) no-repeat">
<h1>ADMIN REGISTRATION</h1>
</div>

<section class="pack">
    <h1 class="heading-title">REGISTRATION</h1>
    <form action="AdminInsertservlet" method="post" class="new-pack" onsubmit="adminregistration()" name="newform" >
     <div class="flex">
         <div class="inputbox">
           <Span> name</Span>
           <input type="text" placeholder="enter  name" name="name">
         </div>

          <div class="inputbox">
            <Span>email</Span>
            <input type="mail" placeholder="enter your email" name="email">
          </div>

          <div class="inputbox">
            <Span>address</Span>
            <input type="text" placeholder="enter your address" name="address">
          </div>


          <div class="inputbox">
            <Span>password</Span>
            <input type="text" placeholder="enter your hobbies" name="password">
          </div>


          <div class="inputbox">
            <Span>job</Span>
            <input type="text" placeholder="enter your job" name="job">
          </div>


          <div class="inputbox">
            <Span>skills</Span>
            <input type="text" placeholder="enter your skills" name="skills">
          </div>

          <div class="inputbox">
            <Span>images</Span>
            <input type="file" placeholder="drop image" name="images">
          </div>


      </div>
      <input type="submit" name="send" id="" class="btn" value="REGISTER">
    </form>
</section>


<section class="footer">
    <div class="box-container">
        <div class="box">
            <h3>Quick links</h3>
            <a href="home1.html"><i class="fas fa-angle-right"></i>Home</a>
            <a href="Packages.html"><i class="fas fa-angle-right"></i>Packages</a>
            <a href="guide.html"><i class="fas fa-angle-right"></i>Guides</a>
            <a href="about.html"><i class="fas fa-angle-right"></i>About</a>
            <a href="review.html"><i class="fas fa-angle-right"></i>Review</a>
        </div>

        <div class="box">
            <h3>extra links</h3>
            <a href="#"><i class="fas fa-angle-right"></i>ask</a>
            <a href="#"><i class="fas fa-angle-right"></i>about us</a>
            <a href="#"><i class="fas fa-angle-right"></i>privacy policy</a>
            <a href="#"><i class="fas fa-angle-right"></i>terms of travels</a>
            
        </div>
        <div class="box">
            <h3>contact information </h3>
            <a href="#"><i class="fas fa-phone"></i>0718995482</a>
            <a href="#"><i class="fas fa-phone"></i>0778351008</a>
            <a href="#"><i class="fas fa-envelope"></i>teamPisso@gmail.com</a>
            <a href="#"><i class="fas fa-map"></i>Sri lanka, Malabe</a>

        </div>
        <div class="box">
            <h3>follow us </h3>
            <a href=""><i class="fab fa-facebook-f"></i>facebook</a>
            <a href=""><i class="fab fa-twitter"></i>twitter</a>
            <a href=""><i class="fab fa-instagram"></i>instagram</a>
            <a href=""><i class="fab fa-linkedin"></i>linkedin</a>
            
        </div>
    </div>
    <div class="credit"> created by <span>Team Pisso </span> | all rigth reserved!</div>
</section>


    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="adminjs/adminreg.js"></script>
</body>

</html>