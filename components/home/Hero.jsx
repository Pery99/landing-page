import React from "react";

const Hero = () => {
  const details = [
    {
      title: "Web applications",
      icon: "/icon1.png",
      bg: "bg-[#EFEAFF]",
      subtext: "Lorem Ipsum is simply",
    },
    {
      title: "SEO",
      icon: "/seo-tag1.png",
      bg: "bg-[#ECFFDA]",
      subtext: "Lorem Ipsum is simply",
    },
    {
      title: "Mobile Application",
      icon: "/coding1.png",
      bg: "bg-[#FFE5DA]",
      subtext: "Lorem Ipsum is simply",
    },
    {
      title: "AR/VR Solution",
      icon: "/immersive1.png",
      bg: "bg-[#DAE6FF]",
      subtext: "Lorem Ipsum is simply",
    },
  ];
  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-[#E7F4FA] px-[80px] py-[50px]">
        <div>
          <div className="">
            <p className="font-semibold text-[40px] mb-4 w-[630px]">
              Experienced <span className="text-basic">mobile and web</span>{" "}
              applications and website builders measuring.
            </p>
            <p className="text-[16px] leading-[204%] text-[#5C5C5C] w-[613px]">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.{" "}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <button className="bg-basic text-[16px] leading-[204%] p-2 px-8 text-white rounded-[10px]">
              Contact us
            </button>
            <button className="text-basic text-[16px] leading-[204%] p-2 px-8 bg-white rounded-[10px] border border-basic">
              View more
            </button>
          </div>
        </div>
        <img className="h-[597px] " src="/heroimg.png" alt="" />
        <img
          className="absolute right-[35%] top-[30%]"
          src="/grape.png"
          alt=""
        />
        <img className="absolute right-14 top-10" src="/cube.png" alt="" />
      </div>
      <img className="absolute right-0 top-10" src="/vector1.png" alt="" />
      <img className="absolute left-0 top-[29%]" src="/vector2.png" alt="" />

      <div className="py-[43px]">
        <div className="flex items-center justify-center gap-[31px]">
          {details.map((detail) => {
            return (
              <div className="flex gap-4 items-center" key={detail.title}>
                <div className={`${detail.bg} p-4 rounded-[20px]`}>
                  <img src={detail.icon} alt="" />
                </div>
                <div>
                  <p className="text-[20px] leading-[175%]">{detail.title}</p>
                  <p className="text-[15px] text-[#969696] leading-[175%]">
                    {detail.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="bg-[#C7C7C7]" />
    </div>
  );
};

export default Hero;
