
import{Navigate} from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import { useEffect, useState } from "react";

const countries = ["NewZealand,SouthIsland","China,XiAn", "SouthAfrica,CapeTown"];

export default function IndexPage(){
    const[place,setPlace] = useState('');
    const[redirect,setRedirect]=useState(false);

    

    function getRandomIndex(arrayLength) {
      return (Math.floor(Math.random() * arrayLength));
    }
    async function generatePlace(ev)
    {
      ev.preventDefault();
      const randomIndex= getRandomIndex(countries.length);
      setPlace(countries[randomIndex]);
    }

    useEffect(() => {
      if (place) {
        const postPlace = async () => {
          console.log(place); 
          try {
            const response = await axios.post('/place', { place });
            console.log(response.data); 
            setRedirect(true);
          } catch (error) {
            console.error('Error posting place:', error);
          }
        };
        postPlace();
      }
    }, [place]);

    if(redirect){
      console.log("redirect true");
      return <Navigate to={'/place'}/>
     }
  
    return(
      <div className="">
        <hr className="mt-4"/>
        <p className="mt-7 text-center">Click the button below to let me choose your next travel destination</p>
        <div className="relative w-full  mt-7 flex justify-center ">
        <img className="opacity-75" style={{ width: '700px', height: 'auto' }} src ="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzRrY2U3ZjZ2N3dld21wNXZvNjRsbWFlcDFwNnZtbmR4Z3djdmZlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a8yAv6o6GJtcI/giphy.webp"/>
        <button onClick={generatePlace} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow">
                Generate Country
        </button>
        
        

        </div>
      </div>
    );
}