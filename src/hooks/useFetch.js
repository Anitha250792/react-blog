

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
};

export default useFetch;

