import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-[#E8F4FA] relative py-[148px] px-[360px]">
      <div className=" flex flex-col items-center">
        <p className="text-[30px] text-[#252525] pb-[80px] w-[516px] text-center font-semibold leading-[170%]">
          {" "}
          Lorem Ipsum is simply dummy text of the printing.{" "}
        </p>
        <div className='flex items-center gap-3'>
          <input
            className="w-[360px] p-4 placeholder:text-[16px] placeholder:leading-[170%] rounded-[10px]"
            placeholder="Enter your email"
            type="text"
            name=""
            id=""
          />
          <button className="bg-black w-[150px] text-[#FFF4F4] leading-[170%] text-[16px] p-3 rounded-[10px]">Subscribe</button>
        </div>
      </div>
      <img className='absolute -top-[50px] left-[167px]' src="Star 1.png" alt="" />
      <img className='absolute top-[94px] right-[397px]' src="Pai Chart 1.png" alt="" />
    </div>
  );
}

export default Newsletter