import React from "react";
import Procards from "./ProCards.jsx";
import Prodata from "./ProData.jsx";

const Properties = ({toToggle}) => {

    const proCard= (values) =>{
        return(
            <Procards 
            key={values.id}
            img={values.img}
            title={values.title}
            rooms={values.rooms}
            beds={values.beds}
            baths={values.baths}
            />
        );
    }

    return( 
       <>
        <div className="pro-div">

            <div className="pro-sub-div">
                <h1>Featured Properties</h1>
                <p>Find the latest homes for sale, property news & real estate market data</p>
                <hr size="4"/>
                <button type="button" class="btn btn-outline-dark" onClick= {() => {toToggle(true)}} >View All Properties</button>
            </div>
            <div class="container">
                <div class="row pro-row">
                   {Prodata.map(proCard)}
                </div>
        </div>
        </div>
       </>
    );
}

export default Properties;