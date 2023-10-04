import front from "./images/bg-card-front.png";
import back from "./images/bg-card-back.png";
import FrontCard from "./FrontCard";


const Cards = () => {
  return (
    <div className= " cardWay grid place-content-center relative">
        <div className=" w-[28rem] h-[15rem] relative left-[10rem] shadow-[rgba(0,_0,_0,_0.2)] shadow-[0px_0px_4px] rounded-[10px]">
            <img className=" w-[28rem] h-[15rem]" src={front} alt="front-card" />
            <FrontCard />
        </div>

        <div className=" w-[28rem] h-[15rem] mt-[3rem] relative left-[16rem] shadow-[rgba(0,_0,_0,_0.2)] shadow-[0px_0px_4px] rounded-[10px]">
            <img className=" w-[28rem] h-[15rem] " src={back} alt="back-card" />
            <p className=" font-normal text-white absolute top-[6.5rem] right-[3.5rem] tracking-widest">000</p>
        </div>
    </div>
  )
}

export default Cards;