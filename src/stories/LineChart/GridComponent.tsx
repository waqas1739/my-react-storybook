
import React, { useRef, useState } from "react";
import LineChart from "./LineChart"
import SignalsData from "./Signal";


const GridComponent: React.FC = () => {
  const [chartData, setChartData] = React.useState<number[]>([
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    143,
    199,
    234,
    545,
    452,
    552,
    7666,
  ]);

  const handleUpdateChart = () => {
    // Generate new chart data
    const newChartData = chartData.map((dataPoint) =>
      Math.floor(Math.random() * 1000)
    );
    setChartData(newChartData);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      handleUpdateChart();
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);
  const [activeSignals, setActiveSignals] = useState([0, 1, 2, 3])
  const handleSignals = (signalId: number) => {
    if (activeSignals.includes(signalId)) {
      setActiveSignals(activeSignals.filter((id) => id !== signalId))
    } else {
      setActiveSignals([...activeSignals, signalId])
    }
  }

  return (
    <div>
      <SignalsData
        activeSignals={activeSignals}
        onsignalChange={handleSignals}
      />
      <LineChart 
      data={chartData} 
      activeData={activeSignals} 
      />
    </div>
  );
};

export default GridComponent;
