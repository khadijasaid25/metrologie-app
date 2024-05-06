import React from "react";
import Sideequipment from "./Sideequipment";
import './Equipment.css'
function Ajouterequipment(){
    return(
        <div >
            <Sideequipment/>
            <div className='nompage'>
                <p>Ajouter equipment:</p>
            </div>
            <div className="ajouterequiment">
                <label  htmlFor="nome">Nom d'équiment</label>
                <input id="nome" type="text"></input> <br/>
                <label  htmlFor="df">Date de véerification</label>
                <input id="df" type="date"></input> <br/>
                <label  htmlFor="da">Date d'ajout</label>
                <input id="da" type="date"></input> <br/>
                <label htmlFor="des">Déscription</label>
                <textarea  id="des"placeholder="description"></textarea><br/>
                <button type='submit' className='btnajouter'>Ajouter</button>
            </div>
        </div>
    )
}
export default Ajouterequipment;