require('jquery')
require('jquery.scrollto')
import React, { Component } from 'react';

import Contents from './Contents';
import Navbar from './Navbar';

export default class Section extends Component {
  
    constructor (props) {
      super(props);
      this.handleNavClick = this.handleNavClick.bind(this)
    }
  
    componentDidMount () {
      $('body').scrollTo(0, 10)
    }

    handleNavClick(evt) {
      const id = evt.target.id
      const $section = $(`#section${id}`);
      const $this = $(`#${id}`);
      
      $('body').scrollTo($section, 800)

      $('.index').removeClass('active')
      $this.addClass('active')
    }
  
    render () {
      return (
      <div className="container">
        <div className="col-sm-8">
          <Contents />
        </div>

        <div className="col-sm-4 fixed">
          <Navbar handleNavClick={this.handleNavClick}/> 
        </div>
      </div>
      )
    }
  };


