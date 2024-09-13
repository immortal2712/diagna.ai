interface LoadMoreButtonType {
  hasNextPage: boolean;
  handleLoadMoreClick: () => void;
  isFetching: boolean;
}

const LoadMoreButton = ({
  hasNextPage,
  handleLoadMoreClick,
  isFetching,
}: LoadMoreButtonType) => {
  return (
    <div className="w-full flex items-center justify-center">
      {hasNextPage && (
        <button
          onClick={handleLoadMoreClick}
          className="w-24 bg-black rounded-xl text-white"
          disabled={isFetching}
        >
          {isFetching ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
