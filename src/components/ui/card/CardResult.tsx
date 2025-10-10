const CardResult = () => {
  return (
    <div className="flex flex-col items-center gap-[1rem] bg-linear-to-t  from-Light-royal-blue from-50% to-Light-slate-blue to-160%  py-[2rem] rounded-b-4xl lg:rounded-4xl lg:gap-[1rem]">
      <h1 className="text-center text-Light-lavender font-medium text-lg lg:text-2xl">
        Your Result
      </h1>
      <div className="bg-Light-royal-blue rounded-full w-[8rem] h-[8rem] flex flex-col justify-center items-center gap-1 lg:w-[10rem] lg:h-[10rem]">
        <p className="text-5xl font-bold text-Pale-blue">76</p>
        <p className="text-gray-400">of 100</p>
      </div>
      <div className="text-center text-White flex flex-col gap-1 mx-[2.5rem] lg:mx-[3.5rem] lg:gap-2">
        <p className="font-bold text-[1.7rem]">Great</p>
        <p className="text-gray-400">
          You scored higher than 75% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};
export default CardResult;
