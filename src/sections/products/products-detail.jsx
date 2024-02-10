import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Photo} from 'src/_mock/photo';
import { Products } from 'src/_mock/products';
 // Assurez-vous que products est importé correctement

export default function ProductDetail({ productId }) {
  const liste=Products();
    const [open, setOpen] = useState(false);
    const foundProduct = liste.find((prod) => prod.Id_Annonceutilisateur === productId);
  
    const lis=Photo(productId.Id_Annonceutilisateur);


    if (!foundProduct) {
      return <div>Aucun produit trouvé pour cet ID.</div>;
    }
  
    const renderImg = (
      <>
        {lis.map((producte,index) => (
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
          {renderImg}
          {renderdate}
        <Stack spacing={2} sx={{ mt: 2 }}>
        <Typography color="inherit" variant="subtitle2" noWrap>
          {foundProduct.name}
        </Typography>
        <Typography color="inherit" variant="subtitle2" noWrap>
          {foundProduct.description}
        </Typography>
        <Typography color="inherit" variant="subtitle2" noWrap>
          {foundProduct.nom_volant}
        </Typography>
        <Typography color="inherit" variant="subtitle2" noWrap>
          {foundProduct.nom_couleur}
        </Typography>
        <Typography color="inherit" variant="subtitle2" noWrap>
          {foundProduct.nom_carburant}
        </Typography>
        <Typography color="inherit" variant="subtitle2" noWrap>
          {foundProduct.nom_transmission}
        </Typography>
        <Typography color="inherit" variant="subtitle2" noWrap>
          {`${foundProduct.kilometrage}Km`}
        </Typography>
        <Typography color="inherit" variant="subtitle2" noWrap>
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
