import Section from "./Section";
import Title from "./Title";

export default function WhoWeAre() {
  return (
    <Section>
      <Title firstPart="who" secondPart="we are" />
      <p className="font-inter text-sm font-thin leading-5">
        <span className="font-medium">a team of enthusiasts</span> who are fully
        committed to the mission of creating unforgettable and extraordinary
        trips to the most beautiful parts of the Carpathians. Our goal is not
        just to show you the natural wonders of the mountains, but to provide
        you with a deep immersion in their magical atmosphere.
      </p>
      <p className="font-inter text-sm font-thin leading-5">
        <span className="font-medium"></span>We believe that nature has the
        power to inspire, strengthen character and provide new perspectives.
        Therefore, each of our tours is aimed at unlocking your potential,
        enriching your spiritual world and creating unforgettable memories.
      </p>
      <div>
        <p className="font-medium uppercase text-right">From vacationers </p>
        <p className="font-medium uppercase text-right">to active travelers</p>
        <p className="text-sm text-right">we have a tour for everyone.</p>
      </div>
      <p className="font-inter text-sm font-thin leading-5">
        <span className="font-medium">We use methods</span> that are time-tested
        and proven. Our expert guides with in-depth knowledge of the Carpathian
        landscapes lead you safely through the mysteries of these mountains.
      </p>
    </Section>
  );
}
