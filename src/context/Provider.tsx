import { useReducer } from "react";
import { PageContext } from "./Context";
import { reducer } from "./Reducer";
import { State } from "../interfaces/interface";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Initial_State: State = {
  allCharacters: [],
  characters: [],
  locations: [],
  episodes: [],
  page: 42,
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

  const filterByStatus = async (payload: string, pageFilter: number) => {
    try {
      if (payload === "All") {
        await getCharacters(1);
        state.page = 42;
      } else {
        return await fetch(
          `https://rickandmortyapi.com/api/character?page=${pageFilter}&status=${payload}`
        )
          .then((response) => response.json())
          .then((response) =>
            dispatch({
              type: "filter_characters_by_status",
              payload: response.results,
              page: response.info.pages,
            })
          );
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <PageContext.Provider
      value={{ state, getCharacters, filterByStatus, dispatch }}
    >
      {children}
    </PageContext.Provider>
  );
};
