import { useEffect } from "react";
import { Characters, State } from "../../interfaces/interface";
import {
  ContainerCard,
  Info,
  Image,
  Name,
  List,
  Item,
  ItemResult,
  Status,
  StatusColor,
} from "../CardCharacter/CardCharacterStyle";

type Props = {
  characters: Characters[];
};

export const CardCharacter = ({ characters }: Props) => {
  return (
    <>
      {characters?.map((e: Characters) => (
        <ContainerCard>
          <Status>
            <StatusColor status={e.status}></StatusColor>
            <h5>{e.status}</h5>
          </Status>
          <Info>
            <Image src={e.image} alt={e.name} />
            <Name>{e.name}</Name>
          </Info>
          <Info>
            <List>
              <Item>
                Specie: <ItemResult>{e.species}</ItemResult>
              </Item>
              <Item>
                Gender: <ItemResult>{e.gender}</ItemResult>
              </Item>
              <Item>
                Type:{" "}
                <ItemResult>{e.type === "" ? "unknown" : e.type}</ItemResult>
              </Item>
            </List>
          </Info>
        </ContainerCard>
      ))}
    </>
  );
};
