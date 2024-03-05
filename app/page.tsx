"use client";

import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="flip-up" data-aos-duration="1000">
        <Hero />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <Camp />
      </div>
      <div data-aos="zoom-out-up" data-aos-duration="1000">
        <Guide />
      </div>
      <div data-aos="flip-up" data-aos-duration="1000">
        x<Features />
      </div>
      <div
        data-aos="zoom-out-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <GetApp />
      </div>
    </>
  );
}
