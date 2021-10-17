import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 1.44em 1.33em 0em;
  text-align: center;
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  @media (min-width: 777px) {
    text-align: left;
    margin: 0 auto;
    height: 161px;
    //padding: 2.05rem 0 0;
    padding: 2.05rem 1.777rem 0;

    flex-direction: row;
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
    margin-bottom: 0.722rem;
    line-height: 14px;
    letter-spacing: 1.75px;
  }
`;

const Info = styled.div`
  margin-bottom: 1.33rem;
  display: flex;
  flex-direction: column;
  position: relative;
  column-gap: 1.777rem;
  flex-wrap: wrap;

  @media (min-width: 777px) {
    margin: 0 1.777rem;
    max-width: 213px;
    /* flex: 1; */

    :first-child {
      margin-left: 0;
    }

    ::after {
      content: "";
      position: absolute;
      right: -1.77rem;
      height: 75px;
      background-color: rgba(0, 0, 0, 0.15);
      width: 1px;
      margin-left: 1.777rem;
    }

    :last-child::after {
      display: none;
    }
  }
`;

const Result = styled.h3`
  font-weight: 500;
  color: var(--very-dark-gray);
  font-size: 1.11rem;
  letter-spacing: -0.18px;
  line-height: 24px;

  @media (min-width: 750px) {
    font-size: 1.444rem;
    line-height: 30px;
    letter-spacing: -0.23px;
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
          {loading ? (
            <Result>192.212.174.101</Result>
          ) : (
            <Result>{dataObj.ip}</Result>
          )}
        </Info>

        <Info>
          <Label>location</Label>
          {loading ? (
            <Result>Brooklyn, NY 10001</Result>
          ) : (
            <Result>
              {dataObj.location.city}, {dataObj.location.region},{" "}
              {dataObj.location.postalCode}
            </Result>
          )}
        </Info>

        <Info>
          <Label>timezone</Label>
          {loading ? (
            <Result>UTC -05:00</Result>
          ) : (
            <Result>UTC {dataObj.location.timezone}</Result>
          )}
        </Info>

        <Info>
          <Label>isp</Label>
          {loading ? (
            <Result>SpaceX Starlink</Result>
          ) : (
            <Result>{dataObj.isp}</Result>
          )}
        </Info>
      </Card>
    </div>
  );
};

export default Data;
