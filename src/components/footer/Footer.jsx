import React from "react";

const Footer =() => {
   return( 
       <footer className="footer">
        <div class="container">
        <div class="row footer-row">
           <div class="col-lg-3 col-md-6 col-sm-12 foot-col">
             <h1 className="logo">DreamHome</h1>
             <h4>Find Your Dream home</h4>
             <p>Address</p>
             <i class="fas fa-phone">  Tel: +91 6457-8936</i>
             <i class="fas fa-envelope">  Email: dummycompany@mail.com</i>
             <div className="icon-div">
             <a href=" "><i class="fab fa-twitter icons"></i></a>
             <a href=" "><i class="fab fa-facebook-f icons"></i></a>
             <a href=" "><i class="fab fa-linkedin-in icons"></i></a>
             </div>
           </div>
           <div class=" col-lg-3 col-md-6 col-sm-12 foot-col">
             <h5 className="col-head">DASHBOARD</h5>
             <hr size="4" />
             <ul className="foot-list">
                <li> <a href=" ">My Properties</a> </li>
                <li><a href=" ">Create Property</a> </li>
                <li><a href=" ">Customer review</a> </li>
                <li><a href=" ">Edit Profile </a></li>
                <li><a href=" ">Change Password</a> </li>
                <li><a href=" ">Payment</a> </li>
                <li><a href=" ">Login</a> </li>
                <li><a href=" ">Logout</a> </li>
             </ul>
           </div>
           <div class=" col-lg-3 col-md-6 col-sm-12 foot-col">
           <h5 className="col-head">CATEGORIES</h5>
             <hr size="4" />
             <ul className="foot-list">
                <li><a href=" ">Rent</a> </li>
                <li><a href=" ">Land</a> </li>
                <li><a href=" ">Full Furnished</a> </li>
                <li><a href=" ">Floor</a> </li>
                <li><a href=" ">Mortgage‎</a> </li>
             </ul>
           </div>
           <div class=" col-lg-3 col-md-6 col-sm-12 foot-col">
           <h5 className="col-head">QUICK LINKS</h5>
             <hr size="4" />
             <ul>
                <li><a href=" ">About Us</a></li>
                <li><a href=" ">Advertising Terms</a></li>
                <li><a href=" ">Listings Quality Policy</a> </li>
                <li><a href=" ">Terms & Conditions</a></li>
             </ul>
           </div>
        </div>
        </div>
       </footer>

   );
}

export default Footer;