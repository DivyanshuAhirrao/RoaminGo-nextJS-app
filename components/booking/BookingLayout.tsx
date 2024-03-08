import Lottie from "lottie-react";
import React from "react";
import flight from '../media/flight.json';
import bus from '../media/bus.json';
import train from '../media/train.json';

const BookingLayout = () => {
    function clickedTrain(){
        alert('clicked Train')
    }
    function clickedBus(){
        alert('clicked bus')
    }
  return (
    <>
      <main className=" w-[100%] py-16 flexCenter">
        <section className="w-[88%] h-[28vw] flexCenter">
            <article className=" rounded-xl h-[7vw] w-[20vw] fixed top-20 border-[1px] border-neutral-900 flex justify-evenly bg-white">
                <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200 -rotate-12">
                    <Lottie animationData={flight} />
                </button>
                <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200 border-x-[1px]" onClick={clickedBus}>
                    <Lottie animationData={bus} /> 
                </button>
                <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200" onClick={clickedTrain}>
                    <Lottie animationData={train} />
                </button>
            </article>
            <article className="h-[80%] w-[90%] relative top-10 -z-10 border-[1px] border-neutral-900 flex" >
             
            </article>
        </section>
      </main>
    </>
  );
};

export default BookingLayout;
