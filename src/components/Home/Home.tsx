import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import {
  ContainerHome,
  Filters,
  Buttons,
  ContainerCard,
  ContainerSelects,
  Characters,
  Pagination,
  ButtonsPagination,
  ContainerButtons,
} from "./HomeStyled";
import Select, { OptionProps } from "react-select";
import { CardCharacter } from "../CardCharacter/CardCharacter";
import { CardLocations } from "../CardLocation/CardLocations";
import { CardEpisodes } from "../CardEpisodes/CardEpisodes";
import { PageContext } from "../../context/Context";
import { configSelect } from "../../utils/utils";
import { Loading } from "../Loading/Loading";

type Props = {};

export const Home = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("Characters");
  const [status, setStatus] = useState<string>("All");
  const [page, setPage] = useState<number>(1);
  const [pageFilter, setPageFilter] = useState<number>(1);

  const { state, getCharacters, filterByStatus, dispatch } =
    useContext(PageContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getCharacters(page);
  }, [page]);

  useEffect(() => {
    filterByStatus(status, pageFilter);
  }, [status, pageFilter]);

  const next = () => {
    if (status === "All" && page < state.page) {
      setPage(page + 1);
    } else {
      setPageFilter(pageFilter + 1);
    }
  };

  const prev = () => {
    if (status === "All" && page > 1) {
      setPage(page - 1);
    } else {
      setPageFilter(pageFilter - 1);
    }
  };

  const handleFilter = (e: string) => {
    setFilter(e);
  };

  const optionsStatus = [
    { value: "All", label: "All" },
    { value: "Alive", label: "Alive" },
    { value: "Dead", label: "Dead" },
    { value: "unknown", label: "unknown" },
  ];

  const handleStatus = ({ value }: any) => {
    setStatus(value);
    setPageFilter(pageFilter);
  };

  return (
    <div>
      <Navbar />
      <ContainerHome>
        <Filters>
          <Buttons onClick={() => handleFilter("Characters")}>
            Characters
          </Buttons>
          <Buttons onClick={() => handleFilter("Locations")}>Locations</Buttons>
          <Buttons onClick={() => handleFilter("Episodes")}>Episodes</Buttons>
          <Pagination>
            <h1>
              Page: {status === "All" ? page : pageFilter} of {state.page}
            </h1>
            <ContainerButtons>
              <ButtonsPagination onClick={prev}>&lt;</ButtonsPagination>
              <ButtonsPagination onClick={next}>&gt;</ButtonsPagination>
            </ContainerButtons>
          </Pagination>
        </Filters>
        {loading === true ? (
          <Loading />
        ) : (
          <ContainerCard>
            {filter === "Characters" && (
              <>
                <ContainerSelects>
                  <Select
                    placeholder="Status"
                    options={optionsStatus}
                    defaultValue={optionsStatus[0]}
                    onChange={handleStatus}
                    styles={configSelect}
                  />
                  <Select placeholder="Specie" styles={configSelect} />
                  <Select placeholder="Gender" styles={configSelect} />
                  <Select placeholder="Type" styles={configSelect} />
                </ContainerSelects>
                <Characters>
                  <CardCharacter characters={state.characters} />
                </Characters>
              </>
            )}

            {filter === "Locations" && (
              <>
                <ContainerSelects>
                  <Select placeholder="Name" styles={configSelect} />
                  <Select placeholder="Type" styles={configSelect} />
                  <Select placeholder="Dimension" styles={configSelect} />
                </ContainerSelects>
                <CardLocations locations={state.locations} />
              </>
            )}
            {filter === "Episodes" && (
              <>
                <ContainerSelects>
                  <Select placeholder="Name" styles={configSelect} />
                  <Select placeholder="Episode" styles={configSelect} />
                </ContainerSelects>
                <CardEpisodes episodes={state.episodes} />
              </>
            )}
          </ContainerCard>
        )}
      </ContainerHome>
    </div>
  );
};
