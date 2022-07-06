import axios from "axios";
import { useCallback, useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const respone = await axios.get(url);
      setData(respone.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData, setData };
};
export default useFetch;
