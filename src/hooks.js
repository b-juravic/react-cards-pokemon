import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

// hook to flip over a card
function useFlip(initialVal=false) {
  const [value, setValue] = useState(initialVal);

  const flip = () => {
    setValue(oldValue => !oldValue);
  };

  return [value, flip];
}

function useAxios(url) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function fetchData() {
    let makeRequest = async () => {
      try{
        const res = await axios.get(url);
        let addNew = res.data;
        setResponse(response => ([
          ...response,
          {...addNew,
            id: uuid()
          }]))

      }catch(error) {
        setError(error);
      }
      setIsLoading(false);
    }
    makeRequest();

  }
  return [response, fetchData];
}


export { useFlip, useAxios };