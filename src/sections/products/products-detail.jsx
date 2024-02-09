import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

import { fCurrency } from 'src/utils/format-number';
import { Products } from 'src/_mock/products'; // Assurez-vous que products est importé correctement

export default function ProductDetail({ productId }) {
  const liste=Products();
    const [open, setOpen] = useState(false);
    const foundProduct = liste.find((prod) => prod.id === productId);
    const theme = useTheme();
  
    if (!foundProduct) {
      return <div>Aucun produit trouvé pour cet ID.</div>;
    }
  
    // const renderImages = foundProduct.more.map((image, index) => (
    //   <Box
    //     key={index}
    //     component="img"
    //     alt={foundProduct.name}
    //     src={image}
    //     sx={{
    //       maxWidth: '30%',
    //       height: '30%',
    //       mr: 2, // Espacement horizontal entre les images
    //       mb: 2, // Espacement vertical entre les images
    //       borderRadius: theme.spacing(2),
    //     }}
    //   />
    // ));
  
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
          {foundProduct.prix}
        </Typography>
        &nbsp;
        {foundProduct.prix}
      </Typography>
    );

    const renderdate = (
      <Typography variant="subtitle1">
        <Typography
          component="span"
          variant="body1"
          sx={{
            color: 'text.disabled',
            textDecoration: 'line-through',
          }}
        >
          {foundProduct.annee}
        </Typography>
        &nbsp;
        {foundProduct.annee}
      </Typography>
    );
  
    const handleClick = () => {
      setOpen(true);
    };
  
    return (
      <div>
        <Button onClick={handleClick}>Voir plus de detail</Button>
        <Dialog onClose={() => setOpen(false)} open={open} >
          <Card style={{ maxHeight: 700 }}>
          <Box p={3} style={{ overflowY: 'auto' }}>
          {renderdate}
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Typography color="inherit" variant="subtitle2" noWrap>
           {foundProduct.name}
           {foundProduct.description}
           {foundProduct.nom_volant}
           {foundProduct.nom_couleur}
           {foundProduct.nom_carburant}
           {foundProduct.nom_transmission}
           {`${foundProduct.kilometrage}Km`}
           {foundProduct.moteur}
          </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {renderPrice}
        </Stack>
      </Stack>
    </Box>
  </Card>
</Dialog>

      </div>
    );
}

ProductDetail.propTypes = {
  productId: PropTypes.number.isRequired,
};
