import { Button } from "@mui/material";
import LatestPropertyCard from "./latest-property-card";

const RentalCardContainer = () => {
  return (
    <section className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] ">
        {/* w-[688px] max-w-[95%px] max-w-[95%px lg:max-w-[100%]]*/}
        <div className=" flex flex-col items-center justify-start gap-[24px]   md:self-stretch md:w-auto">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Latest Properties of Rent
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          <LatestPropertyCard />
          <LatestPropertyCard propBackgroundImage="url('/card-21@3x.png')" />
          <LatestPropertyCard propBackgroundImage="url('/card-31@3x.png')" />
          <LatestPropertyCard propBackgroundImage="url('/card-41@3x.png')" />
        </div>
      </div>
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </section>
  );
};

export default RentalCardContainer;
