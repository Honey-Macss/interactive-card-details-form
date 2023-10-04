
import Button from "./Button";
import Inputs from "./Inputs"

const DetailInput = () => {
  const labels = ["CARDHOLDER NAME", "CARD NUMBER", "EXP. DATE", "(MM/YY)", "CVC"];
  const placeHolders = ["e.g. Jane Appleseed", "e.g. 1234 5678 9123 0000", "MM", "YY", "e.g. 123"];
  
  return (
    <div className=" bg-[#ffffff] flex justify-center items-center">
        <form className=" w-[25rem]" >
          <Inputs label={labels[0]} placeHolders={placeHolders[0]} />
          <Inputs label={labels[1]} placeHolders={placeHolders[1]} />

          <span className=" flex gap-[0.6rem]">
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