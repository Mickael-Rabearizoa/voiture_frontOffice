import { Link } from 'react-router-dom'; // Import de Link depuis React Router DOM
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { posts } from 'src/_mock/blog';

import PostCard from './post-card';

export default function BlogView() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Typography variant="h4" mb={5}>
        <Link to="/blog"> {/* Utilisation de Link avec le chemin vers la page précédente */}
          <ArrowBackIcon />
        </Link>
        Détail
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={isSmallScreen ? 12 : 8} md={8}>
          <Grid container spacing={3}>
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={isSmallScreen ? 12 : 4} md={4}>
          <div
            style={{
              marginLeft: isSmallScreen ? '30px' : '0',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Détails de la voiture
            </Typography>
            <Typography variant="body1" gutterBottom>
              Marque: BMW
            </Typography>
            <Typography variant="body1" gutterBottom>
              Modèle: Série 3
            </Typography>
            <Typography variant="body1" gutterBottom>
              Prix: $35,000
            </Typography>
            <Typography variant="body1" gutterBottom>
              Description: Voiture sportive avec un moteur puissant et un intérieur luxueux.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Kilométrage: 25,000 km
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vendeur: RANDRIANAIVO Mialivola
            </Typography>
            <a href="#contact" style={{ textDecoration: 'none', color: '#1976D2', display: 'block' }}>
              CONTACTER
            </a>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
