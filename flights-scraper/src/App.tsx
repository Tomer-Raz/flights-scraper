import { useState } from 'react';
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    const response = await fetch("http://localhost:3001/run-script");
    console.log(response);
    
    const result = await response.json();
    setData(result);
  }
  return (
    <div style={{ backgroundColor: "blue" }}>
      <button onClick={handleClick}>Collect Data</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default App;