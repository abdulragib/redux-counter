import React from 'react'
import { INCREMENT,DECREMENT } from '../../Store/action';
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  function handleAction(operation){
     if(operation==="+")
     {
       dispatch({type:INCREMENT});
     }
     else
     {
       dispatch({type:DECREMENT});
     }
  }

  return (
    <div className='Main'>
        <h1>Counter Value: {store.count}</h1>
        <button onClick={()=>handleAction("+")}>+</button>
        <br></br>
        <button onClick={()=>handleAction("-")}>-</button>
    </div>
  )
}

export default Counter;
