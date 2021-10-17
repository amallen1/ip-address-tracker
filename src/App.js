import styled from "styled-components";
import Search from "./components/Search";
import Data from "./components/Data";

const Div = styled.div`
  height: 300px;
  background-image: url("./images/pattern-bg.png");
  background-size: cover;
  background-position: right 43.5% top 0%;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  padding: 0 1.05rem;
  /* display: flex;
  flex-direction: column; */
`;

const Title = styled.h1`
  color: #fff;
  padding: 1.44rem 0;
  font-weight: 500;
  font-size: 1.44rem;
  text-align: center;
`;


function App() {
  return (
    <Div>
      <Container>
        <Title>IP Address Tracker</Title>
        <Search />
        

        {/* this could be the map */}
        <div></div>
      </Container>
    </Div>
  );
}

export default App;
