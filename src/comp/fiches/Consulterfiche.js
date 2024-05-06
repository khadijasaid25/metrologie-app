import React from "react";
import Sidebarfiche1 from "./Sidebarfiche1";
import './Fiche.css'
function Consulterfiche(){
return(
<div>
<Sidebarfiche1/>
<div className='nompage'>
                <p>Consulter:</p>
            </div>
            <div className="consult">
            <p id="lue">Les Fiches remplie</p>
           <div className='entetfiche'>
                    <p>Nom:</p>
                    <p>Type:</p>
                    <p>Date de remplissage:</p>
                    <p>Date de modéfication:</p>
                    </div>
            <div className='btnliste'>
                <button className='btnsupprimeretconsulter'>Modéfier</button>
                <button className='btnsupprimeretconsulter'>Supprimer</button>
                </div>
            </div>
        
</div>

    )
}
export default Consulterfiche;