// import { useState, useRef } from "react";

// function TestUseState() {
//     const [time, setTime] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const intervalRef = useRef(null);

//     function start() {
//         if (!isRunning) {
//             setIsRunning(true);
//             intervalRef.current = setInterval(() => {
//                 setTime(tim => tim + 1);
//             }, 1000);
//         }
//     }

//     function stop() {
//         setIsRunning(false);
//         clearInterval(intervalRef.current);
//     }

//     function reset() {
//         setIsRunning(false);
//         clearInterval(intervalRef.current);
//         setTime(0);
//     }

//     return (
//         <div>
//             <h1>Time: {time}s</h1>

//             <button onClick={start}>Start</button>
//             <button onClick={stop}>Stop</button>
//             <button onClick={reset}>Reset</button>
            
//         </div>
//     );
// }

// export default TestUseState;