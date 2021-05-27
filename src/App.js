import React, { useEffect, useState } from 'react';
import './App.css';
import Urls from './Urls';
const App = () => {
  return (
    <>
      <div className="App">
        <div className="heading"><h1>Order Your favorite Dish</h1></div>
        <div className="all_btn">
          <button className="btns">All</button>
          <button className="btns">BreakFast</button>
          <button className="btns">Lunch</button>
          <button className="btns">Snacks</button>
          <button className="btns">Dinner</button>
        </div>
        <div className="item_container">
          <Urls />
        </div>
      </div>
    </>
  )
}
   
export default App;