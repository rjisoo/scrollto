import React from 'react';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
import data from '../data'

export default (props) => {
return (
	<div >
		{
			data.map((content, i) => (
				<div className='index' id={`${i}`} key={i} onClick={props.handleNavClick}>
					{content.title}
				</div>
			))			
		}
	</div>
)}


// <Link 
// activeClass="active" 
// className={`test${i+1} nav-link`} 
// to={`test${i+1}`}
// spy={true} 
// smooth={true} 
// duration={500}>
// {nav}
// </Link>