import React from "react";

const Procards = (props) => {
    return(
        <div class="col col-md-6 col-lg-4 col-sm-12">
        <div className="card pro-card">
          <img src={props.img} alt={props.title} />
          <div className="pro-content">
            <h4>{props.title}</h4>
            <div className="d-flex flexbox justify-content-between">
              <div>
               <i class="fas fa-home"> {props.rooms}</i>
              </div>
              <div>
               <i class="fas fa-bed"> {props.beds}</i>
              </div>
              <div>
               <i class="fas fa-bath"> {props.baths}</i>
              </div>
            </div>
            <hr />
            <button type="button" class="btn btn-outline-dark card-view-btn">View Details</button>
          </div>
          </div>
        </div>
    ); 
}
export default Procards; 