export default function Food({place}){
    return(
        <div>
            <h2 className="text-3xl mt-8 underline">Food</h2>
            <p className="mt-8 text-justify">{place.FoodText}</p>
            <div className="relative max-w-5xl mx-auto">
            <div className="mt-8 grid gap-2 grid-cols-[2fr,1fr] rounded-3xl overflow-hidden">
                <div>
                <img  className="w-full h-full object-cover" src={place.FoodPhotos?.[0]} alt="food photo"/>

                </div>
                <div className="grid ">
                    <img className="w-full h-full object-cover" src={place.FoodPhotos?.[1]} alt="food photo"/>
                    <div className="overflow-hidden">
                    <img className="w-full h-full object-cover" src={place.FoodPhotos?.[2]} alt="food photo"/>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}