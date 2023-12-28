import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

function Home(): React.ReactElement {
  const msg = useSelector((state: RootState) => state.routine.msg);

  return (
    <>
      <p>Home Page</p>
      <p>{msg}</p>
    </>
  );
}

export default Home;
