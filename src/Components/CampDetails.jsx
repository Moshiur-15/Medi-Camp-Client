import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePublic from "../Hook/usePublic";
import LoadingSpinner from "./LoadingSpinner";

const CampDetails = () => {
  const { id } = useParams();
  const axiosSecure = usePublic();
  const [camp, setCamp] = useState([]);
  const [loading, setLoading] = useState();
  console.log(id);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axiosSecure.get(`/campsDetails/${id}`);
      setCamp(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching camp data:", error);
    }
  };
  console.log(camp);
  return (
    <div>
      {loading ? 
      <LoadingSpinner /> : 
      <div>
        <h1>{camp?.campName}</h1>
      </div>}
    </div>
  );
};

export default CampDetails;
