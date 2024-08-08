export default function Itinerary({place}){
    return(
        <div>
          <h2 className="text-3xl mt-8 underline">Itinerary 1</h2>
          <p className="mt-8 text-justify">{place.ItiText1}</p>
          <div className="relative max-w-5xl mx-auto">
           
            <div className="mt-8 grid gap-2 grid-cols-[2fr,2fr] rounded-3xl overflow-hidden">
                <div className="grid ">
                <img className="w-full h-full object-cover" src={place.ItiPhotos1?.[0]} alt="Itinerary1 photo"/>
                <img className="w-full h-full object-cover" src={place.ItiPhotos1?.[1]} alt="itinerary1  photo"/>
                </div>
                <div className="grid ">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos1?.[2]} alt="itinerary1 photo"/>
                    <div className="overflow-hidden">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos1?.[3]} alt="itinerary1  photo"/>
                    </div>
                    
                </div>
            </div>
          </div>

          <h2 className="text-3xl mt-8 underline">Itinerary 2</h2>
          <p className="mt-8 text-justify">{place.ItiText2}</p>
          <div className="relative max-w-5xl mx-auto">
           
            <div className="mt-8 grid gap-2 grid-cols-[2fr,2fr] rounded-3xl overflow-hidden">
                <div className="grid ">
                <img className="w-full h-full object-cover" src={place.ItiPhotos2?.[0]} alt="Itinerary1 photo"/>
                <img className="w-full h-full object-cover" src={place.ItiPhotos2?.[1]} alt="itinerary1  photo"/>
                </div>
                <div className="grid ">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos2?.[2]} alt="itinerary1 photo"/>
                    <div className="overflow-hidden">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos2?.[3]} alt="itinerary1  photo"/>
                    </div>
                    
                </div>
            </div>
          </div>

          <h2 className="text-3xl mt-8 underline">Itinerary 3</h2>
          <p className="mt-8 text-justify">{place.ItiText3}</p>
          <div className="relative max-w-5xl mx-auto">
           
            <div className="mt-8 grid gap-2 grid-cols-[2fr,2fr] rounded-3xl overflow-hidden">
                <div className="grid ">
                <img className="w-full h-full object-cover" src={place.ItiPhotos3?.[0]} alt="Itinerary1 photo"/>
                <img className="w-full h-full object-cover" src={place.ItiPhotos3?.[1]} alt="itinerary1  photo"/>
                </div>
                <div className="grid ">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos3?.[2]} alt="itinerary1 photo"/>
                    <div className="overflow-hidden">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos3?.[3]} alt="itinerary1  photo"/>
                    </div>
                    
                </div>
            </div>
          </div>

          {place.ItiText4 && (
          <div className="mt-8">
          <h2 className="text-3xl mt-8 underline">Itinerary 4</h2>
          <p className="mt-8 text-justify">{place.ItiText4}</p>
          <div className="relative max-w-5xl mx-auto">
           
            <div className="mt-8 grid gap-2 grid-cols-[2fr,2fr] rounded-3xl overflow-hidden">
                <div className="grid ">
                <img className="w-full h-full object-cover" src={place.ItiPhotos4?.[0]} alt="Itinerary1 photo"/>
                <img className="w-full h-full object-cover" src={place.ItiPhotos4?.[1]} alt="itinerary1  photo"/>
                </div>
                <div className="grid ">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos4?.[2]} alt="itinerary1 photo"/>
                    <div className="overflow-hidden">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos4?.[3]} alt="itinerary1  photo"/>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
      )}

          {place.ItiText5 && (
          <div className="mt-8">
          <h2 className="text-3xl mt-8 underline">Itinerary 5</h2>
          <p className="mt-8 text-justify">{place.ItiText5}</p>
          <div className="relative max-w-5xl mx-auto">
           
            <div className="mt-8 grid gap-2 grid-cols-[2fr,2fr] rounded-3xl overflow-hidden">
                <div className="grid ">
                <img className="w-full h-full object-cover" src={place.ItiPhotos5?.[0]} alt="Itinerary1 photo"/>
                <img className="w-full h-full object-cover" src={place.ItiPhotos5?.[1]} alt="itinerary1  photo"/>
                </div>
                <div className="grid ">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos5?.[2]} alt="itinerary1 photo"/>
                    <div className="overflow-hidden">
                    <img className="w-full h-full object-cover" src={place.ItiPhotos5?.[3]} alt="itinerary1  photo"/>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
      )}
        </div>
    )
}