import React from "react";
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";




export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      {status && (
        <Modal closeModal={() => setStatus(false)}>
          <p>This is the modal content</p>
        </Modal>
      )}
      <div className="container">
        <Navbar />
        <Home />
        <img class="image"src="images/Pim.jpg" alt="pim"></img>

        <button className="openModalBtn"  
        onClick={() => setStatus(true)}>Contact Me</button>
      
      </div>
    </div>
  );
}