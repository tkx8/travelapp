export default function Stay({place}){
    return(
        <div>
            <h2 className="text-3xl mt-8 underline">Where to stay</h2>
            <p className="mt-8 text-justify">{place.StayText}</p>
            <div className="relative max-w-5xl mx-auto">
            <div className="mt-8 grid gap-2 grid-cols-[2fr,1fr] rounded-3xl overflow-hidden">
                <div>
                <img  className="w-full h-full object-cover" src={place.StayPhotos?.[0]} alt="Hotel photo"/>

                </div>
                <div className="grid ">
                    <img className="w-full h-full object-cover" src={place.StayPhotos?.[1]} alt="Hotel photo"/>
                    <div className="overflow-hidden">
                    <img className="w-full h-full object-cover" src={place.StayPhotos?.[2]} alt="Hotel photo"/>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
    )
}