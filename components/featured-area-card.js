import HomeCard from "./home-card";

const FeaturedAreaCard = () => {
  return (
    <section className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Properties by Area
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700">
          <HomeCard
            homeSaleRentId="/icon.svg"
            homeSaleRentText="Sell your home"
          />
          <HomeCard
            homeSaleRentId="/icon1.svg"
            homeSaleRentText="Rent your home"
            propWidth="312px"
          />
          <HomeCard
            homeSaleRentId="/icon2.svg"
            homeSaleRentText="Buy a home"
            propWidth="unset"
          />
          <HomeCard
            homeSaleRentId="/icon3.svg"
            homeSaleRentText="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedAreaCard;
