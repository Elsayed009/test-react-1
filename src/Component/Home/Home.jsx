import { useState,  } from "react"



export function Home(){
    let [count, setcount]= useState(0); // value, func
    let [color, setcolor]= useState("white");
    // let count =0;      

    function changCount(){
        // count+=1;
        setcount(count+1)
        setcolor(color="red")
        console.log(count)
    }
    return <>
    <h1 className="h">count: {count}</h1>
    <button onClick={changCount} style={{color:color }}>cilck</button>
    </>
}




