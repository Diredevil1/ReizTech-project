import React, { useState, useEffect } from "react";

interface Contentprops {
  data: any;
  name: string;
  region: string;
  area: number;
}

const Content = (props: Contentprops) => {
  const { data } = props;
  const [currData, setCurrData] = useState(data);

  const handleReverseData = () => {
    const newArr = data.reverse();
    setCurrData([...newArr]);
  };

  return (
    <div>
      <nav className="flex flex-row justify-between font-semibold text-teal-400">
        <div className="flex gap-4">
          <button className="border-2 rounded-xl border-teal-400 px-3">
            Lithuania
          </button>
          <button className="border-2 rounded-xl border-teal-400 px-3">
            Oceania
          </button>
        </div>
        <button
          onClick={handleReverseData}
          className="border-2 rounded-xl border-teal-400 p-0.5 px-3"
        >
          A-Z
        </button>
      </nav>
      {data?.map((country: any, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col bg-emerald-400 mt-2 rounded-md"
          >
            <div className="text-blue-600 font-bold m-1 p-1 bg-emerald-200 rounded-md">
              {country.name}
            </div>
            <div className="text-blue-600 font-bold m-1 p-1 bg-emerald-200 rounded-md">
              {country.region}
            </div>
            <div className="text-blue-600 font-bold m-1 p-1 bg-emerald-200 rounded-md">
              {country.area}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
