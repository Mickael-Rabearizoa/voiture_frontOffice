import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker'; // Importer faker correctement

// ----------------------------------------------------------------------

export const insererAvecAxios = async ( Id_Annonceutilisateur ) => {
  try {
    const token = localStorage.getItem('token');
    const  userid = localStorage.getItem('idutilisateur');
    // Effectuez une requête POST avec Axios en incluant l'ID
    const reponse = await axios.get(`http://localhost:8080/annoncefavoris/insertAnnoncefavoris?Id_Annonceutilisateur=${Id_Annonceutilisateur}&Idutilisateur=${userid}`,
    { headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }});

    // Traitez la réponse si nécessaire
    console.log('Réponse de l\'API :', reponse);

    // Effectuez d'autres manipulations d'état si nécessaire
  } catch (erreur) {
    // Gérez les erreurs ici
    console.error('Erreur lors de la requête Axios :', erreur);
  }
};

export default insererAvecAxios;

// export function Favoris(produitid) {
//   const [list, setList] = useState([]);
//   const  userid = localStorage.getItem('idutilisateur');

//   // return async function insertFavoris() {
//   //   try {
//   //     const response = await axios.post(`http://localhost:8080/annoncefavoris/insertAnnoncefavoris?Id_Annonceutilisateur=${produitid}&Idutilisateur=${userid}`, {
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       }
//   //     });
//   //     // setList(response.data);
//   //   } catch (error) {
//   //     console.error('Une erreur s\'est produite lors de la récupération de la liste :', error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     try {
//   //       const response = await axios.post(`http://localhost:8080/annoncefavoris/insertAnnoncefavoris?Id_Annonceutilisateur=${produitid}&Idutilisateur=${userid}`, {
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         }
//   //     });
//   //       // setList(response.data);
//   //     } catch (error) {
//   //       console.error('Une erreur s\'est produite lors de la récupération de la liste:', error);
//   //     }
//   //   }
//   //   console.log("Yesssssss");
//   //   fetchData();
//   // }, [produitid,userid]);

//   // return true; // Retourner le tableau de publications
// }

// export default Favoris;