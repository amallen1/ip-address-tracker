import styled from "styled-components";
import Search from "./components/Search";
// import Map from "./components/Map";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './App.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Container = styled.div`
  height: 100vh;
  background-color: orange;
`;

const Header = styled.div`
  height: 300px;
  background-image: url("./images/pattern-bg.png");
  background-size: cover;
  background-position: right 43.5% top 0%;
  background-repeat: no-repeat;
  position: relative;
`;

const SearchSection = styled.div`
  padding: 0 1.05rem;
`;

const Title = styled.h1`
  color: #fff;
  padding: 1.44rem 0;
  font-weight: 500;
  font-size: 1.44rem;
  text-align: center;

  @media (min-width: 750px) {
    font-size: 1.778rem;
  }
`;

const MapDiv = styled.div`
  transform: translateY(200px);
  height: 100%;
  background-color: pink;
`;

const Box = styled.div`
  height: 100vh;
`;
function App() {
  return (
    <div>
      {/* <Header>
        <SearchSection>
          <Title>IP Address Tracker</Title>
          <Search />
        </SearchSection>
      </Header> */}
      {/* <Map/> */}
      <Box>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </div>
  );
}

export default App;
