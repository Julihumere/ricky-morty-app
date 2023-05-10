import styled from "styled-components";

export const ContainerSelects = styled.div`
  background: var(--violetDark);
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonRefresh = styled.img`
  cursor: pointer;
`;

export const ButtonSubmit = styled.button`
  background: none;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  border: 3px solid var(--yellowDark);
  border-radius: 20px;
  font-size: 20px;
  color: var(--yellowDark);
  background: transparent;
`;
