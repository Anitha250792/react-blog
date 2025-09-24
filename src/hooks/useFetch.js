<<<<<<< HEAD
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
=======
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
>>>>>>> c856c14a9c831c04ecd30648c86fea9edd501598
