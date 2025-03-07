<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>packagelogin</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" >
     <link rel="stylesheet" href="css/style.css">
</head>

<body>
<section class="header">
    <a href="home1.html" class="logo"> Mytravel.</a>
    <div class="search-box">
        <button class="btn-search" onclick="search()"><i class="fas fa-search"></i></button>
        <input id="searchText" type="text" class="input-search" placeholder="Type to Search...">
    </div> 
    
      <nav class="navbar">
        <a href="home1.jsp">Home</a>
  
     <form action="Package_readServlet" method="post"><input type="submit" value="Package" class="nna"></form>


        <a href="guide.jsp">Guides</a>
        <a href="about.jsp">About</a>
        <a href="review.jsp">Review</a>
           <div class="dropdown">
            <button class="dropbtn"><i ></i>Admins</button>
            <div class="dropdown-content">
                <a href="#">Admin</a>
                <a href="PackageLogin.jsp">Package Manager</a>
               
            </div>
        </div>
        <button class="button"><a href="#"></a>Sign in</button>
    </nav>


    <div id="menu-btn" class="fas fa-bars"></div>

</section>
<section style=" display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background: url(images/img40.jpg) no-repeat;
background-size: cover;
background-position: center;">
<div class="wrapper5" >
    <form action="PackageManagerloginservlet" method="post">
      <h1>Login</h1>
      <div class="input-box5">
        <input type="text"  name="uid" placeholder="Username">
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box5">
        <input type="password"  name="pass" placeholder="Password" >
        <i class='bx bxs-lock-alt' ></i>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox">Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <input type="submit" class="btn5" name="submit" value="Login">
      <div class="register-link">
      
      </div>
    </form>
  </div>
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
    <script src="js/script.js"></script>
</body>

</html>