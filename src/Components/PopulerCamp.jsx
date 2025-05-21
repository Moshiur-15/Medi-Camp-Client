import { Button } from "flowbite-react";
import CampCard from "./CampCard";
import usePublic from "../Hook/usePublic";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

const PopulerCamp = () => {
  const axiosSecure = usePublic();

  const { data:campsData, Loading } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/camps`);
      return data;
    }
  })

  if(Loading) return <LoadingSpinner/>

  return (
    <section className="mx-2 xl:mx-20">
      <h2 className="text-[#27477D] text-3xl font-bold font-merriweather text-center">
        Popular Medical Camps
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto text-center md:text-2xl italic">
        Explore the most popular medical camps with the highest number of
        participants. Join now to secure your spot!
      </p>{" "}
      {Loading ? (
        <LoadingSpinner/>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {campsData
            ?.sort((a, b) => b.participantCount - a.participantCount)
            .slice(0, 6)
            .map((camp, inx) => (
              <CampCard camp={camp} key={inx} />
            ))}
        </div>
      )}
      <button
        color=""
        className="bg-blue-500 hover:bg-blue-50 border  border-transparent hover:border-blue-200 hover:text-black text-white px-5 py-2 duration-300 mx-auto flex mt-10 lg:mt-16"
      >
        <Link to="/availableCamp">View All Medical Camps...</Link>
      </button>
    </section>
  );
};

export default PopulerCamp;
