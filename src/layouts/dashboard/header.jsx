import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import Searchbar from './common/searchbar';
import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';

export default function Header({ onOpenNav }) {
  const theme = useTheme();
  const lgUp = useResponsive('up', 'lg');
  const [token] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
          justifyContent: 'space-between', // Aligner les éléments de la toolbar sur les côtés
        }}
      >
        <Box>
          {!lgUp && (
            <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
              <Iconify icon="eva:menu-2-fill" />
            </IconButton>
          )}
          <Searchbar />
        </Box>

        <Stack direction="row" alignItems="center" spacing={1}>
          {token ? ( // Si un token existe, afficher le composant AccountPopover
            <AccountPopover />
          ) : ( // Sinon, afficher le bouton LOGIN avec les styles personnalisés
            <Button
              onClick={handleLoginClick}
              color="inherit" // Couleur du texte
              sx={{
                backgroundColor: '#3a90f5', // Couleur de fond
                '&:hover': {
                  backgroundColor: '#1f6bd5', // Couleur de fond au survol
                },
              }}
            >
              LOGIN
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
