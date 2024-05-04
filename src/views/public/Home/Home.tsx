import { useState } from 'react';
import reactLogo from '@assets/brands/react.svg';
import './Home.scoped.css';

function Home(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex container-fluid overflow-auto bg-dark">
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
