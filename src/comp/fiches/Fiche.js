import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Fiche.css'
import Sidebarfiche1 from './Sidebarfiche1';

function Fiche() {
    /**userId */
  /*  const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log(userId);
        fetchUserData(userId.userId);
    }, [userId]);

    const fetchUserData = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/show/${userId}`); // Replace with your API endpoint
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Add your logic for handling errors during API call
        }
    };
     {userData ? (
                <div>
                    <h1>User Details</h1>
                    <p><strong>Name:</strong> {userData.prenom}</p>
                    <p><strong>ID:</strong> {userData.matricule}</p>
                    {/* Add more user details here */
                   /* </div>
                
                ) : (
                    <p>Loading user data...</p>
                )}*/

    return (
        <div>
     <Sidebarfiche1/>
        <div className='nompage'>
            <p> Fiches :</p>
        </div>
        <div className="fiche" >
<p>dernier fiche ajouter  </p>
<p>dernier fiche modifier  </p>
<p>dernier fiche supprimer </p>
<p>les date de verification et les date de controle des fiches  </p>
        </div>
    </div>
             
    
    );

}
export default Fiche;
