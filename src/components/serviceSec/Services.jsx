import React from "react";
import Card from "./ServiceCard.jsx";
import Cdata from "./CardData.jsx";

const Service = () => {

  const Cards = (values) =>{
    
    return(
       <Card 
       key={values.id}
       icon={values.icon}
       title={values.title}
       text={values.text}
       />
    );

  }
    return(
        <>
        <div className="serv-head">
          <h1>Best Services</h1>
          <p>We can give you the best service</p>
          <hr size="4"/>
        </div>
        <div class="container services">
          <div class="row">
             {Cdata.map(Cards)}
          </div>
       </div>

      </> 
    );
}
export default Service;