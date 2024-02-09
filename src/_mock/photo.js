import axios from 'axios';
import { useState, useEffect } from 'react';


export function Photo(id_AnnonceUtilisateur) {
  const [list, setList] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://ventevoiture-production-989c.up.railway.app/photo/getPhoto?idAnnonceUtilisateur=${id_AnnonceUtilisateur}`, {
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
    console.log("Mety io eeee");
    fetchData();
  }, [token,id_AnnonceUtilisateur]);

  return list; // Retourner le tableau de publications
}

export default Photo;