import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Label from 'src/components/label';

import ProductDetail from 'src/sections/products/products-detail';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {


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

  const handleClick = () => {
    setShowDetail((prevShowDetail) => !prevShowDetail);
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
        <Button onClick={handleClick}>
        <ArrowDownwardIcon />
        </Button>
          {showDetail && <ProductDetail productId={product.id} />} {/* utilisez productId au lieu de product */}
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
