import { useState, useEffect } from 'react';
import { APIKey, baseUrl } from 'utils/config';

interface Genres {
  id: number;
  name: string;
}

interface Language {
  name: string;
}
interface Data {
  backdrop_path: string | null;
  genres: Genres[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  overview: string | null;
  poster_path: string | null;
  release_date: string | null;
  runtime: number | null;
  spoken_languages: Language[];
  tagline: string | null;
  title: string;
  vote_average: number;
  prevState: null;
}

interface ReturnTypes {
  data: Data[] | null;
  error: unknown;
  loading: boolean;
}

const useFetchAll = (urls: Array<number>): ReturnTypes => {
  const [data, setData] = useState<Data[] | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const promises = urls.map((url) =>
      fetch(
        `${baseUrl}/movie/${url}?api_key=${APIKey}&language=en-US&append_to_response=videos`
      ).then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
    );

    Promise.all(promises)
      .then((data) => setData(data))
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [urls]);

  return { data, error, loading };
};

export default useFetchAll;
