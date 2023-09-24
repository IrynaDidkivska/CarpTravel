import Section from "./Section";
import Title from "./Title";
import Image from "next/image";

export default function Gallery() {
  return (
    <Section
      className="relative z-40 py-14 px-5"
      style={{
        background: 'url("/images/gallery.jpg") no-repeat center/cover',
      }}
    >
      <div className="absolute inset-0 z-[-1] bg-black bg-opacity-60 "></div>
      <Title firstPart="our" secondPart="gallery" className="mb-6" />
      <div className="flex flex-col gap-6">
        <Image
          src="/gallery-1-mb.jpg"
          alt="mountain"
          width={280}
          height={213}
        />
        <Image src="/gallery-2-mb.jpg" alt="lake" width={280} height={213} />
        <Image src="/gallery-3-mb.jpg" alt="forest" width={280} height={213} />
      </div>
    </Section>
  );
}
