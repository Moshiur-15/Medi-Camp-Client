import React, { useEffect, useState } from "react";
import usePublic from "../Hook/usePublic";
import AvailableCampCard from "../Components/AvailableCampCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const AvailableCamp = () => {
  const axiosSecure = usePublic();
  const [campsData, setCampsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [layout, setLayout] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [searchQuery, sort]);

  const fetchData = async () => {
    try {
      const { data } = await axiosSecure.get(
        `/camps?search=${searchQuery}&sort=${sort}`
      );
      setCampsData(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching camp data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleLayout = () => {
    setLayout(!layout);
  };

  return (
    <section className="container mx-auto">
      <div className="my-10 lg:my-16 xl:my-20 mx-2 xl:mx-20">
        <h2 className="text-3xl font-bold font-merriweather text-center text-[#27477D]">
          Explore Available Camps
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto text-center">
          Find your perfect camp for adventure, learning, and fun. Explore
          options, dates, and activities to plan your next experience.
        </p>
        <div className="flex  items-center justify-center gap-6 mx-5 md:mx-24">
          <div className="mb-6 text-center w-full sm:max-w-md">
            <label htmlFor="search" className="sr-only">
              Search Camps
            </label>
            <input
              type="text"
              id="search"
              aria-label="Search camps"
              placeholder="Search camps..."
              className="py-2 px-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mb-6 text-center w-full sm:max-w-md">
            <label htmlFor="sort" className="sr-only">
              Sort Camps
            </label>
            <select
              id="sort"
              aria-label="Sort camps"
              className="py-2 px-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="campFees">Camp Fees (descending)</option>
              <option value="mostRegistered">Most Registered (descending)</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <section>
            <div className="flex justify-center items-center mb-8">
              <button
                className="py-2 px-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none "
                onClick={handleLayout}
              >
                {layout ? "Switch to 3 Columns" : "Switch to 2 Columns"}
              </button>
            </div>
            <div className={`grid ${layout? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'} gap-6 px-4 lg:px-10 xl:px-0 `}>
              {campsData?.map((camp, index) => (
                <AvailableCampCard layout={layout} camp={camp} key={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default AvailableCamp;
