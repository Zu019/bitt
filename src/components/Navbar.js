import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {DropdownButton, ButtonGroup, Dropdown, Collapse} from 'react-bootstrap'
import '../assets/navbar.css'

class Navbar extends React.Component {
  render() {
      return(
  <div id="nav-bar">
  {['left'].map((direction) => (
    <DropdownButton
      as={ButtonGroup}
      key={direction}
      id="dropbtn"
      drop={direction}
      variant="secondary"
      title=" ">
      <div id="dropdown-content">
      <Dropdown.Item href="https://github.com/opentensor/BitTensor" eventKey="1">code</Dropdown.Item>
      <Dropdown.Item href="bittensor.pdf" eventKey="2">research</Dropdown.Item>
      <Dropdown.Item eventKey="3">docs</Dropdown.Item>
      <Dropdown.Item eventKey="4">network</Dropdown.Item>
      </div>
    </DropdownButton>
  ))}
  <img src={logo} alt="logo" width="58" height="58"></img>
</div>
      );
  }
}

export default Navbar;