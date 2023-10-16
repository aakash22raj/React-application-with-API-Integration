import React from "react";
import MainLogo from "../../assets/png/logo-main-white.png";
import {
  companyData,
  legalData,
  resourcesData,
  solutionsData,
  supportData,
} from "./contents/FooterContents";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="font-os">
      <div className="footer-bg text-white">
        <div className="container mx-auto px-3 lg:px-0">
          <div className="flex flex-wrap pt-20 pb-14">
            <div className="w-full md:w-1/2 lg:w-[28.57%]">
              <img src={MainLogo} alt="main logo version 2" />
              <p className="py-8 w-[65%] text-[14px] font-normal">
                India's first platform dedicated to simplifying partner search
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-[14.28%] pt-10 lg:pt-0">
              <h4 className="font-bold text-[14px] pb-4 uppercase">Company</h4>
              <div className="flex flex-col gap-4">
                {companyData.map(({ link, text }, indx) => (
                  <a
                    className="text-base font-normal leading-[22px] transition-all hover:underline"
                    href={link}
                    key={indx}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-[14.28%] pt-10 lg:pt-0">
              <h4 className="font-bold text-[14px] pb-4 uppercase">
                Solutions
              </h4>
              <div className="flex flex-col gap-4">
                {solutionsData.map(({ link, text }, indx) => (
                  <a
                    className="text-base font-normal leading-[22px] transition-all hover:underline"
                    href={link}
                    key={indx}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-[14.28%] pt-10 lg:pt-0">
              <h4 className="font-bold text-[14px] pb-4 uppercase">
                Resources
              </h4>
              <div className="flex flex-col gap-4">
                {resourcesData.map(({ link, text }, indx) => (
                  <a
                    className="text-base font-normal leading-[22px] transition-all hover:underline"
                    href={link}
                    key={indx}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-[14.28%] pt-10 lg:pt-0">
              <h4 className="font-bold text-[14px] pb-4 uppercase">Support</h4>
              <div className="flex flex-col gap-4">
                {supportData.map(({ link, text }, indx) => (
                  <a
                    className="text-base font-normal leading-[22px] transition-all hover:underline"
                    href={link}
                    key={indx}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-[14.28%] pt-10 lg:pt-0">
              <h4 className="font-bold text-[14px] pb-4 uppercase">Legal</h4>
              <div className="flex flex-col gap-4">
                {legalData.map(({ link, text }, indx) => (
                  <a
                    className="text-base font-normal leading-[22px] transition-all hover:underline"
                    href={link}
                    key={indx}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* HR */}
          <hr className="h-[1px] text-white" />
          {/* HR */}

          <div className="flex flex-wrap justify-between items-center py-8">
            <p>
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
            <div className="flex gap-6 pt-4 lg:pt-0">
              <a href="/" className="border-none">
                <BiLogoFacebookCircle className="h-7 w-7" />
              </a>
              <a href="/" className="border-none">
                <BiLogoInstagram className="h-7 w-7" />
              </a>
              <a href="/" className="border-none">
                <BiLogoLinkedin className="h-7 w-7" />
              </a>
              <a href="/" className="border-none">
                <BiLogoWhatsapp className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[57px] flex justify-center items-center">
        <p className="text-white text-[12px] text-center">
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
