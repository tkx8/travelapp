
import{Link} from "react-router-dom";
import React,{useContext} from "react";

export default function Header(){
  
    return (
        <header className=" flex justify-center">
          <Link to={'/'} className="logo flex items-center gap-1">
            <h1 className="text-3xl mt-3 items-center text-center">𝒯𝓇𝒶𝓋ℯ𝓁 𝒸ℴ𝓊𝓃𝓉𝓇𝓎 ℊℯ𝓃ℯ𝓇𝒶𝓉ℴ𝓇</h1>
          </Link>

        </header>
    
    );
}