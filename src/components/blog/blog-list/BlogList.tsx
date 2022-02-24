import BlogItem from '../blog-item/BlogItem';

import { blog } from '../../../data/blog';

const BlogList = () => {
  return (
    <div className="blog__list">
      {blog
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <BlogItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default BlogList;
