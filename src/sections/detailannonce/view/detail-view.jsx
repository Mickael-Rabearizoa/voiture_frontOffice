import React, { useState } from 'react';

import { Modal } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography'; // Ajout de l'import manquant pour Modal
import DetailDetail from 'src/sections/detailannonce/detail-detail'; // Importer ProductDetail avant ShopProductCard
import { MyComponent } from 'src/_mock/detailannonce'; // Importez les données des produits

import DetailCard from '../detail-card';
import CartWidget from '../detail-cart-widget';


export default function DetailView() {

  const liste=MyComponent();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  
  const handleOpenProductDetail = (productId) => {
    setSelectedProduct(productId);
    setOpen(true);
    
  };
  
  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Liste annonce
      </Typography>

      <Grid container spacing={3}>
        {liste.map((product) => (
          <Grid key={product.Id_Annonceutilisateur} xs={12} sm={6} md={3}>
            {/* Passer la fonction handleOpenProductDetail au composant ShopProductCard */}
            <DetailCard
              product={product}
              onOpenDetail={() => handleOpenProductDetail(product.Id_Annonceutilisateur)}
            />
          </Grid>
        ))}
      </Grid>

      <CartWidget />

      <Modal
        open={open}
        onClose={handleCloseProductDetail}
        aria-labelledby="product-detail-modal"
        aria-describedby="product-detail-description"
      >
      <DetailDetail productId={selectedProduct} />
</Modal>
    </Container>
  );
}
