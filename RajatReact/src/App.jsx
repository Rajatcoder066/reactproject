import { useState } from 'react'


function App() {
  let [count,setcount]=useState(0);
  let counter=0;
  const updatecounter=()=>{
      count=count+1;
      console.log(count);
      setcount(count);
     
  }
  const removecounter=()=>{
    count=count-1;
    console.log(count);
    setcount(count);
   
}
  return (
    <>
  <div>
      <h1 align="center">Rajat and React </h1>
      <br />
      <h1 align="center">Couting the value :- {count} </h1>
      <br />
      <button onClick={updatecounter}> Add value  </button>
      <br />
      <br />
      <button onClick={removecounter}> Remove value  </button>


    </div>
    </>
  )
}
 export default App
