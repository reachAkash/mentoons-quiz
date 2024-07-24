import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Coin from "@/assets/coin.png";
import Printer from "@/assets/printer.png";
import { VscListSelection } from "react-icons/vsc";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

const QuizPage: React.FC = () => {
  const location = useLocation();
  const [nextQuestion, setNextQuestion] = useState<boolean>(false);
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const [options, setOptions] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleShowToast = (content: string) => {
    toast(<span className="font-semibold text-xl">{content}</span>);
  };

  const arr = [
    "Akash Testing 1",
    "Akash Testing 2",
    "Akash Testing 3",
    "Akash Testing 4",
  ];
  const navigate = useNavigate();

  const handleNavigate = (url: any) => {
    navigate(url);
  };

  const handleSelectedValue = (e: React.MouseEvent<HTMLDivElement>) => {
    setValue(e.currentTarget.innerText);
  };

  return (
    <div className="container py-10 h-fit md:h-[89.6vh] bg-yellow-400 space-y-14">
      <div className=" flex justify-between">
        <div className="text-3xl text-red-500 white-text-shadow">
          Technology -{" "}
          <span className="text-white purple-text-shadow">({type})</span>
        </div>
        <div>
          <IoMdArrowRoundBack
            onClick={() => handleNavigate(-1)}
            className="text-4xl purple-text-shadow hover:text-red-500 transition-all ease-in-out duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0">
        <img src={Printer} className="quiz-image w-[20rem]" alt="item image" />
        <div className="bg-purple-500 rounded-md max-w-2xl w-full h-[25rem] flex flex-col items-center justify-center space-y-7">
          <div className="text-3xl md:text-4xl font-semibold white-text-shadow">
            Who invented Printer?
          </div>
          <div className="flex items-center justify-between gap-4">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              className="py-3 px-3 rounded-lg outline-none"
              placeholder="Type your answer"
            />
            {!options && (
              <div className="bg-white cursor-pointer rounded-full p-2">
                <VscListSelection
                  onClick={() => setOptions(true)}
                  className="text-2xl"
                />
              </div>
            )}
          </div>
          {options && (
            <div className="grid grid-cols-2 gap-x-4 md:gap-x-[2rem] gap-y-4">
              {arr?.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={(e) => handleSelectedValue(e)}
                    className={`${
                      value == item
                        ? "bg-black text-white cursor-not-allowed"
                        : "bg-white"
                    } cursor-pointer px-4 py-1 font-thin`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
          <div
            onClick={() => {
              handleShowToast("Under Development 😉");
              setTimeout(() => {
                setNextQuestion(true);
              }, 1000);
            }}
            className="cursor-pointer hover:bg-white hover:text-red-500 transition-all duration-300 ease-in-out bg-red-500 text-white px-3 py-2 rounded-md"
          >
            Check
          </div>
        </div>
      </div>
      <div className="ml-auto bg-black text-white gap-2 w-fit py-2 px-4 rounded-lg flex items-center self-end justify-center">
        Rewards <img src={Coin} className="w-5" alt="rewards" /> : 4
      </div>
    </div>
  );
};

export default QuizPage;
