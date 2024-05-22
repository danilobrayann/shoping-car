import { useState } from "react";

import { FaSearch } from "react-icons/fa";
export default function SeachBar(){
           /*estado*/ /*função */
    const [SeachValue,setSeachValue] = useState('');
    return(
        
           
                <form className="flex bg-white w-full justify-between gap-5 pr-5">
                    <input className="p-4 flex-grow border-transparent border-0 outline-none [font-size:0.8rem]" 
                    type="search" 
                    value={SeachValue}
                    placeholder="buscar produtos" 
                    required 
                    onChange={({target})=> setSeachValue(target.value)}/>
                    
                    <button className="bg-none border-none [font-size:1rem] flex items-center justify-center" type="submit"><FaSearch /></button>
                    
                </form>
            
    )
}