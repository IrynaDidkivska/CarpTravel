"use client";

import Section from "./Section";
import Title from "./Title";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Section id="ContactUs">
      <Title firstPart="contact" secondPart="us" />
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-extralight tracking-[2.4px]">
            Full name
          </label>
          <input
            name="name"
            id="name"
            placeholder="John Smith"
            className="bg-white/[0.05]"
            {...register("name", { required: true, minLength: 4 })}
          />
          {errors.name && (
            <div className="text-red-400 font-light text-right">
              x Invalid name
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-extralight tracking-[2.4px]">
            E-mail
          </label>
          <input
            name="email"
            id="email"
            placeholder="johnsmith@email.com"
            className="bg-white/[0.05]"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <div className="text-red-400 font-light text-right">
              x Invalid email
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="text" className="font-extralight tracking-[2.4px]">
            Message
          </label>
          <textarea id="text" className="bg-white/[0.05]" />
        </div>
        <button>SEND</button>
      </form>
    </Section>
  );
}
