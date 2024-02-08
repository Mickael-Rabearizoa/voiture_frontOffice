import SvgColor from 'src/components/svg-color';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const isConnected = null; // Ici isConnected est défini comme null

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Liste Annonce',
    path: '/blog',
    icon: icon('ic_cart'),
  },
  // Condition pour ajouter l'entrée Historique si isConnected n'est pas null
  isConnected !== null && {
    title: 'Historique',
    path: '/historique',
    icon: icon('ic_cart'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
].filter(Boolean); // Filtrer pour retirer les valeurs nulles (qui correspondent à l'entrée Historique si isConnected est null)

export default navConfig;
