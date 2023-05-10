import { createContext } from "react";
import { State } from "../interfaces/interface";
import { Filter } from "./Provider";
export type ContextProps = {
  state: State;
  getCharacters: (page: number) => void;
  searchCharacters: (page: number, data: string) => void;
  filterByStatus: (data: Filter, pageFilter: number) => void;
  dispatch: React.Dispatch<any>;
  getEpisodes: (page: number) => void;
};

export const PageContext = createContext<ContextProps>({} as ContextProps);
