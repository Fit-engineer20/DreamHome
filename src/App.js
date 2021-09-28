import React, {useState} from "react";
import Top from "./components/top-section/Top.jsx";
import Service from "./components/serviceSec/Services.jsx";
import Location from "./components/locations/Locations.jsx";
import Properties from "./components/properties/Properties.jsx";
import Footer from "./components/footer/Footer.jsx";
import Modal from "./components/Modal.jsx";

function App() {

  const [state, setState] = useState( {open: false,  dimmer: 'blurring'});

  const Toggle = (prop) => {
    setState({ ...state, open: prop })
  }

  return (
    <>
      <Top toToggle={Toggle} />
      <Service />
      <Properties toToggle={Toggle} />
      <Location toToggle={Toggle} />
      <Footer />
      <Modal states= {state} toToggle={Toggle} />
    </> 
  );
}

export default App;
