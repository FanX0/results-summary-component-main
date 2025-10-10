import type { CardProps } from "../../../shared/data";
import CardResult from "./CardResult";
import CardSummary from "./CardSummary";

const Card = ({ data }: CardProps) => {
  return (
    <div className="w-full bg-white grid grid-cols-1 gap-[1.5rem] lg:grid-cols-2 lg:w-[44rem] lg:h-[26rem] lg:rounded-4xl lg:shadow-xl/50 shadow-blue-500/30 ">
      <CardResult />
      <CardSummary data={data} />
    </div>
  );
};

export default Card;
