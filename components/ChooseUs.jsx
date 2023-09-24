import React from "react";
import Form from "./Form";
import Section from "./Section";

const ChooseUs = () => {
  return (
    <Section
      id="Form"
      className="relative z-40 py-14"
      style={{ background: 'url("/images/man.png") no-repeat center/cover' }}
    >
      <div className="absolute inset-0 z-[-1] bg-black bg-opacity-60 "></div>
      <div className="flex items-end flex-col ">
        <p className="text-rigth justify-right text-white font-extralight text-sm  flex w-1/2">
          Don&#39;t miss your opportunity!
        </p>
        <p className="text-rigth text-white font-extralight text-sm flex w-1/2">
          Fill out the form right now and join our team!
        </p>
      </div>
      <Form />
    </Section>
  );
};

export default ChooseUs;
