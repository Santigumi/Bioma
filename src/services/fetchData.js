import { useEffect, useState } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.catalogo.biodiversidad.co/search?fq=REINO:TERRAE")
      .then((response) => response.json())
      .then((data) => setData(data?.results || data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
