import { Link } from 'react-router-dom';
import ROUTES from '../../../../routes/routes';

import { IBlogItem } from '../../../../types/blog';

interface IBlogItemProps {
  postData: IBlogItem;
}

const BlogItem = ({ postData }: IBlogItemProps) => {
  const { id, image, title } = postData;

  return (
    <Link
      to={`${ROUTES.BLOG_PAGE}/${id}`}
      className="blog__item-vertical zindex-2 rounded-l box-shadow-l p-2"
    >
      <img
        width="100%"
        className="blog__image rounded-l box-shadow-l"
        src={image}
        alt={title}
      />
      <div className="m:fs-xxl pt-3 text-center">{title}</div>
    </Link>
  );
};

export default BlogItem;
