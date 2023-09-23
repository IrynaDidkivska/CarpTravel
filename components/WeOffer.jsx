"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Section from "./Section";
import Title from "./Title";
import Image from "next/image";
import { data } from "../assets/data";
import { list } from "postcss";

export default function WeOffer() {
  return (
    <Section>
      <Title firstPart="we" secondPart="offer" />
      <Swiper spaceBetween={50} slidesPerView={1}>
        {data.map((item, idx) => (
          <SwiperSlide key={item.title}>
            <span className="font-normal text-[43px] text-right">
              0{idx + 1}/
              <span className="font-inter font-thin text-[43px] text-right">
                0{data.length}
              </span>
            </span>
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
              {data.map((item) => (
                <li
                  key={item.title}
                  className="font-inter text-xl font-medium uppercase leading-[17px] mb-4"
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
