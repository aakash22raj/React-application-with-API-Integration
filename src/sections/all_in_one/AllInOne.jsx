import React from "react";
import Teacher from "../../assets/png/Teacher1.png";
import Student from "../../assets/png/Student1.png";
import allInOneItems from "./contents/AllInOneContents";

const AllInOne = () => {
  return (
    <div className="bg-[#fafbfc]">
      <div className="container mx-auto flex flex-col-reverse xl:flex-row py-[132px] px-3 lg:px-0">
        <div className="w-full xl:w-1/2 min-h-[614.53px]">
          <h1 className="text-[65px] leading-[80px] font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
              All-in-One
            </span>{" "}
            platform <br /> that Makes Easier
          </h1>
          <p className="text-2xl leading-[38px] pt-[14px] pb-[32px]">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 mt-8">
            {allInOneItems.map(({ image, keyword, text }, indx) => (
              <div className="flex gap-4" key={indx}>
                <img src={image} alt={keyword} className="w-[30%] h-fit" />
                <p className="w-[70%] text-[20px] leading-[32px]">
                  <span className="uppercase font-bold">{keyword}</span>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="w-full xl:w-1/2 relative min-h-[700px] md:min-h-[614.53px]">
          <div className="absolute top-0 right-0">
            <img src={Student} alt="Student Image" />
          </div>
          <div className="absolute bottom-0 left-0 z-[2]">
            <img src={Teacher} alt="Teacher Image" />
          </div>

          <div className="flex flex-col items-end w-[50%] md:w-[60%] pt-11">
            
            <p className="rounded-s-[15px] rounded-tr-[15px] rounded-br-[3px] w-fit bg-[#EFD9F9] px-4 py-2 mt-2 text-[14px] relative">
              Hey, check out loreumipsum services.
            </p>
            <p className="rounded-s-[15px] rounded-tr-[15px] rounded-br-[3px] w-fit bg-[#EFD9F9] px-4 py-2 mt-2 text-[14px] relative">
              I learned from their videos, got my first job.
            </p>
            <p className="rounded-s-[15px] rounded-tr-[15px] rounded-br-[3px] w-fit bg-[#EFD9F9] px-4 py-2 mt-2 text-[14px] relative">
              You won't be disappointed with their services.
            </p>

            
            <p className="rounded-e-[15px] rounded-tl-[15px] rounded-bl-[3px] w-fit bg-[#DDF3FF] px-4 py-2 mt-[35px] relative translate-x-6 text-[14px]">
              I got a perfect analysis report from them too
            </p>
            <p className="rounded-e-[15px] rounded-tl-[15px] rounded-bl-[3px] w-fit bg-[#DDF3FF] px-4 py-2 mt-2 relative text-[14px]">
              Oh, that's great.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
