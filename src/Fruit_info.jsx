import React from 'react'
import FruitList from './FruitList';
export default function Fruit_info(){
    return (
        <>
            {
                FruitList.map((fruit)=>{
                    let fruit_name = fruit.fruitName;
                    return <h3>{fruit_name}</h3>
                })
            }
        </>
    )
}