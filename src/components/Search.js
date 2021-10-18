import React, { useState } from "react";
import styled from "styled-components";
import Data from "./Data";
import axios from "axios";

const Form = styled.form`
  position: relative;
  max-width: 555px;
  margin: 0 auto 1.333em;
`;

const Input = styled.input`
  padding: 1rem 1rem 1rem;
  font-size: inherit;
  font-family: inherit;
  border-radius: 15px 0px 0px 15px;
  border: none;
  width: 90%;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 0.677rem;
  }

  @media (min-width: 750px) {
    ::placeholder {
      font-size: 1rem;
    }
  }
`;

const SearchButton = styled.button`
  padding: 1rem 1rem 1.1rem;
  font-size: inherit;
  border: none;
  border-radius: 0px 15px 15px 0px;
  background-color: #000;
  width: 58px;
  height: 58px;
  text-align: center;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;

  :hover {
    background-color: var(--very-dark-gray);
  }
`;

const Search = () => {
  const [ipAddress, setIPAddress] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    const apiKey = "at_T0MSWNTC1YEN9Qr5akAp1Bj6L7n1M";
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

  const validate = () => {
    // /[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1-3}/
    //71.201.134.49

    //valid from 0 - 99
    //[0-9][0-9]

    //valid from 100 - 199
    //1[0-9][0-9]

    //valid for 200-249
    //2[0-4][0-9]

    //valid for 250 to 255
    //25[0-5]

    //final pattern
    //([0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]?)\.

    let ip = "0.0.0.0";
    let regularExp = new RegExp(
      "([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]?)\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]?)\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]?)\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]?)"
    );
    if (regularExp.test(ip)) {
      console.log("Valid");
    } else {
      console.log("Invalid");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    //validate IP address before fetching the data
    //fetchData();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="type"
          value={ipAddress}
          onChange={(e) => setIPAddress(e.target.value)}
          placeholder="Search for any IP address or domain"
        />
        <SearchButton>
          <img src="./images/icon-arrow.svg" alt="Right Icon" />
        </SearchButton>
      </Form>

      <Data dataObj={data} loading={isLoading} />
    </div>
  );
};

export default Search;
