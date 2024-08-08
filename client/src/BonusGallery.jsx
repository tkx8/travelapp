import { useState } from "react";


export default function BonusGallery({place}){
    const[showAllPhotos, setShowAllPhotos]=useState(false);

    if(showAllPhotos){
        return(
            
          <div className="absolute insert-0 bg-black text-white min-h-screen">
             <div className="p-8 grid gap-4 bg-black">
                <div>
                    
                    <button onClick={()=>setShowAllPhotos(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Close Images</button>
                </div>
            {place?.BonusPhotos?.length>0 && place.BonusPhotos.map(photo=>(
              <div>
                <img src={photo} alt={''}/>
                </div>
            ))}
            </div>
            </div>
        );
    }
    
    
    
    return(
        <div>
            <h2 className="text-3xl mt-8 underline">More photos!</h2>
        
        <div className="relative max-w-5xl mx-auto mt-10">
           
            <div className="grid gap-2 grid-cols-[2fr,1fr] rounded-3xl overflow-hidden">
                <div>

                    {place.BonusPhotos?.[0] && (
                        <div >
                        < img onClick={()=>setShowAllPhotos(true)} className="curser-pointer w-full h-full aspect-square object-cover "src={place.BonusPhotos?.[0]} alt="Bonus photo"/>
                         </div>
                    )}

                </div>
                <div className="grid ">
                {place.BonusPhotos?.[1] && (
                        <img onClick={()=>setShowAllPhotos(true)} className="curser-pointer pb-2 aspect-square w-full h-full object-cover " src={place.BonusPhotos?.[1]} alt="Bonusphoto"/>
                    )}
                    <div className="overflow-hidden">
                    {place.BonusPhotos?.[2] && (
                        <img  onClick={()=>setShowAllPhotos(true)} className="curser-pointer  aspect-square object-cover relative-top-2 " src={place.BonusPhotos?.[2]} alt="Bonus photo"/>
                    )}
                    </div>
                    
                </div>
            </div>
            <button onClick={()=> setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
More images</button>
            </div>
            
    </div>
    );
}