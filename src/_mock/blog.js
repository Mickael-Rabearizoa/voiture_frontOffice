import axios from 'axios';
import { useState, useEffect } from 'react'; // Importer faker correctement

// ----------------------------------------------------------------------

export function MyComponent() {
  const [list, setList] = useState([]);
  // const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/V_AnnonceUtilisateur/getListAnnonceValide', {
          headers: {
            'Content-Type': 'application/json',
          }
      });
        setList(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération de la liste:', error);
      }
    }
    console.log("Mety io eeee");
    fetchData();
  }, []);

  return list; // Retourner le tableau de publications
}

export default MyComponent;