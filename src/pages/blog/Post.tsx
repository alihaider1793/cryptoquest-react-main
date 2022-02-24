import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PageHeader from '../../components/page-header/PageHeader';
import PostItem from '../../components/blog/post-item/PostItem';

import { blog } from '../../data/blog';

const Post = () => {
  const { postId } = useParams();

  if (!postId) return <Navigate to="/page-not-found" />;

  const postData = blog.find((item) => item.id === +postId);

  if (!postData) return <Navigate to="/page-not-found" />;

  const { title } = postData;

  return (
    <>
      <Helmet>
        <title>{`${title} ⋅ Crypto Quest`}</title>
        <meta name="description" content="Development Blog ⋅ Crypto Quest" />
      </Helmet>

      <PageHeader title={title} />
      <div className="section section--bg-curves">
        <div className="container container--medium pt-0">
          <PostItem postData={postData} />
        </div>
      </div>
    </>
  );
};

export default Post;
