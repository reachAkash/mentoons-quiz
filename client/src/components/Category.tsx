import Easy from "@/assets/easy level.png";
import Medium from "@/assets/medium level.png";
import Hard from "@/assets/hard level.png";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    console.log(url);
    navigate(url);
  };

  return (
    <div className="flex flex-col py-20 md:py-0 gap-[4rem] md:gap-0 h-[89vh] w-full items-center justify-evenly">
      <div className="font-semibold text-4xl text-red-500 purple-text-shadow">
        Choose Difficulty
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div
          onClick={() => handleNavigate("/quiz?type=easy")}
          className="relative"
        >
          <img src={Easy} className="w-full cursor-pointer" alt="easy level" />
          <div className="absolute cursor-pointer space-y-5 text-3xl text-center text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="font-bold red-text-shadow w-[12rem]">
              6 - 12 years
            </div>
            <div className="font-semibold purple-text-shadow w-full ">Easy</div>
          </div>
        </div>
        <div
          onClick={() => handleNavigate("/quiz?type=medium")}
          className="relative"
        >
          <img
            src={Medium}
            className="w-full cursor-pointer"
            alt="easy level"
          />
          <div className="absolute cursor-pointer space-y-5 text-3xl text-center text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="red-text-shadow w-[12rem]">13 - 19 years</div>
            <div className="purple-text-shadow w-full ">Medium</div>
          </div>
        </div>
        <div
          onClick={() => handleNavigate("/quiz?type=hard")}
          className="relative"
        >
          <img src={Hard} className="w-full cursor-pointer" alt="easy level" />
          <div className="absolute cursor-pointer space-y-5 text-3xl text-center text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="red-text-shadow w-[12rem]">20+ years</div>
            <div className="purple-text-shadow w-full ">Hard</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
