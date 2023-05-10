import { useEffect, useState } from "react";
import { Episode } from "../../interfaces/interface";
import {
  CardTitle,
  ContainerCard,
  DateEpisode,
  NameEpisode,
} from "./CardEpisodesStyle";

type Props = {
  episodes: Episode[];
};

export const CardEpisodes = ({ episodes }: Props) => {
  const [participants, setParticipants] = useState();

  return (
    <>
      {episodes?.map((e) => (
        <ContainerCard>
          <CardTitle>
            <NameEpisode>Episode: {e.name}</NameEpisode>
            <DateEpisode>Data release: {e.air_date}</DateEpisode>
            <DateEpisode>Nº: {e.episode}</DateEpisode>
          </CardTitle>
        </ContainerCard>
      ))}
    </>
  );
};
