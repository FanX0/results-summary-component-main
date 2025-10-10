import type { CardProps } from "../../../shared/data";

interface CardListProps {
  data: CardProps["data"];
  className?: string;
}

const CardList = ({ data, className }: CardListProps) => {
  const COLOR: Record<string, { text: string; bg: string  }> = {
    Reaction: { text: "text-Light-red", bg: "bg-Light-red/10" },
    Memory: { text: "text-corangey-yellow", bg: "bg-corangey-yellow/10" },
    Verbal: { text: "text-Green-teal", bg: "bg-Green-teal/10" },
    Visual: { text: "text-Cobalt-blue", bg: "bg-Cobalt-blue/10" },
  };

  return (
    <div className={`flex flex-col gap-[1.5rem] lg:gap-[1rem] ${className ?? ""}`}>
      {data.map((d) => {
        const c = COLOR[d.category] ?? { text: "text-black", bg: "bg-transparent" };
        return (
          <div key={d.category} className={`flex items-center px-[1rem] justify-between h-[3rem] rounded-xl ${c.bg}`}>
            <div className="flex gap-2">
              <img src={d.icon} alt={d.category} className="w-[1.5rem]" />
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
