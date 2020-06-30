import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import RenderNested from './RenderNested';
import RecursiveRender from './RecursiveRender';
import AutoCompleteStyled from './practice/AutoComplete/AutoCompleteStyled'
import Parent from './practice/Parent';
import AutoComplete from './practice/AutoComplete/AutoComplete'
import MyWidget from './practice/MyWidget'
import ClassComponent from './practice/components/ClassComponent'
// import ClickCounter from './practice/components/ClickCounter'
import HookClickCounter from './practice/components/HookClickCounter'
import DataFetching from './practice/components/DataFetching'
import C from './practice/Context/C'
// import ClickCounter from './practice/hoc-practice1/ClickCounter'
// import HoverCounter from './practice/hoc-practice1/HoverCounter'

import ClickCounter from './practice/renderprops/ClickCounter';
import HoverCounter from './practice/renderprops/HoverCounter'

import User from './practice/renderprops/User'

import Counter from './practice/renderprops/Counter'

export const UserContext = React.createContext();

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
      {/* <h1>React 'tds-reactcontextmenu' Demo</h1> */}
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
      {/* <AutoComplete /> */}

      {/* <MyWidget /> */}
      {/* <ClassComponent /> */}

      {/* <ClickCounter /> */}

      {/* <DataFetching  /> */}

      {/* <UserContext.Provider value={"dhana"}> */}
      {/* <C /> */}
      {/* </UserContext.Provider> */}

      {/* <ClickCounter name="Dhana"/> */}

      {/* <HoverCounter /> */}

      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}

      {/* // <User render={(isLoggedIn)=> isLoggedIn ? "Dhana" : "Guest"} /> */}

      <Counter render={(count, incrementCount) =>
        (<ClickCounter count={count} incrementCount={incrementCount} />
        )} />

      <Counter render={(count, incrementCount) =>
        (<HoverCounter count={count} incrementCount={incrementCount} />
        )} />


    </div>


  );
}

export default App;
