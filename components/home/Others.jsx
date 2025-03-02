import React from 'react'

const Others = () => {
  return (
    <>
        <Partners />
    </>
  )
}

const Partners = () => {
    return (
      <div>
        <p className='text-center text-[24px] leading-[159%]'>You will be in good Company</p>
        <div className='flex items-center justify-center gap-[115px]'>
            <img src="/beneoshop.png" alt="" />
            <img src="/caspio.png" alt="" />
            <img src="HyperGrid.png" alt="" />
            <img src="leotrippi.png" alt="" />
        </div>
      </div>
    );
}

export default Others