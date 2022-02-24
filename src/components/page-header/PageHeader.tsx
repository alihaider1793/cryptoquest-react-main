interface IPageHeaderProps {
  title: string;
  spacing?: boolean;
}

const PageHeader = ({ title, spacing }: IPageHeaderProps) => {
  return (
    <div className="page-header ripped-bottom">
      <div className={`container ${spacing ? 'pb-8' : ''}`}>
        <h1 className="page-header__title text-center my-0">
          <span>{title}</span>
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
