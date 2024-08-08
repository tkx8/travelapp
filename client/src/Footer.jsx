
import{Link} from "react-router-dom";
export default function Footer(){
    return(
        <div>
            
            <div className="mt-8 w-full h-40 bg-blue-200 relative text-center "> 
              
              <div>
              <p>© TravelGenerator. All rights reserved.</p>
              <p>Images and text used on this website are not owned by me. They come from different websites and blogs</p>
              
              <p>If you are the owner of any images and wish for them to be removed, please contact me at tiankaixu8@gmail.com.</p>
              </div>
              <div>
                <button  className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white px-4 py-2 rounded shadow">
                <Link to={'/'}>Return to home page</Link>
                </button>
              </div>
            </div>
            
              
        </div>
    )
}