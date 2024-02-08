import { Helmet } from 'react-helmet-async';

import { HistoView } from 'src/sections/historique/view';

// ----------------------------------------------------------------------

export default function HistolPage() {
  return (
    <>
      <Helmet>
        <title> Historique | Minimal UI </title>
      </Helmet>

      <HistoView />
    </>
  );
}
