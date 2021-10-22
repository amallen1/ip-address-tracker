import { useState, useEffect } from "react";
import Search from "./components/Search";
import Map from "./components/Map";
import Data from "./components/Data";
import axios from "axios";
import { Header, SearchSection, Title } from "./AppStyles";

function App() {
  const [ipAddress, setIPAddress] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!data) {
      axios
        .get("https://api.ipify.org?format=json")
        .then((response) => {
          console.log("initial page load");
          setIPAddress(response.data.ip);
          fetchData();
          setIPAddress("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const fetchData = async () => {
    //FIXME: hide apikey
    const apiKey = "at_T0MSWNTC1YEN9Qr5akAp1Bj6L7n1M";
    console.log("i am fetching");
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header>
        <SearchSection>
          <Title>IP Address Tracker</Title>
          <Search setIP={setIPAddress} ip={ipAddress} fetchData={fetchData} />
          <Data dataObj={data} loading={isLoading} />
        </SearchSection>
      </Header>

      {data ? <Map data={data} /> : null}
    </div>
  );
}

export default App;
