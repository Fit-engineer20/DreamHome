import React from 'react'
import { Modal } from 'semantic-ui-react'
import Log from "../assets/images/log.svg";


const ModalExampleDimmer = (props) => {
  
  return (
    <div>
      <Modal
        className="mod-main"
        dimmer={props.states.dimmer}
        open={props.states.open}
        onClose={() => {props.toToggle(false) }}
      >
        <Modal.Header className="mod-head">Log In</Modal.Header>
        <Modal.Content className="mod-con">
          <div className="d-flex justify-content-center my-4">
            <img className= "img-fluid w-50" src={Log} alt = "SVG"/>
          </div>
          <form>
            <div class="my-4">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your Email" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="my-4">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
            </div>
            <div className="d-flex align-items-center justify-content-evenly mt-5">
              <button type="submit" class="btn btn-lg btn-warning">Submit</button>
              <button className="btn btn-lg btn-dark" onClick={ () => {props.toToggle(false);} }>Cancel</button>
            </div>
          </form>
          <div className="under-btn text-center my-4">
            Don't have an account? <a href="/" style={{textDecoration:"none"}}> <span style={{color:"#ffb606"}} >Sign Up</span> </a>
          </div>
          <div className="icons d-flex align-items-center justify-content-evenly mt-5">
              <i class="fab fa-2x fb fa-facebook"></i>
              <i class="fab fa-2x tw fa-twitter"></i>
              <i class="fab fa-2x go fa-google"></i>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default ModalExampleDimmer