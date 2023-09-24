import clsx from "clsx"; // бібліотека для об'єднання стилів

export default function Title({ firstPart, secondPart, className, isActive }) {
  return (
    <h2
      className={clsx(
        "font-thin uppercase text-[40px] text-white",
        className && className,
        isActive && "text-red-500"
      )}
    >
      {firstPart} <span className="font-medium">{secondPart}</span>
    </h2>
  );
}
