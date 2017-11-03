import React, { Component } from 'react';
import data from '../data'

export default (props) => {
return (
<div id="contents" name="contents" >
  {
    data.map((content,i) => {
      return (
        <div key={i}>
        <h1 id={`section${i}`}>{content.title}</h1>
        <p>{content.p}</p>
        <ul>
          {
            content.li.map((list, i) => (
              <li key={i}>{list}</li>
            ))
          }
        </ul>
        </div>
      )})
  }

</div>
)}