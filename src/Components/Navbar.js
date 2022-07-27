import React, { Component } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from "./images/logo.svg"
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
OnClick={this.handleToggle}>
    
    <FaAlignRight className='Nav-icon'/>
</button>
              </div>

          </div>
      </nav>
    )
  }
}
