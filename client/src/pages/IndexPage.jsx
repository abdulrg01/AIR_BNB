import { Link } from "react-router-dom";
import Image from "../Image.jsx";
import { User2Icon, Heart } from "lucide-react";
import { places } from "../../data/index.js";

export default function IndexPage() {
  return (
    <div className="mt-8 pt-[10rem] md:pt-[16rem] grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/dumi/" + place._id} key={place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && (
                <div className="relative">
                  <Image
                    className="rounded-2xl w-full object-cover aspect-square"
                    src={place.photos?.[0]}
                    alt=""
                  />
                  <button className="cursor-pointer absolute top-1 left-1 text-white bg-black rounded-2xl px-2 py-1">
                    <p className="text-gray-200">Guest favorite</p>
                  </button>
                  <button className="cursor-pointer absolute top-1 right-1 text-white bg-transparent rounded-2xl py-2 px-3">
                    <Heart className="" />
                  </button>
                  <button className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
                    <User2Icon />
                  </button>
                </div>
              )}
            </div>
            <h2 className="font-bold text-gray-400">{place.address}</h2>
            <h3 className="text-sm text-gray-500">{place.title}</h3>
            <div className="mt-1 text-gray-400">
              <span className="font-bold">${place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
  );
}
