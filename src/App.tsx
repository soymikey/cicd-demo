import type { FC } from 'react';
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

interface Props {
  value: string;
}

const App: FC<Props> = ({ value }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>feature-v.2.0.0 +++</p>
        <p>feature-v.3.0.0</p>
        <p>feature-v.3.0.1</p>
        <p>feature-v.4.0.0</p>
        <p>feature-v.4.0.1</p>
        <p>
          <button role="button" type="button" onClick={() => setCount((v) => v + 1)}>
            count is: {count}
          </button>
        </p>
        <p role="props">{value}</p>
      </header>
    </div>
  );
};

export default App;
