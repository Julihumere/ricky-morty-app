import { createContext } from "react";
import { State } from "../interfaces/interface";
export type ContextProps = {
  state: State;
  getCharacters: (page: number) => void;
  filterByStatus: (data: string, pageFilter: number) => void;
  dispatch: React.Dispatch<any>;
};

export const PageContext = createContext<ContextProps>({} as ContextProps);
