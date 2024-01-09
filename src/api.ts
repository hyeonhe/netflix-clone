const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?language=ko-KR&region=KR&api_key=${API_KEY}`
  ).then((response) => response.json());
}

export function topLatedMovies() {
  return fetch(
    `${BASE_PATH}/movie/top_rated?language=ko-KR&page=1&region=KR&api_key=${API_KEY}`
  ).then((response) => response.json());
}

export function upcomingMovies() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?language=ko-KR&page=1&region=KR&api_key=${API_KEY}`
  ).then((response) => response.json());
}
