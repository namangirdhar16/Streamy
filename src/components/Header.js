import React from 'react';

import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth.js';
export default class Header extends React.Component {
    render()
    {
        return (   
             <div className = "container">
                <nav className ="navbar navbar-light bg-light">
                   <div className ="container-fluid">
                      <Link className ="navbar-brand" to="/">Streamy</Link>
                      <Link className = "nav-link" to="/">All Streams</Link>
                      {/* <div class="navbar-text btn"> </div> */}
                      {/* <Link ClassName = "navbar-text" ><GoogleAuth /></Link> */}
                      <GoogleAuth></GoogleAuth>
                   

                   </div>
                    
                </nav>
             </div>
                   
        )
    }
}