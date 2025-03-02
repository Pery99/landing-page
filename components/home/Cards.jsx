import React from 'react'

const Cards = () => {
  return (
    <div className="flex relative items-center justify-center gap-[50px] pb-[154px]">
      <div className="bg-[#F4F4F4] py-[64px] pb-[49px] rounded-[20px] w-[572px] flex flex-col items-center justify-center">
        <p className="text-[25px] leading-[170%] font-semibold w-[365px] text-center">
          Lorem Ipsum is simply dummy text.
        </p>
        <p className="w-[476px] my-[36px] leading-[170%] text-[16px] text-[#545454]">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.{" "}
        </p>
        <button className="text-[16px] leading-[170%] bg-basic py-2 px-5 rounded-[10px] text-white">
          View More
        </button>
      </div>
      <div className="bg-basic  text-white py-[64px] pb-[49px] rounded-[20px] w-[572px] flex flex-col items-center justify-center">
        <img src="/bell.png" className="absolute top-[-100px]  right-[10%]" alt="" />
        <p className="text-[25px] leading-[170%] font-semibold w-[365px] text-center">
          Lorem Ipsum is simply dummy text.
        </p>
        <p className="w-[476px] my-[36px] leading-[170%] text-[16px]">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.{" "}
        </p>
        <button className="text-[16px] leading-[170%] bg-white py-2 px-5 rounded-[10px] text-basic">
          View More
        </button>
      </div>
    </div>
  );
}

export default Cards