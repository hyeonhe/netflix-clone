import { atom } from "recoil";
import { IMovie } from "./api";

export const movieState = atom<IMovie>({
  key: "movie",
  default: {
    id: 0,
    backdrop_path: "",
    poster_path: "",
    title: "",
    overview: "",
  },
});
