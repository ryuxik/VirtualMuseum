import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import SandBox from './Sandbox';
import About from './About';
import Home from './Home';
import Artists from './Artists';
import Auctions from './Auctions';

function App() {
  const [appState, setAppState] = useState({
    fetchingCollectionList: true,
    collectionList: [],
  })

  useEffect(() => {
    let isMounted = true;
    const collectionsUrl = '/collections';
    fetch(collectionsUrl)
      .then(res => res.json())
      .then(collectionList => {
        if (isMounted) {
          setAppState((state) => {
            return {
              ...state,
              fetchingCollectionList: false,
              collectionList,
            }
          });
        }
      });
    return () => { isMounted = false };
  }, [setAppState]);

  return (
    <div className="museum-app">
      <Navbar />
      <Switch>
        <Route path="/artists">
          <Artists />
        </Route>
        <Route path="/auctions">
          <Auctions />
        </Route>
        <Route path="/collections">
          <SandBox
            collectionList={appState.collectionList}
            fetchingCollectionList={appState.fetchingCollectionList} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
