"use client";
import React from "react";
import moment from "moment";

const Row = ({ idFreight, client, destination, plate, date }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[10%] max-w-[10%]">
        <p className="text-gray-900 whitespace-no-wrap">{idFreight}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[30%] max-w-[30%]">
        <p className="text-gray-900 whitespace-no-wrap">{client}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
        <p className="text-gray-900 whitespace-no-wrap">{destination}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[10%] max-w-[10%]">
        <p className="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
          {plate}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
        <p className="text-gray-900 whitespace-no-wrap">
          {moment(date).utc().format("YYYY-MM-DD")}
        </p>
      </td>
    </tr>
  );
};

export default Row;
