import React, { useState } from "react";
import Img1 from "../../assets/png/Img-01.png";
import Img2 from "../../assets/png/Img-02.png";
import Img3 from "../../assets/png/Img-03.png";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

const Hero = () => {
  const [dataArr, setDataArr] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textFieldContent, setTextFieldContent] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleChangeText = (e) => {
    const name = e.target.value;
    setTextFieldContent(name);

    fetch(`http://localhost:3000/chartered-accountant/?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setDataArr(data);
      });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="container mx-auto px-3 lg:px-0 flex items-center flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 text-center lg:text-start py-9 lg:py-0 min-h-fit lg:min-h-[calc(803px-85px)] flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-[65px] leading-[80px] font-bold">
          Find{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
            Partners
          </span>{" "}
          (CAs) available online
        </h1>
        <small className="text-[#616161] text-xl font-os pt-4 pb-[60px]">
          <span className="font-bold">CONNECT</span> with us where your services
          are listed and visible to a myriad of businesses seeking CA's for
          compliance support
        </small>
        <form
          className="bg-white h-[73px] flex w-[80%] rounded-[10px] font-inter relative"
          onSubmit={formSubmitHandler}
        >
          <input
            type="text"
            name="search_text"
            id="search_text"
            className="border-none outline-none bg-white h-full flex-grow w-[120px] md:w-auto px-4 lg:px-[30px] font-bold text-[18px]"
            placeholder="Search by name"
            onChange={handleChangeText}
          />
          <button
            type="submit"
            className="h-[73px] w-[186px] text-[16px] font-bold bg-[#0076ce] text-white border-[1.5px] border-[#0076ce] rounded-[10px] hover:border-white hover:text-[#0076ce] flex items-center justify-center transition_common hover:bg-white shadow-none hover:shadow-lg"
          >
            Search
          </button>

          {textFieldContent && dataArr && dataArr.length == 0 && (
            <div className="w-full rounded-[10px] overflow-hidden shadow_common absolute top-[73px] bg-white max-h-[300px] overflow-y-scroll">
              <p className="h-[50px] px-4 flex items-center text-center w-full">
                No matching content found
              </p>
            </div>
          )}

          {textFieldContent && dataArr && (
            <div className="w-full rounded-[10px] overflow-hidden shadow_common absolute top-[73px] bg-white max-h-[300px] overflow-y-scroll">
              {dataArr.map((el, indx) => {
                return (
                  <Link
                    to={`/details/${el.name}`}
                    className="transition_common border h-[50px] px-4 flex items-center gap-4 w-full bg-white hover:bg-[#0076ce] hover:text-white overflow-hidden"
                    key={indx}
                    onClick={() => (document.body.style.overflow = "")}
                  >
                    <img
                      src={el.image}
                      onError={(e) => {
                        e.target.src = `/default-fallback-image.png`;
                      }}
                      alt={el.name}
                      className="w-[50px] h-fit"
                    />
                    <p className="font-bold">{el.name}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </form>
      </div>
      <div className="w-full lg:w-1/2 py-9 lg:py-0 min-h-fit lg:min-h-[calc(803px-85px)] flex flex-col justify-center items-center">
        <div className="flex gap-[16.79px]">
          <div>
            <img src={Img1} alt="hero image 1" />
          </div>
          <div>
            <img src={Img2} alt="hero image 2" />
          </div>
          <div>
            <img src={Img3} alt="hero image 3" />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-full lg:w-[500px]">
          <h1 className="text-[35px] leading-[80px] font-bold">
            Search{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
              Results
            </span>
          </h1>

          {dataArr && dataArr.length == 0 && (
            <div className="w-full rounded-[10px] overflow-hidden shadow_common bg-white max-h-[300px] overflow-y-scroll">
              <p className="h-[50px] px-4 flex items-center text-center w-full">
                No matching content found
              </p>
            </div>
          )}

          {dataArr && (
            <div className="w-full rounded-[10px] overflow-hidden shadow_common bg-white max-h-[300px] overflow-y-scroll">
              {dataArr.map((el, indx) => {
                return (
                  <Link
                    to={`/details/${el.name}`}
                    className="transition_common border h-[50px] px-4 flex items-center gap-4 w-full bg-white hover:bg-[#0076ce] hover:text-white overflow-hidden"
                    key={indx}
                    onClick={() => (document.body.style.overflow = "")}
                  >
                    <img
                      src={el.image}
                      onError={(e) => {
                        e.target.src = `/default-fallback-image.png`;
                      }}
                      alt={el.name}
                      className="w-[50px] h-fit"
                    />
                    <p className="font-bold">{el.name}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
