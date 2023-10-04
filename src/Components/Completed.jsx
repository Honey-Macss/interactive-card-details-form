import Button from "./Button";
import check from "./images/icon-complete.svg";


const Completed = () => {
  return (
    <div className=" bg-[#ffffff] grid place-items-center">
        <div className=" w-[25rem] grid place-items-center">
            <img src={check} alt="complete" />
            <h1 className=" text-[#1d0929] mt-[2rem] text-[2rem] font-semibold tracking-widest">THANK YOU!</h1>
            <p className=" text-[#8e8c90] my-[1.4rem] text-[1.1rem] font-medium tracking-wider">We've added your card details</p>
            <Button buttonValue="Continue" />
        </div>
    </div>
  )
}

export default Completed