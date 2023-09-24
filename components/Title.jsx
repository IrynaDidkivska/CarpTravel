export default function Title({ firstPart, secondPart }) {
  return (
    <h2 className="font-thin uppercase text-[40px]">
      {firstPart} <span className="font-medium">{secondPart}</span>
    </h2>
  );
}
