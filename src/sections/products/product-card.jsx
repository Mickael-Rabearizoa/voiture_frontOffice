import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import {Photo} from 'src/_mock/photo';

import Label from 'src/components/label';

import ProductDetail from 'src/sections/products/products-detail';


// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {

  const liste=Photo(product.Id_Annonceutilisateur);
  console.log('photo',liste);
  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === 2 && 'success') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {(product.status === 2 && 'vendu') || 'a vendre'}
    </Label>
  );


  const renderImg = (
    <>
      {liste.map((producte,index) => (
        <Box
          key={index} // Assurez-vous d'avoir une clé unique pour chaque élément dans une liste de rendu
          component="img"
          alt={producte.nomphoto} // Assurez-vous d'utiliser le nom de la variable correcte ici
          src={producte.nomphoto} // Utilisez photoUrl au lieu de product.cover pour obtenir chaque URL de photo de la liste
          sx={{
            top: 0,
            width: 1,
            height: 1,
            objectFit: 'cover',
            position: 'absolute',
          }}
        />
      ))}
    </>
  );
  

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {product.prix}
      </Typography>
      &nbsp;
      {product.prix}
    </Typography>
  );

  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail((prevShowDetail) => !prevShowDetail);
  };
  

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <Box sx={{pt:'100%',position :'relative'}}>
      {product.status && renderStatus}
      {renderImg}
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit"  variant="subtitle2" noWrap>
          {product.nom_modele}
          {product.Id_Annonceutilisateur}
        </Link>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {renderPrice}
        </Stack>
        <Button onClick={handleClick}>
        <ArrowDownwardIcon />
        </Button>
          {showDetail && <ProductDetail productId={product.Id_Annonceutilisateur} />} {/* utilisez productId au lieu de product */}
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
