import type { CardProps } from "../../../shared/data";
import CardButton from "./CardButton";
import CardList from "./CardList";

const CardSummary = ({ data }: CardProps) => {
  return (
    <div className="flex flex-col gap-[1.5rem] px-[1.5rem] lg:py-[2rem] lg:gap-[2rem] ">
      <h2 className="font-bold text-Dark-gray-blue text-xl">Summary</h2>
      <CardList className="mx-[1rem]" data={data} />
      <CardButton />
    </div>
  );
};
export default CardSummary;
