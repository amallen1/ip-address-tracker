import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  max-width: 555px;
  margin: 0 auto 1.333em;
`;

export const Error = styled.p`
  color: lightblue;
  text-align: center;
  margin-bottom: 1.333rem;
`;

export const Input = styled.input`
  padding: 1rem 1rem 1rem;
  font-size: inherit;
  font-family: inherit;
  border-radius: 15px 0px 0px 15px;
  border: none;
  width: 90%;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 0.677rem;
  }

  @media (min-width: 750px) {
    ::placeholder {
      font-size: 1rem;
    }
  }
`;

export const SearchButton = styled.button`
  padding: 1rem 1rem 1.1rem;
  font-size: inherit;
  border: none;
  border-radius: 0px 15px 15px 0px;
  background-color: #000;
  width: 58px;
  height: 58px;
  text-align: center;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;

  :hover {
    background-color: var(--very-dark-gray);
  }
`;