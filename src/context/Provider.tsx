import { useReducer } from "react";
import { PageContext } from "./Context";
import { reducer } from "./Reducer";
import { State } from "../interfaces/interface";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export type Filter = {
  status: string;
  species: string;
  gender: string;
  type: string;
};

const Initial_State: State = {
  allCharacters: [],
  characters: [],
  locations: [],
  episodes: [],
  page: 0,
  error: "",
};

export const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, Initial_State);

  const getCharacters = async (page: number) => {
    return await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) =>
        dispatch({
          type: "get_characters",
          payload: response.results,
          page: response.info.pages,
        })
      );
  };

  const searchCharacters = async (page: number, data: string) => {
    return await fetch(
      `https://rickandmortyapi.com/api/character?name=${data}&page=${page}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          dispatch({
            type: "error",
            payload: response.error,
          });
        }
        dispatch({
          type: "search_characters",
          payload: response.results,
          page: response.info.pages,
        });
      })
      .catch((err: unknown) => {
        return `Ocurrio un error con ${err}`;
      });
  };

  const filterByStatus = async (payload: Filter, pageFilter: number) => {
    try {
      return await fetch(
        `https://rickandmortyapi.com/api/character?page=${pageFilter}&status=${payload.status}&species=${payload.species}&gender=${payload.gender}`
      )
        .then((response) => response.json())
        .then((response) =>
          dispatch({
            type: "get_characters",
            payload: response.results,
            page: response.info.pages,
          })
        );
    } catch (error) {
      throw error;
    }
  };

  //Episodes
  const getEpisodes = async (page: number) => {
    return await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((response) => response.json())
      .then((response) =>
        dispatch({
          type: "get_episodes",
          payload: response.results,
          page: response.info.pages,
        })
      );
  };

  // const pages = async(type: string) => {
  //   return await fetch(`https://rickandmortyapi.com/api/${type}`)
  //   .then((response) =>  response.json())
  //   .then((response => dispatch({
  //     type: 'set_page',
  //     payload: response.info.pages
  //   })))
  // }

  return (
    <PageContext.Provider
      value={{
        state,
        getCharacters,
        searchCharacters,
        filterByStatus,
        dispatch,
        getEpisodes,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
