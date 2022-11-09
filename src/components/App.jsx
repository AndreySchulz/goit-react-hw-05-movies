import { useEffect, useState } from 'react';
import { usePokemonApi } from 'hooks/usePokemonApi';
import Routers from './Routers/Routers';

export function App() {
  return (
    <>
      <h1>App</h1>
      <Routers />
    </>
  );
}
