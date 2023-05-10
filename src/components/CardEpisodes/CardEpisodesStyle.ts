import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 80%;
  height: 300px;
  background: var(--violetLight);
  margin: 30px;
  padding: 1rem;
  border-radius: 20px;
  border: 5px solid var(--yellowDark);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const NameEpisode = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: var(--violetDark);
`;

export const DateEpisode = styled.h4`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: var(--yellowLight);
`;
