import React from 'react';
import './index.css'
import Fruitinfo from './Fruit_info';

const Items = (props) => {
    return (<>
        <div className="each_item">
            <img src={props.photo} key={props.index} height="96%" width="180" alt="food item" />
            <div className="item_info">
                <Fruitinfo />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quia!</p>
                <h3>Price: 1$</h3>
            </div>
        </div>
    </>)
}
export default Items;