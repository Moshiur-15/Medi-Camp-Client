import React, { useEffect, useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  Legend,
  CartesianGrid,
  Area,
  Line,
  ResponsiveContainer,
} from "recharts";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Analytics = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: camp, Loading } = useQuery({
    queryKey: ["analytics", user?.email],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure(`/analytics/${user?.email}`);
        return data;
      } catch (err) {
        console.error(err);
      }
    },
  });

  if (Loading) return <LoadingSpinner />;
  console.log(camp);

  return (
    <div className="w-full min-w-screen-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Participant's Registered Camps Analytics
      </h2>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={camp}
            margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="Participants"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="totalFee" barSize={40} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
