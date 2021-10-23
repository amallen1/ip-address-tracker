import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

//Need this to import marker icon

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Container = styled.div`
  height: calc(100vh - 300px);
`;

const Map = ({ data }) => {
  const center = [data.location.lat, data.location.lng];

  const changeLocation = (map) => {
    map.flyTo(center);
  };

  return (
    <Container>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ zIndex: "1", height: "100%" }}
      >
        <MapConsumer>
          {(map) => {
            changeLocation(map);
            return null;
          }}
        </MapConsumer>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            <h2>
              {data.location.city}, {data.location.region}
            </h2>
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
