import React from 'react'

import * as ReactBootstrap from "react-bootstrap";
function Sechead() {
  return (
    <div class="secnav">
      <ReactBootstrap.Navbar mergin-left="5%"className="secline" style={{'position':"-webkit-sticky"}}container>
    
    <ReactBootstrap.Nav className="app">
      <ReactBootstrap.Nav.Link margin-left="8%"href="#new"><button class="eff">NEW_IN</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#bab"><button class="eff">BABY</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#gal"><button class="eff">GIRLS</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#boys"><button class="eff">BOYS</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#cloths"><button class="eff">CLOTHING</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#shoes"><button class="eff">SHOES</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#accessories"><button class="eff">ACCESSORIES</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#sport"><button class="eff">SPORTS</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#mod"><button class="eff">MODEST WEAR</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#mod"><button class="eff">HOBBIES & TOYS</button></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#brands"><button class="eff">BRANDS</button></ReactBootstrap.Nav.Link>

    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar>
      
    </div>
  )
}

export default Sechead