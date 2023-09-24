"use client";
import Section from "./Section";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-6 px-5 py-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor=""
          className="font-extralight tracking-[2.4px] text-white"
        >
          Full name
        </label>
        <input
          type="text"
          placeholder="John Smith"
          className="bg-white/[0.05] font-extralight px-2"
          {...register("name", { required: true, minLength: 4 })}
        />
        {errors.name && <span className="text-red-500 my-2">Erorr</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor=""
          className="font-extralight tracking-[2.4px] text-white"
        >
          E-mail
        </label>
        <input
          type="email"
          placeholder="johnsmith@email.com"
          className="bg-white/[0.05] font-extralight px-2"
          {...register("email", { required: true, minLength: 4 })}
        />
        {errors.email && (
          <span className="text-red-500 my-2">Invalid email</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor=""
          className="font-extralight tracking-[2.4px] text-white"
        >
          Position
        </label>
        <input
          type="text"
          placeholder="Movie maker"
          className="bg-white/[0.05] font-extralight px-2"
          {...register("position", { required: true, minLength: 4 })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor=""
          className="font-extralight tracking-[2.4px] text-white"
        >
          Phone
        </label>
        <input
          type="number"
          placeholder="+ 38 (097) 12 34 567"
          className="bg-white/[0.05] font-extralight px-2"
          {...register("number", { required: true, minLength: 4 })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor=""
          className="font-extralight tracking-[2.4px] text-white"
        >
          Message
        </label>
        <textarea
          type="text"
          className="bg-white/[0.05] resize-none h-[200px]"
          {...register("message", { required: true, minLength: 4 })}
        />
      </div>
      <div className="flex gap-2">
        <input type="checkbox" {...register("check")} />
        <label htmlFor="" className="text-white text-xs font-extralight">
          I confirm my consent to the processing of personal data.
        </label>
      </div>
      <button className="font-medium text-3xl text-right text-white">
        SEND
      </button>
    </form>
  );
}
