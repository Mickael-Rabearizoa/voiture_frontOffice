import { Helmet } from 'react-helmet-async';

import { DetailView } from 'src/sections/detail';

// ----------------------------------------------------------------------

export default function DetailPage() {
  return (
    <>
      <Helmet>
        <title> Détail | Minimal UI </title>
      </Helmet>

      <DetailView />
    </>
  );
}
