const Skeleton = () => {
  return (
    <div className="flex flex-nowrap justify-start gap-4">
      <div className="content box-border border-4 w-64 p-4 rounded-md shadow-md bg-slate-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="skeleton-image bg-gray-300 h-40 mb-4"></div>
        <div className="skeleton-text bg-gray-300 h-4 w-2/3 mb-2"></div>
        <div className="skeleton-text bg-gray-300 h-4 w-1/2 mb-2"></div>
        <div className="skeleton-text bg-gray-300 h-4 w-1/4"></div>
      </div>
    </div>
  );
};

export default Skeleton;
