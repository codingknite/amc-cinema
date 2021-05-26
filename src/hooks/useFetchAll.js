import { useState, useEffect, } from 'react';
import { APIKey, baseUrl } from 'utils/config';

export default function useFetchAll(urls) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const promises = urls.map((url) =>
            fetch(`${baseUrl}/movie/${url}?api_key=${APIKey}&language=en-US&append_to_response=videos`).then(response => {
                if (response.ok) return response.json();
                throw response;
            }));

        Promise.all(promises)
            .then(json => setData(json))
            .catch((e) => {
                console.error(e);
                setError(e);
            })
            .finally(() => setLoading(false));
    }, [urls]);

    return { data, error, loading };
}