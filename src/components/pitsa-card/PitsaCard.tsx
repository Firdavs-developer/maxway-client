function PitsaCard({
  pitsaImg,
  pitseText,
  pitsaIcon,
  pitsaParagraph,
  pitsaPrice,
}: {
  pitsaImg: string;
  pitseText: string;
  pitsaIcon: string;
  pitsaParagraph: string;
  pitsaPrice: string;
}) {
  return (
    <div>
      <div className="pitsa-card flex gap-[41px] p-[30px] border-solid border-[1px] border-[#9797972E] rounded-sm cursor-pointer hover:shadow-md transition-[0.5s]">
        <img className="w-[180px] h-[180px]" src={pitsaImg} alt="pitsaImg" />
        <div className="pitsa-text">
          <div className="flex gap-[17px] items-center">
            <h3 className="text-2xl font-sans font-medium">{pitseText}</h3>
            <img className="w-6 h-6" src={pitsaIcon} alt="pitsa icon" />
          </div>
          <p className="mt-[10px] mb-6 font-sans font-normal text-[#222124] opacity-[0.4]">
            {pitsaParagraph}
          </p>
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-2xl font-bold">{pitsaPrice}</h2>
            <div className="flex justify-centern items-center w-[50px] h-[50px] rounded-[50%] bg-[#F1B301] text-white text-2xl">
              <span className="font-sans text-4xl text-white ml-3 mb-1">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PitsaCard;
