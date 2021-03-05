import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import SandBox from './Sandbox';

function App() {
  const [collections, setCollections] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch('/collections').then(res => res.json()).then(data => {
      setCollections(data.collections);
      setIsFetching(false);
    });
  }, []);

  return (
    <div className="museum-app">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
      </style>
      <Navbar />
      <SandBox collections={collections} isFetching={isFetching} />
    </div>
  );
}

export default App;
