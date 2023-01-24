import React, { useState } from "react";

interface Contentprops {
  data: any;
  name: string;
  region: string;
  area: number;
}

const Content = (props: Contentprops) => {
  const { data } = props;
  const [currData, setCurrData] = useState(data);

  const handleAllCountries = () => {
    setCurrData(data);
  };

  const handleReverseData = () => {
    const newArr = currData?.reverse();
    setCurrData([...newArr]);
  };

  const handleSmallArea = () => {
    const lithuania = data?.filter(
      (country: any) => country.name === "Lithuania"
    );
    const newArr = data?.filter(
      (country: any) => country.area < lithuania[0].area
    );
    setCurrData([...newArr]);
  };

  const handleOceania = () => {
    const oceania = data?.filter(
      (country: any) => country.region === "Oceania"
    );
    const newArr = data?.filter(
      (country: any) => country.region === oceania[0].region
    );
    setCurrData([...newArr]);
  };

  return (
    <div>
      <nav className="flex flex-row justify-between font-semibold text-teal-400">
        <div className="flex gap-4">
          <button
            onClick={handleAllCountries}
            className="border-2 rounded-xl border-teal-400 px-3"
          >
            All Countries
          </button>
          <button
            onClick={handleSmallArea}
            className="border-2 rounded-xl border-teal-400 px-3"
          >
            {`< Lithuania`}
          </button>
          <button
            onClick={handleOceania}
            className="border-2 rounded-xl border-teal-400 px-3"
          >
            Oceania countries
          </button>
        </div>
        <button
          onClick={handleReverseData}
          className="border-2 rounded-xl border-teal-400 p-0.5 px-3"
        >
          A-Z
        </button>
      </nav>
      {currData?.map((country: any, index: number) => {
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
