import Section from "./Section";
import Title from "./Title";
import Image from "next/image";

export default function Gallery() {
  return (
    <Section>
      <Title firstPart="our" secondPart="gallery" />
      <Image
        src="/public/gallery-1-mb.jpg"
        alt="mountain"
        width={280}
        height={213}
      />
      <Image
        src="/public/gallery-2-mb.jpg"
        alt="lake"
        width={280}
        height={213}
      />
      <Image
        src="/public/gallery-3-mb.jpg"
        alt="forest"
        width={280}
        height={213}
      />
    </Section>
  );
}
