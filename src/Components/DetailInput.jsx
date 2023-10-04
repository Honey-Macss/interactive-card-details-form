
import Button from "./Button";
import Inputs from "./Inputs"

const DetailInput = () => {
  const labels = ["CARDHOLDER NAME", "CARD NUMBER", "EXP. DATE", "(MM/YY)", "CVC"];
  const placeHolders = ["e.g. Jane Appleseed", "e.g. 1234 5678 9123 0000", "MM", "YY", "e.g. 123"];
  
  return (
    <div className=" bg-[#ffffff] flex justify-center items-center sm:px-[3rem] mi:px-[1.5rem] mi2:px-[0.7rem] mi:mb-[5rem]">
        <form className=" w-[25rem]  2xl:w-[20rem] sm:w-[100%] ml-[5rem] lg1:ml-[0]" >
          <Inputs label={labels[0]} placeHolders={placeHolders[0]} />
          <Inputs label={labels[1]} placeHolders={placeHolders[1]} />

          <span className=" flex gap-[0.6rem] mi:gap-[0.4rem]">
            <Inputs label={labels[2]} placeHolders={placeHolders[2]} width="w-[5rem]" />
            <Inputs label={labels[3]} placeHolders={placeHolders[3]} width="w-[5rem]" />
            <Inputs label={labels[4]} placeHolders={placeHolders[4]} width="w-[100%]" />
          </span>

          <Button buttonValue="Confirm" />

        </form>
    </div>
  )
}

export default DetailInput