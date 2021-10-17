import styled from "styled-components";
import Search from "./components/Search";

const Div = styled.div`
  height: 300px;
  background-image: url("./images/pattern-bg.png");
  background-size: cover;
  background-position: right 43.5% top 0%;
  background-repeat: no-repeat;
  position: relative;
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

  @media (min-width: 780px) {
    font-size: 1.778rem;
  }
`;

const Map = styled.div`
  position: absolute;
  top: 0px;
  height: 100px;
  width: 100px;
  background-color: yellow;
`;

function App() {
  return (
    <Div>
      <Container>
        <Title>IP Address Tracker</Title>
        <Search />
      </Container>

      {/* <Map></Map> */}
    </Div>
  );
}

export default App;
