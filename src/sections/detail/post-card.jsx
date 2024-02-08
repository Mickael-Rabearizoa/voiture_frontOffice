import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';


export default function PostCard({ post, index }) { // Ajout de isSmallScreen comme prop
  const { cover } = post;
  const latestPostLarge = index === -1;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  const renderCover = (
    <Box
      component="img"
      alt="hello"
      src={cover}
      sx={{
        width: '350px',
        height: '350px',
        objectFit: 'cover',
      }}
      style={{ width: '350px', height: '350px' }}
    />
  );

  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card>
        <Box
          sx={{
            position: 'relative',
            marginRight: '5px',
            marginBottom: '5px',
            borderRadius: '0px',
            marginLeft: isSmallScreen ? '30px' : '0', // Utilisation de isSmallScreen
          }}
        >
          {renderCover}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '350px',
              height: '350px',
              p: 2,
              color: '#f9fafb',
              borderRadius: 0, 
            }}
          >
          <Typography variant="h6" gutterBottom>
            PHOTO
          </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
