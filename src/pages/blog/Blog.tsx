import { Helmet } from 'react-helmet';

import PageHeader from '../../components/page-header/PageHeader';
import BlogList from '../../components/blog/blog-list/BlogList';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Development Blog ⋅ Crypto Quest</title>
        <meta name="description" content="Development Blog ⋅ Crypto Quest" />
      </Helmet>

      <PageHeader title="Development Blog" />
      <div className="section section--bg-curves">
        <div className="container container--medium pt-0">
          <BlogList />
        </div>
      </div>
    </>
  );
};

export default Blog;
