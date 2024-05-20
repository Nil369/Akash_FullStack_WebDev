// In NEXT JS everything is a server component by default => we can write backend code in next
// Like importing fs module and reading data from a file
// To tell Next that it is to rendered in browser/client we have to write: "use client"  🙂
// Everything will work as we have done in Vite+React

"use client"
import { useState } from "react";

export default function Home() {
  const [count, setcount] = useState(0)
  return (
   <>

   <div className="container m-5">
   <h1>Hi!This is a a simple Counter App</h1>
   <p>The count is: {count}</p>
    <button className="mx-1 px-6 py-2 rounded-full font-bold bg-gradient-to-r from-green-500 to-orange-400 hover:from-green-400 hover:to-blue-400 transition-all duration-300" onClick={()=>{setcount(count+1)}}>Increase Count</button>
    <button className="mx-1 px-6 py-2 rounded-full font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-red-400 transition-all duration-300" onClick={()=>{setcount(count-1)}}>Decrease Count</button>
   </div>
   </>
  );
}
