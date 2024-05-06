import React, { useState, useEffect } from "react";
import './Fiche.css';
import Sidebarfiche1 from "./Sidebarfiche1";
/**<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul> */

function Listedesfiches() {
   
    return (
        <div>
            <Sidebarfiche1 />
            <div className='nompage'>
                <p>Listes des fiches exisitent :</p>
            </div>
            <div className='ficheexistent'>
                <input type="text"placeholder='Search'/>
                <button className='btnrecherche'>Search</button>
                </div>
                <div className="listficheexisten">
                <div className="entetfiche">
                    <p>Nom:</p>
                    <p>Type:</p>
                    <p>Déscription</p>
                </div>
<ul className="entetfiche">
        <p>Balance</p>
        <p> vérification</p>
        <p> fiche de vérification de Balance</p>
</ul> 
<button className='btnsupprimeretconsulter' >Consulter</button>
<button className='btnsupprimeretconsulter' >Supprimer</button>
             
            </div>
        </div>
    );
}

export default Listedesfiches;
