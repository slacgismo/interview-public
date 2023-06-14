import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const dataUrl = 'http://localhost:5000/api'

  useEffect(() => {
    fetchVersionData();
  }, []);

  const fetchVersionData = () => {
<todo>
  }

  return (
    <div className="App">
      <button onClick={fetchVersionData}>Refresh</button>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default App;

