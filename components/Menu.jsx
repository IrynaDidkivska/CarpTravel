"use client";
import Image from "next/image";
import Section from "./Section";
import { Link } from "react-scroll";

export default function Menu() {
  return (
    <Section
      style={{
        paddingTop: "36px",
        background: "url(/main-bg-mb.jpg) no-repeat center/cover",
      }}
    >
      <div className="flex justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={61} height={33} />
        <button className="text-sm tracking-[1.4px] uppercase">Menu</button>
      </div>
      <div className="uppercase text-right">
        <p className="text-[37px] font-thin tracking-[1.67px] leading-none ">
          <span className="text-[37px] font-medium ">7</span>
          days
        </p>
        <p className="text-xs font-light tracking-[9.48px] leading-none">
          journey
        </p>
      </div>

      <h1 className=" flex flex-col text-[40px] font-thin uppercase leading-[56px] mb-6">
        <span className="font-medium ">Uncover</span>Carpathian’s Secrets
      </h1>

      <p className="text-[10px] font-extralight w-2/3  mb-6">
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </p>
      <p className="text-sm font-extralight leading-[20px] text-justify  mb-6">
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>
      <Link
        activeClass="active"
        spy={true}
        to="ContactUs"
        smooth={true}
        offset={0}
        duration={1500}
        className="flex items-center justify-center w-full px-[64px] py-[18px] uppercase  border border-dashed border-white bg-white/10"
      >
        Join Now
      </Link>
    </Section>
  );
}
