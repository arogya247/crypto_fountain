import { useState } from 'react';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';

function App() {

  const [data, setData] = useState([])

  return (
    <div className="App">
      <Header />
      <Dashboard data={data} setData={setData} />
    </div>
  );
}

export default App;
