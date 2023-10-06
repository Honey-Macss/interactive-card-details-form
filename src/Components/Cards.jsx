import front from "./images/bg-card-front.png";
import back from "./images/bg-card-back.png";
import FrontCard from "./FrontCard";
import { useContext } from "react";
import { AppContext } from "../App";


const Cards = () => {
  const { cvcCard } = useContext(AppContext)
  return (
    <div className= " cardWay grid place-content-center relative">
        <div className=" w-[27rem] lg:w-[24rem] sm:w-[20rem] mi:w-[18rem] h-[14rem] sm:h-[10rem] lg:h-[12rem] relative left-[7rem] lg:left-[5rem] lg1:left-[0] sm1:left-[-2rem] mi1:left-[0] lg1:top-[13.3rem] sm:top-[12.1rem] lg1:z-[1] shadow-[rgba(0,_0,_0,_0.2)] shadow-[0px_0px_4px] rounded-[10px]">
            <img className=" w-[27rem] lg:w-[24rem] sm:w-[20rem] mi:w-[18rem] h-[14rem] sm:h-[10rem] lg:h-[12rem]" src={front} alt="front-card" />
            <FrontCard />
        </div>

        <div className=" w-[27rem] lg:w-[24rem] sm:w-[20rem] mi:w-[18rem] h-[14rem] lg:h-[12rem] sm:h-[10rem] mt-[3rem] relative left-[10rem] lg:left-[7rem] lg1:left-[4rem] sm1:left-[2rem] mi1:left-[0] lg1:top-[-8.5rem] sm:top-[-6.5rem] shadow-[rgba(0,_0,_0,_0.2)] shadow-[0px_0px_4px] rounded-[10px]">
            <img className=" w-[27rem] lg:w-[24rem] sm:w-[20rem] mi:w-[18rem] h-[14rem] lg:h-[12rem] sm:h-[10rem] " src={back} alt="back-card" />
            <p className=" lg:text-[0.8rem] font-normal text-white absolute right-[3rem] top-[6rem] lg:top-[5.2rem] sm:top-[4.2rem] tracking-widest">{cvcCard}</p>
        </div>
    </div>
  )
}

export default Cards;