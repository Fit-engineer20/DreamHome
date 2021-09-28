import React from "react";
import top_img from "../../assets/images/img-1.png";

const Top = ({toToggle}) => {

    return(     
        <>
      <div className="head" >
       <img className="top-img" src={top_img} />
       <div className="membrane"></div>
       <nav className="navbar navbar-expand-lg navbar-light">
           <div className="container-fluid">
             <a className="navbar-brand brand" href="#">DreamHome</a>
             <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav nav-option ms-auto">
                 <li className="nav-item ">
                   <a className="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Properties</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Categories</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Agents</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Contact</a>
                 </li>
                 <li className="nav-item">
                 <button type="button" class="btn btn-outline-dark login nav-btn" onClick = {() => {toToggle(true)}}>LOGIN</button>
                 </li>
                 <li className="nav-item">
                 <button type="button" class="btn btn-outline-dark signup nav-btn" onClick = {() => {toToggle(true)}}>SIGN UP</button>
                 </li>
               </ul>
             </div>
           </div>
          </nav>

          <div className="top-text">
            <h1 className="text-head">Find Your <span>Dream Home</span></h1>
            <p className="text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidica.</p>
          </div>
      </div>
    </>
    );
}
export default Top;