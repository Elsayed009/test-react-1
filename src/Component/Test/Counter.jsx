import { useState, useEffect} from "react";
export function Counter(){
    const [count, setcount] = useState(0); // usestate = [value, func] so [count = 0, func = setcount]
    useEffect(()=>{
        console.log("page builded")
    }, [count])
    return(
        <div>
            <p>cliks count: {count}</p> 
            {/* // count = 0 cause we set useState(0)  */}
            <button onClick={()=>setcount(count+1)}>click here</button>
        </div>
    )
}

// to prevent first use of useEffect by render
// import { useRef } from "react";

// const firstRender = useRef(true);

// useEffect(() => {
//   if (firstRender.current) {
//     firstRender.current = false;
//     return;
//   }
//   console.log("count اتغير فعلاً!");
// }, [count]);