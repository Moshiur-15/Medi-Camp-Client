import {  Spinner } from "flowbite-react";
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-32">
      <Spinner aria-label="Spinner button example" size="xl" />
    </div>
  );
};

export default LoadingSpinner;
