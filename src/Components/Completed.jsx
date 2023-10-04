import Button from "./Button";
import check from "./images/icon-complete.svg";


const Completed = () => {
  return (
    <div className=" bg-[#ffffff] grid place-items-center ml-[5rem] lg1:ml-[0] sm:px-[3rem] mi:px-[1.5rem] mi2:px-[0.7rem] mi:mb-[5rem]">
        <div className=" w-[25rem] 2xl:w-[20rem] sm:w-[100%] grid place-items-center">
            <img src={check} alt="complete" />
            <h1 className=" text-[#1d0929] mt-[2rem] sm:mt-[1.7rem] text-[2rem] mi:text-[1.7rem] font-semibold tracking-widest">THANK YOU!</h1>
            <p className=" text-[#8e8c90] my-[1.4rem] mi:-[1.0rem] text-[1.1rem] mi:text-[0.9rem] font-medium tracking-wider">We've added your card details</p>
            <Button buttonValue="Continue" />
        </div>
    </div>
  )
}

export default Completed