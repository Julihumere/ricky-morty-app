import { Episodes } from "../components/Home/HomeStyled";
import { Characters, Episode, State, Location } from "../interfaces/interface";

type Action =
  | { type: "get_characters"; payload: Characters[]; page: number }
  | { type: "search_characters"; payload: Characters[]; page: number }
  | { type: "filter_characters_by_status"; payload: Characters[]; page: number }
  | { type: "get_locations"; payload: Location[] }
  | { type: "error"; payload: string }
  | { type: "get_episodes"; payload: Episode[]; page: number };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "error": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "get_characters":
      return {
        ...state,
        allCharacters: action.payload,
        characters: action.payload,
        page: action.page,
        error: "",
      };
    case "search_characters":
      return {
        ...state,
        characters: action.payload,
        page: action.page,
        error: "",
      };
    case "get_locations":
      return {
        ...state,
        locations: action.payload,
      };
    case "get_episodes":
      return {
        ...state,
        episodes: action.payload,
        page: action.page,
        error: "",
      };
    default:
      return state;
  }
};
