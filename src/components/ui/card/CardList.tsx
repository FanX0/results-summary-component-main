import type { CardProps } from "../../../shared/data";

interface CardListProps {
  data: CardProps["data"];
  className?: string;
}

const CardList = ({ data, className }: CardListProps) => {
  const COLOR: Record<string, { text: string }> = {
    Reaction: { text: "text-Light-red" },
    Memory: { text: "text-corangey-yellow" },
    Verbal: { text: "text-Green-teal" },
    Visual: { text: "text-Cobalt-blue" },
  };

  return (
    <div className={`flex flex-col gap-[1.5rem] lg:gap-[2rem] ${className ?? ""}`}>
      {data.map((d) => {
        const c = COLOR[d.category] ?? { text: "text-black" };
        return (
          <div key={d.category} className="flex justify-between">
            <div className="flex gap-2">
              <img src={d.icon} alt={d.category} />
              <p className={c.text}>{d.category}</p>
            </div>
            <div className="flex  gap-[0.4rem]">
              <p className="font-bold">{d.score}</p>
              <p className="font-medium text-gray-500">/</p>
              <p className="font-medium text-gray-500">100</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CardList;
