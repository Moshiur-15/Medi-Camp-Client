const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex flex-row justify-center min-h-[calc(100vh-250px)]">
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
