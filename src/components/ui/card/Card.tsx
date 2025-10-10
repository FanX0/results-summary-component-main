import type { CardProps } from "../../../shared/data";
import CardResult from "./CardResult";
import CardSummary from "./CardSummary";

const Card = ({ data }: CardProps) => {
  return (
    <div className="w-full grid grid-cols-1 gap-[1.5rem] lg:grid-cols-2 lg:w-[44rem] lg:h-[25rem] ">
      <CardResult />
      <CardSummary data={data} />
    </div>
  );
};

export default Card;
