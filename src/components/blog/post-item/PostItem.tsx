import { IBlogItem } from '../../../types/blog';

interface IPostItemProps {
  postData: IBlogItem;
}

const PostItem = ({ postData }: IPostItemProps) => {
  const { image, title, fullText } = postData;

  return (
    <div className="post relative zindex-1 p-4 rounded-l box-shadow-l">
      <div className="post__image-container">
        <img
          className="post__image rounded-l box-shadow-l"
          src={image}
          alt={title}
        />
      </div>
      <div>{fullText}</div>
    </div>
  );
};

export default PostItem;
