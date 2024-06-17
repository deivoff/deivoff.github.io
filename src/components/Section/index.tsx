'use client';

import { useEffect, useState } from 'react';

export const Section = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(1);
  }, []);
  return <div>{counter}</div>;
};
