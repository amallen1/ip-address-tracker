import React, { useState } from "react";
import { Form, Input, SearchButton, Error } from "./SearchStyles";

const Search = ({ setIP, ip, fetchData }) => {
  const [isValid, setIsValid] = useState(true);

  const validateAddress = (ipAddress) => {
    if (ipAddress.split(".").length === 4) {
      const ipv4 = new RegExp(
        "^((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)(\\.(?!$)|$)){4}$"
      );

      if (ipv4.test(ipAddress)) {
        setIsValid(true);
        fetchData();
      } else {
        setIsValid(false);
      }
    } else if (ipAddress.split(":").length === 8) {
      const ipv6 = new RegExp("^(([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}){1}$");

      if (ipv6.test(ipAddress)) {
        setIsValid(true);
        fetchData();
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAddress(ip);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={ip}
          onChange={(e) => setIP(e.target.value)}
          placeholder="Search for any IP address or domain"
        />
        <SearchButton>
          <img src="./images/icon-arrow.svg" alt="Right Arrow Icon" />
        </SearchButton>
      </Form>
      {isValid ? null : (
        <Error>Please enter a valid IPv4 or IPv6 address.</Error>
      )}
    </div>
  );
};

export default Search;
