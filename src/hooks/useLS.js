import { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
const useLS = (key, init_value) => {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key)) ?? init_value);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
