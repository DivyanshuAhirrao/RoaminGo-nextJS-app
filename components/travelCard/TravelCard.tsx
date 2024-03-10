"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./TravelCardComponents";
import tree from "../media/trees.jpg";
import Lottie from "lottie-react";
import Link from "next/link";

export function TravelCard({ btn, href, img }: { btn: string; href: string; img: any }) {
  return (
    <CardContainer className="h-[15vw] w-[15vw]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 shadow-md shadow-emerald-900"
        >
          "Traveling – it leaves you speechless, then turns you into a
          storyteller."
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Lottie animationData={img} className="h-[10vw]" />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
             <Link href={href}> {btn} </Link> 
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
