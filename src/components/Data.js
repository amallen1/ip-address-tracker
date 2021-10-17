import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 1.44em 1.33em 0em;
  text-align: center;
  border: 1px solid black;

  h3 {
    font-weight: 500;
    color: var(--very-dark-gray);
    font-size: 1.11rem;
  }
`;

const Label = styled.label`
  color: var(--dark-gray);
  font-size: 0.555em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.46px;
`;

const Info = styled.div`
  margin-bottom: 1.33rem;
`;

const Data = ({ ip, dataObj, loading }) => {
  useEffect(() => {
    console.log("checking for data");
    console.log(dataObj);
    console.log("checking for loading");
    console.log(loading);
  }, [loading]);

  return (
    <div>
      <Card>
        <Info>
          <Label htmlFor="">ip address</Label>
          {loading ? <h3>192.212.174.101</h3> : <h3>{dataObj.ip}</h3>}
        </Info>

        <Info>
          <Label htmlFor="">location</Label>
          {loading ? <h3>Brooklyn, NY 10001</h3> : "hi"}
        </Info>

        <Info>
          <Label htmlFor="">timezone</Label>
          {loading ? (
            <h3>UTC -05:00</h3>
          ) : (
            <h3>UTC {dataObj.location.timezone}</h3>
          )}
        </Info>

        <Info>
          <Label htmlFor="">isp</Label>
          {loading ? <h3>SpaceX Starlink</h3> : <h3>{dataObj.isp}</h3>}
        </Info>
      </Card>
    </div>
  );
};

export default Data;
