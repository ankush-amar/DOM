import { useState } from "react";

function TestUseState(){
    let [count, setCount] = useState(0);
    let btn = false;

    function increment(){
    console.log("count before",count);
    setCount(count++);
    console.log("count after",count);
    }

    function decrement() {
        console.log("count after ", count);
        setCount(prev => prev + 1);
        console.log("count before ", count);
    }

    let interval;

    function start() {
        btn = true;
        interval = setInterval(() => {
            increment();
        },1000)
    }

    function end() {
        btn = false;
        clearInterval(interval);
        setCount(0);
        
    }


    return(
        <div>
            <h1>
                count:{count}
            </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button id="btn" onClick={start}>Start</button>
            <button id="btn" onClick={end}>reset</button>
        </div>
    )
}

export default TestUseState;