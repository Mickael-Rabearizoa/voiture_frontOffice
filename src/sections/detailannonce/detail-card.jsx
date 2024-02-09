import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { fCurrency } from 'src/utils/format-number';

import { insererAvecAxios } from 'src/_mock/favoris';

import Label from 'src/components/label';

import DetailDetail from 'src/sections/detailannonce/detail-detail';

// ----------------------------------------------------------------------

export default function DetailCard({ product }) {


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

  // const renderImg = (
  //   <Box
  //     component="img"
  //     alt={product.name}
  //     src={product.cover}
  //     sx={{
  //       top: 0,
  //       width: 1,
  //       height: 1,
  //       objectFit: 'cover',
  //       position: 'absolute',
  //     }}
  //   />
  // );

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
  const [showheart, setShowheart] = useState(false);

  const handleClick = () => {
    setShowDetail((prevShowDetail) => !prevShowDetail);
  };
  const [isFavorited, setIsFavorited] = useState(false);

  const heartClick = () => {
    setIsFavorited(true); // Mettre à jour l'état pour indiquer que le produit est ajouté aux favoris
    insererAvecAxios(product.Id_Annonceutilisateur); // Appeler la fonction pour ajouter aux favoris
  };
  
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <Box sx={{pt:'100%',position :'relative'}}>
      {product.status && renderStatus}
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit"  variant="subtitle2" noWrap>
          {product.nom_modele}
        </Link>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {renderPrice}
        </Stack>
        <Button onClick={heartClick} style={{ color: isFavorited ? 'red' : 'black' }}>
      <FavoriteIcon />
    </Button>
        <Button onClick={handleClick}>
        <ArrowDownwardIcon />
        </Button>
          {showDetail && <DetailDetail productId={product.Id_Annonceutilisateur} />} {/* utilisez productId au lieu de product */}
      </Stack>
    </Card>
  );
}

DetailCard.propTypes = {
  product: PropTypes.object,
};
