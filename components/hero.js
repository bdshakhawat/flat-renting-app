'use client'

import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const onSearchCTAClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <section className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit text-[inherit]">
            Find Your Dream Home
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
              autoFocus
            >
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <form className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <label className="cursor-pointer relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-center">
                  Locations
                </label>
                <Dropdown
                  menu={
                    <Menu>
                      {[
                        { value: "Dhaka" },
                        { value: "Rajshahi" },
                        { value: "khulna" },
                        { value: "Mymensingh" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </form>
              <form className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <label className="cursor-pointer relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Property Type
                </label>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "House" },
                        { value: "Land" },
                        { value: "Flat" },
                        { value: "Shop" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </form>
              <form className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <label className="cursor-pointer relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Rent Range
                </label>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "$5K - $50K" },
                        { value: "$51K-$80K" },
                        { value: "$81K-$100K" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </form>
              <Button
                className="cursor-pointer"
                style={{ width: "102px" }}
                type="primary"
                size="middle"
                shape="default"
                onClick={onSearchCTAClick}
              >
                Search
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
