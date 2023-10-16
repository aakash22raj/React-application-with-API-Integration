import React from "react";
import joinUsData from "./contents/JoinUsData";

const JoinUs = () => {
  return (
    <div className="joinus-bg pt-[132px] min-h-[897px]">
      <div className="container mx-auto px-3 lg:px-0">
        <h1 className="text-[65px] leading-[80px] font-bold text-center">
          Want to
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
            Join
          </span>
          Us?
        </h1>
        <p className="text-2xl font-normal text-center pt-4 pb-[84px]">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>

        {/* card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[45.5px]">
          {joinUsData.map(
            ({ dueDate, penalty, subTitle, title, count1, count2 }, index) => (
              <div
                className="min-h-[266px] bg-white rounded-[20px] px-8 py-6 flex flex-col shadow-lg shadow-[#8585A740] relative"
                key={index}
              >
                <div className="joinus-box-bg h-[46px] w-[46px] text-2xl font-bold rounded-[10px] text-white flex items-center justify-center absolute top-0 left-0 -translate-x-2 -translate-y-2">
                  {count1}
                  <sup>{count2}</sup>
                </div>
                <h5 className="font-bold text-[20px] leading-[30px] text-center">
                  {title}
                </h5>
                <p className="leading-[26px] text-[16px] font-normal text-center pt-[5px] pb-4">
                  {subTitle}
                </p>
                <div className="bg-[#F4F4F4] flex-grow rounded-[10px] p-3 flex flex-wrap font-os">
                  <div className="w-2/6 pe-2">
                    <h5 className="text-[#0076CE] font-bold text-[18px] pb-1">
                      Due date
                    </h5>
                    <p className="text-base">{dueDate} </p>
                  </div>
                  <div className="w-4/6">
                    <h5 className="text-[#FF6666] font-bold text-[18px] pb-1">
                      Penalty fees
                    </h5>
                    {penalty.map(({ fee, description }, indx) => (
                      <p className="text-base" key={indx}>
                        <span className="font-bold">{fee}</span> {description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <p className="text-[17px] py-8">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
          <span className="font-bold">every day</span> until you file the form .
          There is no maximum penalty amount. So, if you don't file the form for
          a year, you will owe ₹73,000 per form
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
