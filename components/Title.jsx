export default function Title({ firstPart, secondPart }) {
  return (
    <h2 className="font-thin uppercase ">
      {firstPart} <span className="font-medium">{secondPart}</span>
    </h2>
  );
}
