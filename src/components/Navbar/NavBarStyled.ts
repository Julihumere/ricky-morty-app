import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  background-color: var(--violetDark);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 300px;
  height: 80px;
  margin-left: 50px;
`;

export const Search = styled.input`
  width: 30%;
  height: 50px;
  border: 4px solid var(--yellowDark);
  border-radius: 20px;
  background: transparent;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: #c8b400;
  padding: 0px 20px;
  margin-right: 50px;

  ::placeholder {
    font-weight: bold;
    font-size: 18px;
    color: #c8b400;
    background-image: url("../../assets/search-normal.png");
    background-repeat: no-repeat;
    background-position: 0px center;
  }
`;
