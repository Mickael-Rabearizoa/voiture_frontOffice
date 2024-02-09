import axios from 'axios';
import { useState, useEffect } from 'react';


export function Products() {
  const [list, setList] = useState([]);
  const token = localStorage.getItem('token');
  const idutilisateur = localStorage.getItem('idutilisateur');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://ventevoiture-production-989c.up.railway.app/V_AnnonceFavorisUtilisateur/getAnnonceFavorisUtilisateur?Idutilisateur=${idutilisateur}`, {
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
  }, [token,idutilisateur]);

  return list; // Retourner le tableau de publications
}

export default Products;