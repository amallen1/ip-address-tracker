import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 1.44em 1.33em 0em;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0984);

  @media (min-width: 850px) {
    text-align: left;
    margin: 0 auto;

    padding: 2.05rem 1.777rem;
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

  @media (min-width: 850px) {
    margin: 0 1.777rem;
    width: 213px;

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

  @media (min-width: 850px) {
    ${({ hasWidth }) =>
      hasWidth &&
      `max-width: 190px;
  `}
  }
`;

const Data = ({ dataObj, loading }) => {
  console.log(dataObj);
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
              {dataObj.location.city}, {dataObj.location.region},
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
            <Result hasWidth="true">SpaceX Starlink</Result>
          ) : (
            <Result hasWidth="true">{dataObj.isp}</Result>
          )}
        </Info>
      </Card>
    </div>
  );
};

export default Data;
