import { useState, useLayoutEffect } from 'react';
import './Home.scoped.css';

import reactLogo from '@assets/brands/react.svg';
import api from '@services/api';

function Home(): JSX.Element {
  const [count, setCount] = useState(0);
  const [lorem, setLorem] = useState('');

  useLayoutEffect(() => {
    const loadLorem = async (): Promise<void> => {
      const { data } = await api.get(
        `https://baconipsum.com/api/?type=meat-and-filler&sentences=1&start-with-lorem=1`,
      );
      setLorem(data);
    };

    void loadLorem();
  }, []);

  return (
    <div className="d-flex container-fluid bg-dark">
      <div
        className="text-center m-auto text-light"
        style={{ maxWidth: '340px' }}
      >
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="counter">
          <p>Lorem is: {lorem}</p>
          <button
            className="mb-3"
            type="button"
            onClick={() => setCount(c => c + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default Home;
