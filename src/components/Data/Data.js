import React from "react";
import { Card, Info, Label, Result } from "./DataStyles";
const Data = ({ data, loading }) => {
  return (
    <div>
      <Card>
        <Info>
          <Label>ip address</Label>
          {loading ? <Result>Loading</Result> : <Result>{data.ip}</Result>}
        </Info>

        <Info>
          <Label>location</Label>
          {loading ? (
            <Result>Loading</Result>
          ) : (
            <Result>
              {data.location.city}, {data.location.region}, {"  "}
              {data.location.postalCode}
            </Result>
          )}
        </Info>

        <Info>
          <Label>timezone</Label>
          {loading ? (
            <Result>Loading</Result>
          ) : (
            <Result>UTC {data.location.timezone}</Result>
          )}
        </Info>

        <Info>
          <Label>isp</Label>
          {loading ? (
            <Result>Loading</Result>
          ) : (
            <Result hasWidth="true">{data.isp}</Result>
          )}
        </Info>
      </Card>
    </div>
  );
};

export default Data;
