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
    letter-spacing: -0.18px;
    line-height: 24px;
  }

  @media (min-width: 750px) {
    text-align: left;
    display: flex;
    margin: 0 auto;
    height: 161px;
    padding: 2.05rem 1.777rem;
  }

  @media (min-width: 1024px) {
    max-width: 1110px;
  }
`;

const Label = styled.label`
  color: var(--dark-gray);
  font-size: 0.555em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.46px;
  line-height: 12px;
  margin-bottom: 0.3888rem;

  @media (min-width: 750px) {
    font-size: 0.667rem;
    margin-bottom: 0.772rem;
  }
`;

const Info = styled.div`
  margin-bottom: 1.33rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    margin: 0 1.777rem;
  }
`;

const Data = ({ dataObj, loading }) => {
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
          <Label>ip address</Label>
          {loading ? <h3>192.212.174.101</h3> : <h3>{dataObj.ip}</h3>}
        </Info>

        <Info>
          <Label>location</Label>
          {loading ? (
            <h3>Brooklyn, NY 10001</h3>
          ) : (
            <h3>
              {dataObj.location.city}, {dataObj.location.region},{" "}
              {dataObj.location.postalCode}
            </h3>
          )}
        </Info>

        <Info>
          <Label>timezone</Label>
          {loading ? (
            <h3>UTC -05:00</h3>
          ) : (
            <h3>UTC {dataObj.location.timezone}</h3>
          )}
        </Info>

        <Info>
          <Label>isp</Label>
          {loading ? <h3>SpaceX Starlink</h3> : <h3>{dataObj.isp}</h3>}
        </Info>
      </Card>
    </div>
  );
};

export default Data;
