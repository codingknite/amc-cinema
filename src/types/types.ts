interface MovieGenre {
  id: number;
  name: string;
}

export interface TicketTypes {
  id: number;
  kids: number;
  adults: number;
  seniors: number;
  cinema: string;
  screen: string;
  date: string;
}
export interface GenresInfo {
  id: number;
  name: string;
  movies: boolean;
  series: boolean;
}

export interface Cast {
  id: number;
  cast_id: number;
  name: string;
  profile_path: string;
}

export interface MovieResults {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  genres: MovieGenre[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  name: string | null;
  tagline: string;
  runtime: number | null;
  homepage: string;
  imdb_id: string | null;
}

export interface SerieResults {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: Array<string>;
  genre_ids: Array<number>;
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}
export interface TmdbMovieApiResponse {
  results: MovieResults[];
}

export interface AmcApiResponse {
  data: MovieResults[];
}

export interface TmdbSerieApiResponse {
  results: SerieResults[];
}
