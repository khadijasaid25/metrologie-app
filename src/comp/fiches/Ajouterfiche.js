import React, { useState } from "react";
import './Fiche.css';
import Sidebarfiche1 from "./Sidebarfiche1";
import axios from 'axios';

function Ajouterfiche() {
    const [formData, setFormData] = useState({
        name: '',
        type: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/fiches', formData);
            console.log('Fiche ajoutée avec succès:', response.data);
            // Add your logic for handling successful fiche addition
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la fiche:', error);
            // Add your logic for handling errors during API call
        }
    };

    return (
        <div>
            <div >
                <Sidebarfiche1 />
                <div className='nompage'>
                    <p>Ajouter une nouvelle fiche :</p>
                </div>
                <form onSubmit={handleSubmit} className='ajouterfiche'>
                    <label htmlFor="nom_du_fiche">Nom du fiche :</label>
                    <input id="name" type="text" placeholder='Nom du fiche :' onChange={handleChange} />
                    <br />
                    <label htmlFor="type">Type :</label>
                    <input id="type" type="text" placeholder='Type :' onChange={handleChange} />
                    <br />
                    <label htmlFor="type">Déscription:</label>
                    <textarea placeholder=' Description:' onChange={handleChange} />
                    <br />
                    <button type='submit' className='btnajouter'>Ajouter</button>
                </form>
            </div>
        </div>
    );
}

export default Ajouterfiche;
