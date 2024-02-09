import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { MyComponent } from 'src/_mock/historique';

import PostCard from '../post-card';
import PostSearch from '../post-search';
import ProductFilters from '../product-filters';

// ----------------------------------------------------------------------

export default function HistoView() {
  const [openFilter, setOpenFilter] = useState(false);
  const liste = MyComponent();

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
          Historique de ses annonces</Typography>
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
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
