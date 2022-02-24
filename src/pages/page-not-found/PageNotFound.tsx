import { Helmet } from 'react-helmet';

import PageHeader from '../../components/page-header/PageHeader';

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found ⋅ Crypto Quest</title>
        <meta name="description" content="Page Not Found ⋅ Crypto Quest" />
      </Helmet>
      <PageHeader title="Page Not Found" />
    </>
  );
};

export default PageNotFound;
