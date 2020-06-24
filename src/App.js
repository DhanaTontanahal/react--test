import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import RenderNested from './RenderNested';
import RecursiveRender from './RecursiveRender';

import Parent from './practice/Parent';

function App() {
  return (
    <div className="App">
      {/* <List /> */}
      {/* <RenderNested /> */}

      {/* <RecursiveRender /> */}

      <Parent />

    </div>
  );
}

export default App;
