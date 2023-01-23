import React from "react";

interface Contentprops {
  data: any;
  name: string;
  region: string;
  area: number;
}

const Content = (props: Contentprops) => {
  const { data } = props;
  const countries = data;
  console.log(countries);

  const renderCountries = countries?.map((country: any, index: number) => {
    return (
      <div key={index} className="flex flex-col bg-emerald-400 mt-2 rounded-md">
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
  });

  return <div>{renderCountries}</div>;
};

export default Content;
