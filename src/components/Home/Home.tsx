import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import {
  ContainerHome,
  Filters,
  Buttons,
  ContainerCard,
  Characters,
  Pagination,
  ButtonsPagination,
  ContainerButtons,
  Page,
  ErrorContainer,
  ErrorImage,
  ErrorText,
  Episodes,
} from "./HomeStyled";
import Select, { OptionProps } from "react-select";
import { CardCharacter } from "../CardCharacter/CardCharacter";
import { CardLocations } from "../CardLocation/CardLocations";
import { CardEpisodes } from "../CardEpisodes/CardEpisodes";
import { PageContext } from "../../context/Context";
import { Loading } from "../Loading/Loading";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import error from "../../assets/error.png";

import { FiltersPage } from "../Filters/Filters";

type Props = {};

export const Home = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("character");

  //Pagination
  const [element, setElement] = useState<string>("All");
  const [page, setPage] = useState<number>(1);
  const [pageEpisode, setPageEpisode] = useState<number>(1);
  const [pageSearch, setPageSearch] = useState<number>(1);
  const [pageFilter, setPageFilter] = useState<number>(1);
  const [firstCharge, setFirstCharge] = useState(true);

  const {
    state,
    getCharacters,
    searchCharacters,
    filterByStatus,
    dispatch,
    getEpisodes,
  } = useContext(PageContext);

  useEffect(() => {
    setElement("All");
    getCharacters(page);
    if (filter === "episode") {
      getEpisodes(pageEpisode);
    }
  }, [element, filter, page]);

  const next = () => {
    if (element === "All" && page < state.page) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setPage(page + 1);
      setPageEpisode(pageEpisode + 1);
    }
    if (element === "Search" && pageSearch < state.page) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setPageSearch(pageSearch + 1);
      setPageEpisode(pageEpisode + 1);
    }
    if (element === "Filter" && pageFilter < state.page) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setPageFilter(pageFilter + 1);
      setPageEpisode(pageEpisode + 1);
    }
  };

  const prev = () => {
    if (element === "All" && page > 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setPage(page - 1);
      setPageEpisode(pageEpisode - 1);
    }
    if (element === "Search" && pageSearch > 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setPageSearch(pageSearch - 1);
      setPageEpisode(pageEpisode - 1);
    }
    if (element === "Filter" && pageFilter > 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setPageFilter(pageFilter - 1);
      setPageEpisode(pageEpisode - 1);
    }
  };

  const handleType = (e: string) => {
    setFilter(e);
  };

  return (
    <div>
      <Navbar
        filter={filter}
        dispatch={dispatch}
        pageSearch={pageSearch}
        searchCharacters={searchCharacters}
        setElement={setElement}
      />
      <ContainerHome>
        <Filters>
          <Buttons onClick={() => handleType("character")}>Characters</Buttons>
          <Buttons onClick={() => handleType("location")}>Locations</Buttons>
          <Buttons onClick={() => handleType("episode")}>Episodes</Buttons>
          <Pagination>
            <Page>
              {element === "All" && `Page: ${page} of ${state.page}`}
              {element === "Search" && `Page: ${pageSearch} of ${state.page}`}
              {element === "Filter" && `Page: ${pageFilter} of ${state.page}`}
            </Page>
            <ContainerButtons>
              <ButtonsPagination onClick={prev}>
                <img src={arrowLeft} />
              </ButtonsPagination>
              <ButtonsPagination onClick={next}>
                <img src={arrowRight} />
              </ButtonsPagination>
            </ContainerButtons>
          </Pagination>
        </Filters>

        <ContainerCard>
          {filter === "character" && (
            <FiltersPage
              filter={filter}
              filterByStatus={filterByStatus}
              dispatch={dispatch}
              getCharacters={getCharacters}
            />
          )}

          {filter === "character" && (
            <>
              {loading === true ? (
                <Loading />
              ) : state.error ? (
                <ErrorContainer>
                  <ErrorImage src={error} alt="" />
                  <ErrorText>{state.error}</ErrorText>
                </ErrorContainer>
              ) : (
                <Characters>
                  <CardCharacter characters={state.characters} />
                </Characters>
              )}
            </>
          )}

          {filter === "location" && (
            <>
              <CardLocations locations={state.locations} />
            </>
          )}
          {filter === "episode" && (
            <Episodes>
              <CardEpisodes episodes={state.episodes} />
            </Episodes>
          )}
        </ContainerCard>
      </ContainerHome>
    </div>
  );
};
