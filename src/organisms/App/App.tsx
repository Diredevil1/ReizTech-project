import React, { useState, useEffect } from "react";

import Header from "../../molecules/Header/Header";
import Content from "../../molecules/Content/Content";

const App = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch("https://restcountries.com/v2/all?fields=name,region,area")
      ).json();

      setCountryData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Content data={countryData} name={""} region={""} area={0} />
    </div>
  );
};
export default App;
