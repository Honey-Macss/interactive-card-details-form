import logo from "./images/card-logo.svg";
import { useContext } from "react";
import { AppContext } from "../App";

const FrontCard = () => { 
  const {nameCard, numberCard, monthCard, yearCard} = useContext(AppContext);
  return (
    <div className=" p-[1.7rem] lg:p-[1.2rem] sm:p-[1rem] w-[27rem] sm:w-[20rem] lg:w-[24rem] mi:w-[18rem] h-[14rem] lg:h-[12rem] sm:h-[10rem] text-white absolute right-[0] top-[0] tracking-widest" >
        <img className=" lg:w-[4rem]" src={logo} alt="card-logo" />
        <p className=" text-[1.8rem] lg:text-[1.4rem] font-medium m-[2.5rem_0_1.3rem_0] sm:m-[1.8rem_0_0.8rem_0] ">{numberCard}</p>
        <span className=" flex justify-between text-[0.8rem]">
            <p>{nameCard}</p>
            <p>{monthCard}/{yearCard}</p>
        </span>
    </div>
  )
}

export default FrontCard