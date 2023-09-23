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
            <span>
              0{idx + 1}/0{data.length}
            </span>
            <Image
              src={item.imgSrc}
              alt={item.listItem}
              width={280}
              height={213}
            />
            <ul>
              {data.map((item) => (
                <li key={item.title}>{item.listItem}</li>
              ))}
            </ul>
            <p>{item.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
