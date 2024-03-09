import Lottie from "lottie-react";
import React from "react";
import flight from "../media/flight.json";
import bus from "../media/bus.json";
import train from "../media/train.json";
import SwipperComponent from "../bus/SwipperComponent";
import { TravelCard } from "../travelCard/TravelCard";

const BookingLayout = () => {
  return (
    <>
      <main className=" w-[100%] py-16 sm:px-16 xs:px-6 flex flex-wrap">
        <aside
          className="xs:w-[100%] sm:w-[65%] sm:h-[27vw] xs:h-[49vw]"
          id="swiper-box"
        >
          <SwipperComponent />
        </aside>
        <aside className="xs:w-[100%] sm:w-[35%] sm:h-[27vw] xs:h-[49vw] border-2 border-red-950">
          <article className="w-[100%] h-[100%] flex flex-col gap-1 items-center">
            <div className="w-[95%] h-[50%] flex gap-1">
              <div className="w-[50%] h-[100%]">
                <TravelCard />
              </div>{" "}
              <div className="w-[50%] h-[100%]">
                <TravelCard />
              </div>
            </div>
          </article>
        </aside>
      </main>
    </>
  );
};

export default BookingLayout;

// <section className="w-[88%] h-[28vw] flexCenter">
//             <article className=" rounded-xl h-[7vw] w-[20vw] fixed top-20 border-[1px] border-neutral-900 flex justify-evenly bg-white">
//                 <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200 -rotate-12">
//                     <Lottie animationData={flight} />
//                 </button>
//                 <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200 border-x-[1px]" onClick={clickedBus}>
//                     <Lottie animationData={bus} />
//                 </button>
//                 <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200" onClick={clickedTrain}>
//                     <Lottie animationData={train} />
//                 </button>
//             </article>
//             <article className="h-[80%] w-[90%] relative top-10 -z-10 border-[1px] border-neutral-900 flex" >

//             </article>
//         </section>
