import styled from "styled-components";

type props = {
  status: string;
};

export const ContainerCard = styled.div`
  width: 270px;
  height: 500px;
  background: var(--midnightblue);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 200px;
`;

export const Status = styled.div`
  display: inline-flex;
  color: var(--yellowLight);
  padding: 0.5rem 1rem;
  border-radius: 2.5rem;
  border: 2px solid var(--yellowDark);
  font-size: 20px;
  width: auto;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5rem;
  margin-right: 20px;
`;

export const StatusColor = styled.span<props>`
  display: block;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  background: ${(props) =>
    props.status === "Alive"
      ? "green"
      : props.status === "Dead"
      ? "red"
      : "grey"};
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const Name = styled.h2`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: var(--yellowLight);
`;

export const List = styled.ul`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  display: flex;
`;

export const ItemResult = styled.h2`
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  color: var(--yellowLight);
  margin-left: 6px;
`;
