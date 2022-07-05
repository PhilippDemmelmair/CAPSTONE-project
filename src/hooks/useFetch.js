import {useState, useEffect} from 'react';

export default function useFetch(url) {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const doFetch = async () => {
			setLoading(true);
			try {
				const res = await fetch(url);
				const json = await res.json();
				setResponse(json);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		doFetch();
	}, [url]);

	return [response, error, loading];
}
