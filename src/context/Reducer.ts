import { Characters, Episode, State, Location } from "../interfaces/interface";

type Action =
  | { type: "get_characters"; payload: Characters[]; page: number }
  | { type: "filter_characters_by_status"; payload: Characters[]; page: number }
  | { type: "get_locations"; payload: Location[] }
  | { type: "get_episodes"; payload: Episode[] };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "get_characters":
      return {
        ...state,
        allCharacters: action.payload,
        characters: action.payload,
      };
    case "filter_characters_by_status":
      return {
        ...state,
        characters: action.payload,
        page: action.page,
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
      };
    default:
      return state;
  }
};
