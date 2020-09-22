import React, {useState, useEffect} from "react";

function CounterWithoutClass(){
    const [count, setCount] = useState(0);
    useEffect( () => {if(count === 10){alert("AAAAAIIIIIIIIIIIIIII")}}, [count])

    return (<div>
                <p>{count}</p>
                <button onClick={()=>{setCount(count + 1)}}> + </button>
                <button onClick={()=>{setCount(count - 1)}}> - </button>
            </div>);
}

export default CounterWithoutClass;