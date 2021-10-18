import styled from "styled-components";
import Search from "./components/Search";

const Header = styled.div`
  height: 300px;
  background-image: url("./images/pattern-bg.png");
  background-size: cover;
  background-position: right 43.5% top 0%;
  background-repeat: no-repeat;
`;

const Container = styled.div`
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
  height: (100vh - 300px);
  background-color: pink;
`;

const Map = styled.div`
  height: 100%;
  width: 100px;
  background-color: yellow;
`;

function App() {
  return (
    <div>
      <Header>
        <Container>
          <Title>IP Address Tracker</Title>
          <Search />
        </Container>
      </Header>

      <MapDiv></MapDiv>

      {/* <Map></Map> */}
    </div>
  );
}

export default App;
