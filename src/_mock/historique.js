import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export function MyComponent() {
  const [list, setList] = useState([]);
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  const ConstUser = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/login/findByLogin?login=${email}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      console.log(response.data.response);

      localStorage.setItem('nom', response.data.response.nom);
      localStorage.setItem('prenom', response.data.response.prenom);
      localStorage.setItem('idutilisateur', response.data.response.idutilisateur);

      return response.data.response.idutilisateur;
    } catch (error) {
      console.log("erreur", error);
      throw error;
    }
  }, [token, email]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userId = await ConstUser();
        const response = await axios.get(`http://localhost:8080/V_AnnonceUtilisateur/getListAnnonceUtilisateur?Idutilisateur=${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setList(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération de la liste:', error);
      }
    }
    console.log("Tonga eto nefa an");
    fetchData();
  }, [token, ConstUser]); // Inclure ConstUser dans le tableau de dépendances

  return list; // Retourner le tableau de publications
}

export default MyComponent;
