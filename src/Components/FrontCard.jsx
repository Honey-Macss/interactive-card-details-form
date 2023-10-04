import logo from "./images/card-logo.svg";

const FrontCard = () => {
  return (
    <div className=" p-[2rem] w-[28rem] h-[15rem] text-white absolute right-[0] top-[0] tracking-widest" >
        <img src={logo} alt="card-logo" />
        <p className=" text-[2rem] font-medium m-[2.7rem_0_1.5rem_0] ">0000 0000 0000 0000</p>
        <span className=" flex justify-between">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
        </span>
    </div>
  )
}

export default FrontCard