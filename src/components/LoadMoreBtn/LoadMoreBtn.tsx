import styles from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  onClick: (searchValue: string, page: number) => void;
  page: number;
  searchValue: string;
};

const LoadMoreBtn = ({ onClick, page, searchValue }:LoadMoreBtnProps) => {
  const handleLoadMore = (): void => {
    onClick(searchValue, page);
  };

  return (
    <button
      className={styles.btnLoadMore}
      onClick={handleLoadMore}
      type="button"
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
