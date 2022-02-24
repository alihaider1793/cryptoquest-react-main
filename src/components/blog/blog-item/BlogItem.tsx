import { Link } from 'react-router-dom';

import { IBlogItem } from '../../../types/blog';

interface IBlogItemProps {
  item: IBlogItem;
}

const BlogItem = ({ item }: IBlogItemProps) => {
  const { id, image, title, description } = item;

  return (
    <div className="blog__item-horizontal relative zindex-1 rounded-l box-shadow-l p-3 l:p-5 mb-4">
      <div className="blog__image-container">
        <img
          className="blog__image rounded-l box-shadow-l"
          src={image}
          alt={title}
        />
      </div>
      <div className="blog__details">
        <h2 className="blog__title">{title}</h2>
        <div className="blog__description m:fs-xl">{description}</div>
        <Link to={String(id)} className="blog__button btn btn--m">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
