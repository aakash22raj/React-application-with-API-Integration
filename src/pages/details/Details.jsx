import React, { useEffect, useState } from "react";
import NavBar from "../../sections/navbar/NavBar";
import Star from "../../assets/png/star.png";
import Calendar from "../../assets/png/calendar.png";
import DetailsRecommendationCard from "../../components/cards/details/DetailsRecommendationCard";
import { useParams } from "react-router-dom";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";

const Details = () => {
  const [dataArr, setDataArr] = useState(null);
  const [cardsDataArr, setCardsDataArr] = useState(null);
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    
    fetch(`http://localhost:3000/chartered-accountant/?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setDataArr(data);
      });

    fetch(`http://localhost:3000/chartered-accountant/?_limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setCardsDataArr(data);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc]">
      <NavBar />
      <div className="container mx-auto flex flex-col lg:flex-row gap-[33px] py-[80px]">
        {/* Left portion */}
        <div className="w-full lg:w-2/5">
          <h3 className="text-[35px] leading-[52.5px] font-bold">
            {dataArr && dataArr[0].name}
          </h3>
          <p className="text-[20px] leading-[32px] font-normal pt-4">
            {dataArr && dataArr[0].intro}
          </p>

          <p className="py-8 flex items-center gap-3">
            <img src={Star} alt="Star image" className="h-6 w-fit" />
            <span className="text-[20px] leading-[30px]">
              <span className="text-[#0076CE] font-bold">
                {dataArr && dataArr[0].rating}
              </span>
              ({dataArr && dataArr[0].reviewCount})
            </span>
          </p>

          <div className="common_shadow rounded-[20px] p-6">
            <p className="flex items-center justify-between">
              <span className="text-xl font-normal">
                {dataArr && dataArr[0].taskComplexity}
              </span>
              <span className="text-2xl font-bold">
                {dataArr && dataArr[0].price}
              </span>
            </p>
            <p className="flex gap-1 py-8">
              <img src={Calendar} alt="calendar" />
              <span className="text-xl font-normal">
                {dataArr && dataArr[0].deliveryTime}
              </span>
            </p>
            <div className="flex items-center justify-between gap-[25px]">
              <button className="hidden lg:block bg-[#0076ce] text-white border-[1.5px] border-[#0076ce] rounded-[10px] py-[10px] px-4 font-bold transition_common hover:bg-white shadow-none hover:shadow-lg hover:border-white hover:text-[#0076ce] flex-grow">
                Request Proposal
              </button>
              <button className="hidden lg:block py-[10px] px-5 border-[1.5px] border-[#0076ce] text-[#0076ce] rounded-[10px] font-bold transition_common hover:bg-white shadow-none hover:shadow-lg hover:border-white flex-grow">
                Chat with me
              </button>
            </div>
          </div>

          <div className="common_shadow rounded-[20px] p-6 my-8">
            <h3 className="text-[35px] leading-[52.5px] font-bold">
              What people say?
            </h3>
            <p className="text-[20px] leading-[32px] font-normal pt-4">
              {dataArr && dataArr[0].testimonial.text}
            </p>
            <p className="text-[16px] leading-[32px] font-normal pt-4 text-gray-500 text-end">
              -{dataArr && dataArr[0].testimonial.author}
            </p>
            <div>
              <CustomUnderline />
            </div>
          </div>
        </div>

        {/* Right Portion */}
        <div className="w-full lg:w-3/5">
          <img
            src={dataArr && dataArr[0].image}
            onError={(e) => {
              e.target.src = `/default-fallback-image.png`;
            }}
            alt={dataArr && dataArr[0].name}
            className="rounded-[20px]"
          />
          <h3 className="text-[35px] leading-[52.5px] font-bold py-8">
            {dataArr && dataArr[0].name}
          </h3>
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <p className="text-[#999999] font-bold leading-[34px]">FROM</p>
              <p className="my-2 text-xl leading-[34px]">
                {dataArr && dataArr[0].about.from}
              </p>
            </div>
            <div className="w-1/3">
              <p className="text-[#999999] font-bold leading-[34px]">
                PARTNER SINCE
              </p>
              <p className="my-2 text-xl leading-[34px]">
                {dataArr && dataArr[0].about.partnerSince}
              </p>
            </div>
            <div className="w-1/3">
              <p className="text-[#999999] font-bold leading-[34px]">
                AVERAGE RESPONSE TIME
              </p>
              <p className="my-2 text-xl leading-[34px]">
                {dataArr && dataArr[0].about.averageResponseTime}
              </p>
            </div>
          </div>

          {/* About */}
          <div className="py-8">
            <p className="text-[#999999] font-bold leading-[34px]">ABOUT</p>
            <p className="my-2 text-xl leading-[34px]">
              {dataArr && dataArr[0].about.description}
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2">
              <p className="text-[#999999] font-bold leading-[34px]">
                SERVICES I OFFER
              </p>
              <ul className="list-disc ps-8">
                {dataArr &&
                  dataArr[0].about.services.map((el, indx) => (
                    <li key={indx}>{el}</li>
                  ))}
              </ul>
            </div>
            <div className="w-1/2">
              <p className="text-[#999999] font-bold leading-[34px]">WHY ME?</p>
              <ul className="list-disc ps-8">
                {dataArr &&
                  dataArr[0].about.benefits.map((el, indx) => (
                    <li key={indx}>{el}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-[132px]">
        <h3 className="text-[35px] leading-[52.5px] font-bold py-8">
          Michael Jackson
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {cardsDataArr &&
            cardsDataArr.map((el, indx) => (
              <DetailsRecommendationCard
                name={el.name}
                intro={el.intro}
                rating={el.rating}
                reviewCount={el.reviewCount}
                price={el.price}
                key={indx}
                image={el.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
