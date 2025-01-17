import { Button } from "flowbite-react";
import CampCard from "./CampCard";
import usePublic from "../Hook/usePublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopulerCamp = () => {
  const axiosSecure = usePublic();
  const [campsData, setCampsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axiosSecure.get(`/camps`);
      setCampsData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching camp data:", error);
    }
  };
  return (
    <section className="mx-0 xl:mx-16">
      <h2 className="text-3xl font-bold font-merriweather text-center">
        Popular Medical Camps
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto text-center">
        Explore the most popular medical camps with the highest number of
        participants. Join now to secure your spot!
      </p>{" "}
      {loading ? (
        "loading"
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-6  lg:px-10 xl:px-0">
          {campsData
            ?.sort((a, b) => b.participantCount - a.participantCount)
            .slice(0, 6)
            .map((camp, inx) => (
              <CampCard camp={camp} key={inx} />
            ))}
        </div>
      )}
      <Button
        color=""
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 mx-auto mt-10 lg:mt-16"
      >
        <Link to="/availableCamp">View All Medical Camps</Link>
      </Button>
    </section>
  );
};

export default PopulerCamp;
