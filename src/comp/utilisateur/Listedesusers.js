import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Users.css';
import Sidebar from './Sidebar';
import axios from 'axios';

function Listedesusers() {
    const [Users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/index');
            const userData = response.data.users; // Assuming 'users' is the key containing the users array
            setUsers(userData);
            console.log(userData); // Log the user data to ensure it's in the expected format
        } catch (error) {
            console.error('Error fetching data:', error);
            // Add your logic for handling errors during API call
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchByName = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/index?name=${searchQuery}`);
            setUsers(response.data); // Assuming the API response is an array of users
        } catch (error) {
            console.error('Error searching by name:', error);
            // Add your logic for handling search errors
        }
    };

    const handleSearchByMatricule = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/index?matricule=${searchQuery}`);
            setUsers(response.data); // Assuming the API response is an array of users
        } catch (error) {
            console.error('Error searching by matricule:', error);
            // Add your logic for handling search errors
        }
    };

    return (
        <div >
            <Sidebar />
            <div className='nompage'>
                <p> Listes des Utilisateurs :</p>
            </div>
            <div className='userrecherche'>
                <input type="search" placeholder='Search' value={searchQuery} onChange={handleSearchChange} ></input>
                <button className='btnrecherche' onClick={handleSearchByMatricule}>Search</button>
            </div>
            <div className='listesdesuser'>
                <p id="lue">Les Utilisateurs enregistrés</p>
                <div className='entet'>
                        <p>Nom:</p>
                        <p>Matricule:</p>
                        <p>Email :</p>
                        <p>Mot de passe :</p>
                        <p>Poste :</p>
                        <p>Mode d'accès :</p>
                        <p>Téléphone :</p>
                        </div>
                <ul>
                    {Users.length > 0 ? (
                        Users.map((user) => (
                            <li key={user.id}>
                                <Link to={{ pathname: `/consult`, state: { userId: user.id } }}>{user.id} - Matricule: {user.matricule}</Link>
                            </li>
                        ))
                    ) : (
                        <li>No users found.</li>
                        
                    )}
                </ul>
               
            </div>
        </div>
    );
}

export default Listedesusers;
