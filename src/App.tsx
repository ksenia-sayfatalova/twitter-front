import React, {Fragment} from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import Header from "./Layout/Header/Header";
import {Cover} from "./Layout/Cover/Cover.js";

function App() {
  return <Fragment>
    <Header/>
      <Cover/>
  </Fragment>
}

export default App;
