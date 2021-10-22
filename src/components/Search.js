import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  max-width: 555px;
  margin: 0 auto 1.333em;
`;

const Error = styled.p`
  color: lightblue;
  text-align: center;
  margin-bottom: 1.333rem;
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

const Search = ({ setIP, ip, fetchData }) => {
  const [isValid, setIsValid] = useState(true);

  const validateAddress = (ipAddress) => {
    if (ipAddress.split(".").length === 4) {
      const ipv4 = new RegExp("^((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)(\\.(?!$)|$)){4}$");

      if (ipv4.test(ipAddress)) {
        console.log("Valid");
        setIsValid(true);
        fetchData();
      } else {
        console.log("Not valid ipv4 address");
        setIsValid(false);
      }
    } else if (ipAddress.split(":").length === 8) {
      const ipv6 = new RegExp("^(([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}){1}$");

      if (ipv6.test(ipAddress)) {
        console.log("Valid");
        setIsValid(true);
        fetchData();
      } else {
        console.log("Not valid ipv6 address");
        setIsValid(false);
      }
    } else {
      console.log("Not valid ipv4 or ipv6 address");
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
