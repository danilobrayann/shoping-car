
import { FaSearch } from "react-icons/fa";
export default function SeachBar(){

    return(
        
           
                <form >
                    <input type="search" placeholder="buscar produtos" required/>
                    <button type="submit"><FaSearch /></button>
                </form>
            
    )
}