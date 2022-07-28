import React, { Component } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from "/home/whitney/Development/code/phase-2/project2/src/images/logo.svg"

export default class Navbar extends Component {
    state={isOpen:false}
    handleToggle=()=>{this.setState({isOpen:!this.state.isOpen})}
  render() {
    return (
      <nav className="navbar">
          <div className='nav-center'>
              <div className='nav-header'>
<Link to={"/"}>
    <img className='logo'src={logo} alt= "Hotel Resort"/> 
</Link>
{/*  Toggle button for media screen*/}
<button type='button' className='nav-btn'
onClick={this.handleToggle}>
    
    <FaAlignRight className='Nav-icon'/>
</button>
              </div>
              <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
          </div>
      </nav>
    )
  }
}
