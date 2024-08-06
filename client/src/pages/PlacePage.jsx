import{Link} from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Itinerary from "../Itinerary";



export default function PlacePage(){
    const [place, setPlace]=useState(" ");
    useEffect(()=>{
    axios.get('/place').then(response => {
      if (response.data) {
          setPlace(response.data);
      }
      else{
        console.log("no data found");
      }
  });
});
    return(
      <div className="">
        <hr className="mt-4"/>
        <div className="mt-8 w-full relative"> 
          <img style={{ width: '100%', height: '400px', objectFit: 'cover' }}  src={place.CoverPhoto} alt="Destination's cover photo"/>
          <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white"> Welcome to {place.Name}</h1>
        </div>
        
        <div>
          <h2 className="text-3xl mt-8 underline">Introduction</h2>
          <p className="mt-8 text-justify">{place.IntroText}</p>
          <div className="relative max-w-5xl mx-auto">
            <div className="mt-8 grid gap-2 grid-cols-[2fr,1fr] rounded-3xl overflow-hidden">
                <div>
                <img  src={place.IntroPhotos?.[0]} alt="Intro photo"/>

                </div>
                <div className="grid ">
                    <img src={place.IntroPhotos?.[1]} alt="Intro  photo"/>
                    <div className="overflow-hidden">
                    <img src={place.IntroPhotos?.[2]} alt="Intro  photo"/>
                    </div>
                    
                </div>
            </div>
          </div>
         
        </div>
       
        <Itinerary place={place}/>
          
      </div>
    );
}