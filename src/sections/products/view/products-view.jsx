import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material'; // Ajout de l'import manquant pour Modal
import ProductDetail from 'src/sections/products/products-detail'; // Importer ProductDetail avant ShopProductCard
import { Products } from 'src/_mock/products'; // Importez les données des produits
import { useNavigate } from 'react-router-dom';
import ShopProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductCartWidget from '../product-cart-widget';


export default function ProductsView() {

  const liste=Products();

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
        Favoris 
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {liste.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            {/* Passer la fonction handleOpenProductDetail au composant ShopProductCard */}
            <ShopProductCard
              product={product}
              onOpenDetail={() => handleOpenProductDetail(product.id)}
            />
          </Grid>
        ))}
      </Grid>

      <ProductCartWidget />

      <Modal
        open={open}
        onClose={handleCloseProductDetail}
        aria-labelledby="product-detail-modal"
        aria-describedby="product-detail-description"
      >
      <ProductDetail productId={selectedProduct} />
</Modal>
    </Container>
  );
}
