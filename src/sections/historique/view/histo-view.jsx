import { useState } from 'react';
import { Link } from 'react-router-dom'; 

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { posts } from 'src/_mock/blog';

import PostCard from '../post-card';
import PostSearch from '../post-search';
import ProductFilters from '../product-filters';

// ----------------------------------------------------------------------

export default function HistoView() {
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
        <Typography variant="h4">
        <Link to="/historique"> {/* Utilisation de Link avec le chemin vers la page précédente */}
          <ArrowBackIcon />
        </Link>
          Historique de ses annonces</Typography>
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} />
        <div style={{ marginLeft: 'auto' }}>
          <ProductFilters
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
        </div>
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
