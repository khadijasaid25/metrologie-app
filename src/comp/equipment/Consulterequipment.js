import React from "react"
import Sideequipment from "./Sideequipment";
function Consulterequipment(){
    return(
        <div>
            <Sideequipment/>
            <div className='nompage'>
                <p> Listes des équiments:</p>
            </div>
            <div className='consutpageequipment'>
                <input type="search" placeholder='Search'  ></input>
                <button className='btnrecherche' >Search</button>
            </div>
            <div className='listesequipment'>
                <div className='entet'>
                        <p>Nom déquipment:</p>
                        <p>Date de controle:</p>
                        <p>Description:</p>
                        </div>
                <button className='btnsupprimeretconsulter'>Modéfier</button>
                <button className='btnsupprimeretconsulter'>Supprimer</button>
                        </div>
                  
        </div>
    )
}
export default Consulterequipment;