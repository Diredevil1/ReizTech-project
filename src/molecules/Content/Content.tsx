import React, { useState, useEffect } from "react";

import Pagination from "../Pagination/Pagination";

const Content = () => {
  // Fetching and filtering
  const [countryData, setCountryData] = useState<any[]>([]);

  const [isFilteredData, setIsFilteredData] = useState<any[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch("https://restcountries.com/v2/all?fields=name,region,area")
      ).json();

      setCountryData(data);
    };
    fetchData();
  }, []);

  // Ascending/Descending
  const [isReversed, setIsReversed] = useState(false);

  // Pagination part
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(5);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = isFiltered
    ? isFilteredData.slice(indexOfFirstCountry, indexOfLastCountry)
    : countryData.slice(indexOfFirstCountry, indexOfLastCountry);

  const pages = Math.ceil(
    isFiltered
      ? isFilteredData.length / countriesPerPage
      : countryData.length / countriesPerPage
  );

  // Handles
  const handleReverseData = () => {
    isFiltered ? isFilteredData.reverse() : countryData.reverse();
    setIsReversed(!isReversed);
  };

  const handleSmallArea = () => {
    const lithuania = countryData.filter(
      (country: any) => country.name === "Lithuania"
    );
    const newArr = countryData.filter(
      (country: any) => country.area < lithuania[0].area
    );
    setIsFilteredData([...newArr]);
    setCurrentPage(1);
    setIsFiltered(true);
  };

  const handleOceania = () => {
    const oceania = countryData.filter(
      (country: any) => country.region === "Oceania"
    );
    const newArr = countryData.filter(
      (country: any) => country.region === oceania[0].region
    );
    setIsFilteredData([...newArr]);
    setCurrentPage(1);
    setIsFiltered(true);
  };

  return (
    <div>
      <nav className="flex flex-row justify-between font-semibold text-teal-400 ">
        <div className="flex gap-4">
          <button
            onClick={handleSmallArea}
            className="border-2 rounded-xl border-teal-400 px-3 hover:bg-teal-400 hover:text-indigo-700 focus:border-orange-500"
          >
            {`< Lithuania`}
          </button>
          <button
            onClick={handleOceania}
            className="border-2 rounded-xl border-teal-400 px-3 hover:bg-teal-400 hover:text-indigo-700 focus:border-orange-500"
          >
            Oceania countries
          </button>
        </div>
        <button
          onClick={handleReverseData}
          className="border-2 rounded-xl border-teal-400 p-0.5 px-3 hover:bg-teal-400 hover:text-indigo-700"
        >
          {isReversed ? "Z-A" : "A-Z"}
        </button>
      </nav>
      {currentCountries.map((country: any, index: number) => {
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
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Content;
