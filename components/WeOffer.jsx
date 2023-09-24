"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Section from "./Section";
import Title from "./Title";
import Image from "next/image";
import { data } from "../assets/data";
import { list } from "postcss";
import { useRef, useState } from "react";
import clsx from "clsx";

export default function WeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (idx) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(idx);
    }
  };

  return (
    <Section
      className="relative z-40 py-14 px-5 text-white"
      style={{
        background: 'url("/images/slider-bg.jpg") no-repeat center/cover',
      }}
    >
      <div className="absolute inset-0 z-[-1] bg-black bg-opacity-60 "></div>

      <Title firstPart="we" secondPart="offer" />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={item.title}>
            <div className="flex  justify-end">
              <p className="font-normal text-[43px]">
                0{idx + 1}/<span className=" font-thin ">0{data.length}</span>
              </p>
            </div>
            <Image
              src={item.imgSrc}
              alt={item.listItem}
              width={280}
              height={213}
            />
            <p className="font-inter font-thin text-xs text-right mb-6">
              {item.title}
            </p>
            <ul>
              {data.map((item, index) => (
                <li
                  onClick={() => goToSlide(index)}
                  key={item.title}
                  className={clsx(
                    "font-inter text-xl font-extralight uppercase opacity-50 leading-[17px] mb-4",
                    activeIndex === index && "font-medium opacity-100"
                  )}
                >
                  {item.listItem}
                </li>
              ))}
            </ul>
            <p className="font-inter text-sm font-extralight ">{item.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
