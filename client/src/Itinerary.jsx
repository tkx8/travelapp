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
        </div>
    )
}