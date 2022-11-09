import { useState, useEffect } from 'react';

const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

export const usePokemonApi = (options, page) => {
  const [result, setResult] = useState(options ? {} : []);

  useEffect(() => {
    fetch(`${BASEURL}${options ?? ''}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error();
      })
      .then(r => {
        setResult(options ? r : r.results);
      });
  }, [options]);

  return result;
};

//
