import React from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="container">
      <Navbar title="eat IT" />
      <hr />
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">items</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">login</a>
        </li>
      </ul>
      <hr />

      <ItemList />

    </div>
  );
}

export default App;
