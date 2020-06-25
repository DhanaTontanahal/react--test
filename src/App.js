import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import RenderNested from './RenderNested';
import RecursiveRender from './RecursiveRender';
import AutoCompleteStyled from './practice/AutoComplete/AutoCompleteStyled'
import Parent from './practice/Parent';
import AutoComplete from './practice/AutoComplete/AutoComplete'

function App() {
  return (
    // <div className="App">
    //   <List />
    //   <RenderNested />

    //   <RecursiveRender />

    //   <Parent />


    //   <AutoComplete />

    // </div>


    <div>
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience the autocomplete !</h2>
      {/* <AutoCompleteStyled
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      /> */}
      <AutoComplete />
    </div>


  );
}

export default App;
