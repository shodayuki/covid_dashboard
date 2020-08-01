import React from 'react';
import './App.css';
import Cards from "./features/covid/Cards/Cards";
import Chart from "./features/covid/Chart/Chart";
import PieChart from "./features/covid/PieChart/PieChart";
import SwitchCoutry from "./features/covid/SwitchCoutry/SwitchCoutry";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
        <Chart />
        <PieChart />
        <SwitchCoutry />
      </header>
    </div>
  );
}

export default App;