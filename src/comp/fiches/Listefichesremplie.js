import React, { useState, useEffect } from "react";
import './Fiche.css';
import axios from 'axios';
import Sidebarfiche1 from "./Sidebarfiche1";
function Listefichesremplie(){
    const [fiches, setFiches] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/fiches');
            setFiches(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Add your logic for handling errors during API call
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/fiches`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching:', error);
            // Add your logic for handling search errors
        }
    };

    const handleConsult = (id) => {
        console.log('Consulting fiche with id:', id);
        // Add your logic for handling consultation
    };

    const handleDelete = (id) => {
        console.log('Deleting fiche with id:', id);
        // Add your logic for handling deletion
    };

    return(
<div >
<Sidebarfiche1/>
<div className='nompage'>
                <p>Les liste des fiches remplie</p>
            </div>
        <div className='ficheexistent'>
        <input type="search" placeholder='search' value={searchQuery} onChange={handleSearchChange}
        ></input>
        <button   onClick={handleSearch} className='btnrecherche'>search</button>
        </div>
        <div className="listficheexisten">
        <div className="entetfiche">
                    <p>Nom:</p>
                    <p>Type:</p>
                    <p>Déscription :</p>
                </div>
                <ul>
                    {searchQuery ? (
                        searchResults.map((result) => (
                            <li key={result.id}>
                                {result.name} - {result.type}
                                <div>
                                    <button onClick={() => handleConsult(result.id)} className="lbtn">Modéfier</button>
                                    <button onClick={() => handleDelete(result.id)} className='lbtn'>Supprimer</button>
                                </div>
                            </li>
                        ))
                    ) : (
                        fiches.map((fiche) => (
                            <li key={fiche.id}>
                                {fiche.name} - {fiche.type}
                                <div>
                                    <button onClick={() => handleConsult(fiche.id)} className='btnsupprimeretconsulter'>Consulter</button>
                                    <button onClick={() => handleDelete(fiche.id)} className='btnsupprimeretconsulter'>Supprimer</button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
        </div>
    
    </div>

    )
}
export default Listefichesremplie;
