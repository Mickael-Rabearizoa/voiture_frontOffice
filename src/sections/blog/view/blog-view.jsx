import { useState , useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { Posts } from 'src/_mock/blog';
import { MyComponent } from 'src/_mock/blog';

import PostCard from '../post-card';
import PostSearch from '../post-search';
import ProductFilters from '../product-filters';

// ----------------------------------------------------------------------
async function fetchList(url) {
  try {
    // Effectuer la requête GET pour récupérer la liste depuis l'URL spécifiée
    const response = await axios.get(url);

    // Retourner les données de la réponse si la requête est réussie
    return response.data;
  } catch (error) {
    // Gérer les erreurs de la requête, par exemple en affichant un message d'erreur
    console.error('Une erreur s\'est produite lors de la récupération de la liste:', error);
    // Retourner null ou une autre valeur par défaut en cas d'erreur
    return null;
  }
}


export default function BlogView() {
  const liste = MyComponent();

  const [list, setList] = useState([]);

  const [open, setOpen] = useState(false);
  
  const handleOpen = (productId) => {
    setOpen(true);
  };

  useEffect(() => {
    // Appelez la fonction fetchList avec l'URL de la liste que vous souhaitez récupérer
    async function getList() {
      const data = await fetchList('/api/liste');
      if (data) {
        setList(data);
      }
    }
    getList();
  }, []);

  // const token = localStorage.getItem('token');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(!token) {
  //     console.log("Tsy misy token intsony");
  //     navigate('/login');
  //   }
  //   }, [token,navigate]);

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Liste des annonces</Typography>
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={ liste } />
        <div style={{ marginLeft: 'auto' }}>
          <ProductFilters
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
        </div>
      </Stack>

      <Grid container spacing={3}>
        {liste.map((post, index) => (
          <PostCard key={post.id} post={post} index={index}
          onOpenDetail={() => handleOpen(post.id)}
           />
        ))}
      </Grid>
    </Container>
  ); 
}
