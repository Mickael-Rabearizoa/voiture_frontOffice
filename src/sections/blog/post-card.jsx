import React, { useState } from 'react'; // Importer useState depuis React
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'; // Importer IconButton
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Link as MuiLink } from '@mui/material';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function PostCard({ post, index }) {
  
  const {nom_modele, prix, annee} = post;

//  const { cover, nom_modele, prix, annee} = post;
  const [isLiked, setIsLiked] = useState(false); // État pour gérer si l'utilisateur a aimé le post
   // État pour gérer si l'utilisateur a aimé le post
  
  const handleClick = () => {
    setIsLiked(() => setIsLiked(!isLiked));
    // MyComponent(post.id);
  };

  const latestPostLarge = index === -1;

  const latestPost = index === -1 || index === -1;
  
  // const renderAvatar = (
  //   <Avatar
  //     alt={author.name}
  //     src={author.avatarUrl}
  //     sx={{
  //       zIndex: 9,
  //       width: 32,
  //       height: 32,
  //       position: 'absolute',
  //       left: (theme) => theme.spacing(3),
  //       bottom: (theme) => theme.spacing(-2),
  //       ...((latestPostLarge || latestPost) && {
  //         zIndex: 9,
  //         top: 24,
  //         left: 24,
  //         width: 40,
  //         height: 40,
  //       }),
  //     }}
  //   />
  // );

  const renderTitle = (
    <Box>
      <Link
        color="inherit"
        variant="subtitle2"
        underline="hover"
        sx={{
          fontSize: 15,
          height: 44,
          overflow: 'hidden',
          WebkitLineClamp: 2,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          ...(latestPostLarge && { typography: 'h3', height: 60 }),
          ...((latestPostLarge || latestPost) && {
            color: 'common.white',
          }),
        }}
      >
        {nom_modele}
      </Link>
      <Typography
        variant="body1"
        sx={{
          color: 'green', // Couleur verte
          fontSize: 15, // Taille de police
          mt: 1, // Marge en haut
        }}
      >
        {`Ar ${prix}`}
      </Typography>
    </Box>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      {[
        // { number: comment, icon: 'eva:message-circle-fill' },
        // { number: view, icon: 'eva:eye-fill' },
        { number: annee, icon: 'eva:trending-up-outline ' },
        { number: prix },
      ].map((info, _index) => (
        <Stack
          key={_index}
          direction="row"
          sx={{
            ...((latestPostLarge || latestPost) && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  // const renderCover = (
  //   <Box
  //     component="img"
  //     alt={nom_modele}
  //     src={cover}
  //     sx={{
  //       top: 0,
  //       width: 1,
  //       height: 1,
  //       objectFit: 'cover',
  //       position: 'absolute',
  //     }}
  //   />
  // );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: 'text.disabled',
        ...((latestPostLarge || latestPost) && {
          opacity: 0.48,
          color: 'common.white',
        }),
      }}
    >
      {fDate(annee)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        color: 'background.paper',
        ...((latestPostLarge || latestPost) && { display: 'none' }),
      }}
    />
  );

  return (
    <Grid xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card>
        <Box
          sx={{
            position: 'relative',
            pt: 'calc(100% * 3 / 4)',
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          {renderShape}

          {/* {renderAvatar} */}

          {/* {renderCover} */}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
            ...((latestPostLarge || latestPost) && {
              width: 1,
              bottom: 0,
              position: 'absolute',
            }),
          }}
        >
          {renderDate}

          {renderTitle}

          {renderInfo}
        </Box>

        <Box sx={{ p: 3 }}>
          <Stack direction="row" spacing={1}>
            <IconButton onClick={handleClick}>
              <Iconify icon={isLiked ? 'ic:baseline-favorite' : 'ic:outline-favorite-border'} />
            </IconButton>
            <MuiLink href="/detail" underline="none">
              <Button
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                variant="outlined"
                startIcon={<Iconify icon="ic:round-clear-all" />}
              >
                Voir détail
              </Button>
            </MuiLink>
          </Stack>
        </Box>
      </Card>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
