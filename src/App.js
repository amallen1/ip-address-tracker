import styled from "styled-components";
import Search from "./components/Search";
import Map from "./components/Map";

const Header = styled.div`
  height: 300px;
  background-image: url("./images/pattern-bg.png");
  background-size: cover;
  background-position: right 43.5% top 0%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
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

function App() {
  return (
    <div>
      <Header>
        <SearchSection>
          <Title>IP Address Tracker</Title>
          <Search />
        </SearchSection>
      </Header>

      <Map />
    </div>
  );
}

export default App;
