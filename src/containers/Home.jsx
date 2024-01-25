import React from 'react'

const Home = () => {
  return (
    <div class="w-[1109px] h-14 relative">
      <div class="w-[361px] h-[23px] left-[383px] top-[16px] absolute justify-start items-start gap-10 inline-flex">
          <div class="text-white text-base font-medium font-['Inter'] leading-normal">About</div>
          <div class="text-white text-base font-medium font-['Inter'] leading-normal">Skills</div>
          <div class="text-white text-base font-medium font-['Inter'] leading-normal">Portfolio</div>
          <div class="text-white text-base font-medium font-['Inter'] leading-normal">Testimonial</div>
      </div>
      <div class="w-[152px] h-14 left-[957px] top-0 absolute">
          <div class="left-[24px] top-[16px] absolute text-center text-white text-base font-medium font-['Inter'] leading-normal">Download CV</div>
      </div>
      <div class="w-[174px] h-12 left-0 top-[4px] absolute">
          <div class="left-[62px] top-0 absolute text-green-500 text-[32px] font-semibold font-['Poppins'] leading-[48px]">Design</div>
      </div>
    </div>
  )
}

export default Home