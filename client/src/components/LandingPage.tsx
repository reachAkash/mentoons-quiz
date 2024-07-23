import WordBreak from "./WordBreak";
import { motion } from "framer-motion";
import questionMark from "@/assets/questionmark.png";
import bottleImg from "@/assets/glass bottles 1.png";
import geometryImg from "@/assets/geometry 1.png";
import steplarImg from "@/assets/stapler 1.png";
import matchboxImg from "@/assets/matches 2 1.png";
import pencilImg from "@/assets/pencil 1.png";
import eraserImg from "@/assets/eraser 1.png";
import noteImg from "@/assets/sticky notes 1.png";
import cupImg from "@/assets/cup and saucer 1.png";
import lipstickImg from "@/assets/lipstick 1.png";
import coinsImg from "@/assets/coins.svg";
import dontfadeImg from "@/assets/dont fade away 2.svg";
import hungryforlikesImg from "@/assets/hungry for likes not life 2.svg";
import choosewislyImg from "@/assets/choose wisely 2.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

const Section1 = () => {
  return (
    <motion.div className="relative bg-[#EC9600] h-fit py-7">
      <div className="bg-red-500 z-10 relative border-[5px] w-fit px-4 m-auto py-2 font-semibold text-2xl border-purple-800">
        Inventions and Inventors
      </div>
      <div className="flex relative bottom-6  border-l-0 border-r-0 md:border-l-[3px] md:border-r-[3px] border-[3px] border-purple-800 lg:h-fit overflow-hidden">
        <img
          className="absolute cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out top-absolute left-0 w-[15rem] md:w-[22rem]"
          src={bottleImg}
          alt="quiz image"
        />
        <img
          className="absolute  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bottom-[-8rem] left-[-8rem] w-[20rem] md:w-[35rem] rotate-[35deg]"
          src={geometryImg}
          alt="quiz image"
        />
        <img
          className="absolute  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bottom-0 left-[8rem] w-[20rem] md:w-[34rem] z-10"
          src={steplarImg}
          alt="quiz image"
        />
        <img
          className="relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out w-[40rem] left-[40%] bottom-0 translate-y-[30%]  translate-x-[-50%]"
          src={matchboxImg}
          alt="quiz image"
        />
        <img
          className="relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out w-[20rem] bottom-[-4rem] right-[2rem]"
          src={pencilImg}
          alt="quiz image"
        />
        <img
          className="relative cursor-pointer hover:scale-105 transition-all duration-300 top-[10rem] right-[15rem] h-[25rem] ease-in-out w-[40rem]"
          src={eraserImg}
          alt="quiz image"
        />
        <img
          className="absolute  cursor-pointer hover:scale-105 z-[5] transition-all duration-300 right-0 bottom-[-6rem] ease-in-out w-[25rem]"
          src={noteImg}
          alt="quiz image"
        />
        <img
          className="absolute  cursor-pointer hover:scale-105 transition-all duration-300 top-[-3rem] right-[15rem] ease-in-out w-[25rem]"
          src={lipstickImg}
          alt="quiz image"
        />
        <img
          className="absolute  cursor-pointer hover:scale-105 transition-all duration-300 right-[-6rem] top-[-7rem] ease-in-out w-[30rem]"
          src={cupImg}
          alt="quiz image"
        />
      </div>
    </motion.div>
  );
};

const Section2 = () => {
  return (
    <motion.div className="container relative flex flex-col space-y-4 md:space-y-0 items-start md:flex-row bg-gray-50 lg:px-[10rem] h-fit py-20 md:h-[90vh]">
      <div className="flex flex-col justify-around h-full w-full space-y-5">
        <div className="relative">
          <div className="angled-container absolute top-0 left-[-0.7rem] w-[20rem] h-[8rem] px-6 py-3 rounded-full z-40 bg-[#d12881]">
            <div className="text">The Game</div>
          </div>
          <div className="angled-container  w-[20rem] h-[8rem] px-6 py-3 rounded-full bg-black"></div>
        </div>
        <div className="text-red-500 md:purple-text-shadow font-bold text-[1.5rem] lg:text-[2rem]">
          Have you ever wondered <WordBreak /> who invented all the cool stuff{" "}
          <WordBreak /> you use everyday{" "}
        </div>
        <div className="text-[#414068] md:red-text-shadow font-extrabold text-[1.5rem] lg:text-[2rem]">
          I bet you don't know most of it. <WordBreak /> Take a quiz if you
          wanna try
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-end gap-2 ">
        <div className="w-full flex items-start justify-end">
          <img
            className="scale-125 relative bottom-[8rem]"
            src={questionMark}
          />
        </div>
        <div className="relative md:absolute z-10 bottom-0 right-0 rounded-sm bg-[#d12881] space-y-3 py-6 px-3 w-fit md:w-[24rem] h-[15rem] text-white font-semibold text-xl">
          <div className="red-text-shadow z-10">Fun Fact</div>
          <div className="pl-6 z-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, modi!
          </div>
          <div className="text-sm text-end font-light z-10">
            Tap to see a new one
          </div>
        </div>
        <div className="hidden md:block w-fit md:w-[384px] md:h-[210px] absolute bottom-0 px-6 py-3 right-2 bg-black"></div>
      </div>
    </motion.div>
  );
};

const Section3 = () => {
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    console.log(url);
    navigate(url);
  };

  return (
    <div className="container py-8 space-y-1 bg-orange-500 h-fit">
      <div className="relative">
        <div className="angled-container absolute top-0 left-0 md:left-[40%] w-[20rem] h-[8rem] px-6 py-3 rounded-full z-40 bg-[#d12881]">
          <div className="text">Guess What</div>
        </div>
        <div className="angled-container relative left-0 md:left-[41%] w-[20rem] h-[8rem] px-6 py-3 rounded-full bg-black"></div>
      </div>
      <div className="font-semibold text-3xl text-center tracking-wide leading-snug">
        If you can answer all the questions from a category <WordBreak /> you’ll
        get huge amount of reward points which you <WordBreak /> can claim at
        our Mentoons Store!
      </div>
      <div className="flex relative flex-col md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2">
          <img
            className=" relative md:absolute cursor-pointer hover:scale-105 hover:z-10 rotate-[-45deg] left-0 md:rotate-0 md:left-[11rem] lg:left-[9rem] top-0"
            src={choosewislyImg}
            alt="books image"
          />
          <img
            className="absolute cursor-pointer hover:scale-105 hover:z-10 left-20 md:left-[8rem] top-0"
            src={hungryforlikesImg}
            alt="books image"
          />
          <img
            className="absolute cursor-pointer hover:scale-105 hover:z-10 left-32 rotate-45 md:rotate-0 md:left-8 top-0"
            src={dontfadeImg}
            alt="books image"
          />
        </div>
        <div>
          <img className="w-[90%]" src={coinsImg} alt="coins" />
        </div>
      </div>
      <div
        onClick={() => handleNavigate("/category")}
        className="bg-red-500 py-4 cursor-pointer hover:text-red-500 hover:bg-white transition-all ease-in-out duration-500  text-white font-semibold text-2xl text-center"
      >
        Take me to Quiz
      </div>
    </div>
  );
};
export default LandingPage;
