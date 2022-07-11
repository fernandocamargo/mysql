import { useEffect, useState } from 'react';

export default () => {
  const [results, persist] = useState([]);

  useEffect(() => {
    window
      .fetch('/products')
      .then((response) => response.json())
      .then(persist);
  }, []);

  return { results };
};
