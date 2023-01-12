import axios from "axios";
import { useEffect, useState } from "react";

function useGetApi(url) {

  const [data, useData] = useState([]);

  const getData = () => {
    axios
      .get(`${url}`)
      .then((reply) => {
        if (reply.status === 200) {
          useData(reply.data);
        }
      })
      .catch(error => {
        console.log(error);
        useData([]);
      });
  }

  useEffect(() => {
    getData()
  }, []);

  return {
    data,
    getData
  };

};

export default useGetApi;