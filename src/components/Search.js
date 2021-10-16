import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  max-width: 555px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem 1rem 1.0555rem;
  font-size: inherit;
  border-radius: 15px 0px 0px 15px;
  border: none;
  width: 90%;
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
`;

const Search = () => {
  const [ipAddress, setIPAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form action="">
        <Input
          type="type"
          value={ipAddress}
          onChange={(e) => setIPAddress(e.target.value)}
          placeholder="Search for IP Addresses"
        />
        {/* <SearchButton type="submit" value="Search" /> */}
        <SearchButton>
          <img src="./images/icon-arrow.svg" alt="Right Icon" />
        </SearchButton>
      </Form>
    </div>
  );
};

export default Search;
