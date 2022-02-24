import { useEffect, useState } from 'react';
import handleViewport from 'react-in-viewport';
import { Link } from 'react-router-dom';
import ROUTES from '../../../routes/routes';

import BlogItem from './blog-item/BlogItem';

import { blog } from '../../../data/blog';

import elves1 from '../../../assets/img/elves-1.png';
import elves3 from '../../../assets/img/elves-3.png';

interface IBlogInner {
  enterCount: number;
  forwardedRef: any;
  inViewport: boolean;
  leaveCount: number;
}

const BlogInner = (props: IBlogInner) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { inViewport, forwardedRef, enterCount } = props;

  useEffect(() => {
    if (inViewport && enterCount === 1) {
      setIsAnimating(true);
    }
  }, [inViewport, enterCount]);

  return (
    <div
      ref={forwardedRef}
      className="section section-blog section--bg-curves ripped-top"
      id="blog"
    >
      <div className="container">
        <h2 className="section__title text-black">
          <span>Development Blog</span>
        </h2>

        <div className="mt-4">
          <div className="flex-container mw-1200px mx-auto justify-content-center gap-3">
            {blog
              .sort((a, b) => b.id - a.id)
              .slice(0, 4)
              .map((postData) => (
                <BlogItem key={postData.id} postData={postData} />
              ))}
          </div>
        </div>

        <div className="mt-8 s:mt-14 text-center zindex-2">
          <Link to={ROUTES.BLOG_PAGE} className="btn btn--primary">
            Read more posts
          </Link>
        </div>

        <img
          className={`${
            isAnimating
              ? 'animate__animated animate__backInUp animate__slow'
              : ''
          } home__bottom-images home__bottom-images--1`}
          src={elves1}
          alt="Elves"
        />
        <img
          className={`${
            isAnimating
              ? 'animate__animated animate__backInUp animate__slow'
              : ''
          } home__bottom-images home__bottom-images--2`}
          src={elves3}
          alt="Elves"
        />
      </div>
    </div>
  );
};

const Blog = handleViewport(BlogInner);

export default Blog;
