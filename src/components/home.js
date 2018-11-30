import React, { Component } from 'react';
import '../css/home.css';
import Menu from './menu.js'
import logo from '../images/logo1.png'


class Home extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div id= "page">
                
                <div >
                    <img  id= "logo1" img src={logo} />
                    
                </div>
                <h2 id="titolopar">Questa è la pagina Home</h2>
                    <h3>Dove posso trovarlo?</h3>
                        <p>Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, 
                        ma la maggior parte hanno subito delle variazioni del tempo, a causa 
                        dell’inserimento di passaggi ironici, o di sequenze casuali di caratteri 
                        palesemente poco verosimili. Se si decide di utilizzare un passaggio del 
                        Lorem Ipsum, è bene essere certi che non contenga nulla di imbarazzante. 
                        In genere, i generatori di testo segnaposto disponibili su internet tendono 
                        a ripetere paragrafi predefiniti, rendendo questo il primo vero generatore 
                        automatico su intenet. Infatti utilizza un dizionario di oltre 200 vocaboli 
                        latini, combinati con un insieme di modelli di strutture di periodi, per 
                        generare passaggi di testo verosimili. Il testo così generato è sempre 
                        privo di ripetizioni, parole imbarazzanti o fuori luogo ecc.</p>


            </div>
            
        )

    }
}


    
export default Home;