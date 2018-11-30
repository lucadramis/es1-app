import React, { Component } from 'react';
import '../css/about.css';
import Menu from './menu.js'
import logo from '../images/logo.png'


class About extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <div >
                <img id="logo" src={logo}></img>
                </div>
                <div>
                  
                    
                </div>
                
                <div>
                    <p>pagina about</p>
                </div>


            </div>
        )

    }
}

    export default About;