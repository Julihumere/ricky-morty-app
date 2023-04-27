import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Filters = styled.section`
  width: 25%;
  height: 85vh;
  background: var(--violetDark);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.button`
  width: 50%;
  height: 52px;
  border: 6px solid var(--yellowDark);
  border-radius: 20px;
  margin-top: 40px;
  font-size: 24px;
  color: var(--yellowDark);
  background: transparent;
`;

export const ButtonsSelected = styled.button`
  width: 70%;
  height: 72px;
  border: 10px solid var(--yellowDark);
  border-radius: 20px;
  margin-top: 40px;
  font-size: 36px;
  color: var(--violetDark);
  background: var(--yellowDark);
`;

export const ContainerCard = styled.div`
  background: var(--violetMedium);
  width: 100%;
  height: 85vh;
`;

export const ContainerSelects = styled.div`
  background: var(--violetDark);
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Characters = styled.div`
  height: 87%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    background: var(--yellowDark);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--violetDark);
    width: 8px;
  }
`;

export const Pagination = styled.div`
  margin-top: 80px;
  width: 80%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerButtons = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsPagination = styled.button`
  width: 20%;
  height: 32px;
  border: 3px solid var(--yellowDark);
  border-radius: 20px;
  font-size: 20px;
  color: var(--yellowDark);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
