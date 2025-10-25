import axios from "axios";
import { useEffect, useState } from "react";

const useAppDatas = () => {
  const [appData, setAppData] = useState([]);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/appDeatail.json")
      .then((data) => setAppData(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { appData, loding, error };
};
export default useAppDatas;
