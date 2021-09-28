import React from "react";

const Locards = (props) => {
    return(
        <div class="col col-md-6 col-lg-4 col-sm-12">
        <div className="card loc-card">
          <img src={props.img} alt={props.name} />
          <a className="card-title" href=" ">{props.locname}</a>
          </div>
        </div>
    );
}
export default Locards; 