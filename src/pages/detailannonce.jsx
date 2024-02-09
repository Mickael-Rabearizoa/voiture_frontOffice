import { Helmet } from 'react-helmet-async';

import { DetailView } from 'src/sections/detailannonce/view';

// ----------------------------------------------------------------------

export default function DetailAnnoncePage() {
  return (
    <>
      <Helmet>
        <title> Détail | Minimal UI </title>
      </Helmet>

      <DetailView />
    </>
  );
}
