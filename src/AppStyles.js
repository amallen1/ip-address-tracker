import styled from "styled-components";

export const Header = styled.div`
  height: 300px;
  background-image: url("./images/pattern-bg.png");
  background-size: cover;
  background-position: right 43.5% top 0%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
`;

export const SearchSection = styled.div`
  padding: 0 1.05rem;
`;

export const Title = styled.h1`
  color: #fff;
  padding: 1.44rem 0;
  font-weight: 500;
  font-size: 1.44rem;
  text-align: center;

  @media (min-width: 750px) {
    font-size: 1.778rem;
  }
`;
