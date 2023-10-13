
import Button from "./Button";
import Inputs from "./Inputs";
import { useContext } from "react";
import { AppContext } from "../App";
import { useFormik } from "formik";

const DetailInput = () => {
  const {setNameCard, setNumberCard, setMonthCard, setYearCard, setCvcCard} = useContext(AppContext)

  const labels = ["CARDHOLDER NAME", "CARD NUMBER", "EXP. DATE", "(MM/YY)", "CVC"];
  const placeHolders = ["e.g. Jane Appleseed", "e.g. 1234 5678 9123 0000", "MM", "YY", "e.g. 123"];

  const onSubmit = (data) => {
    console.log(data, values.cardNumber);
  };

  const {handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      cardHolderName: "",
      cardNumber: "",
      expiryDateMm: "",
      expiryDateYy: "",
      cvc: "",
    },
    onSubmit,
  });
  
  return (
    <div className=" bg-[#ffffff] flex justify-center items-center sm:px-[3rem] mi:px-[1.5rem] mi2:px-[0.7rem] mi:mb-[5rem]">
        <form onSubmit={handleSubmit} className=" w-[25rem]  2xl:w-[20rem] sm:w-[100%] ml-[5rem] lg1:ml-[0]" >
          <Inputs value={values.cardHolderName} setValue={((e) => {setFieldValue("cardHolderName", e.target.value); setNameCard(values.cardHolderName);})} label={labels[0]} placeHolders={placeHolders[0]} type="text" />
          <Inputs value={values.cardNumber} setValue={((e) => {setFieldValue("cardNumber", e.target.value); setNumberCard(values.cardNumber);})} label={labels[1]} placeHolders={placeHolders[1]} type="text" />

          <span className=" flex gap-[0.6rem] mi:gap-[0.4rem]">
            <Inputs value={values.expiryDateMm} setValue={((e) => {setFieldValue("expiryDateMm", e.target.value); setMonthCard(values.expiryDateMm);})} label={labels[2]} placeHolders={placeHolders[2]} type="number" width="w-[5rem]" />
            <Inputs value={values.expiryDateYy} setValue={((e) => {setFieldValue("expiryDateYy", e.target.value); setYearCard(values.expiryDateYy);})}  label={labels[3]} placeHolders={placeHolders[3]} type="number" width="w-[5rem]" />
            <Inputs value={values.cvc} setValue={((e) => {setFieldValue("cvc", e.target.value); setCvcCard(values.cvc);})} label={labels[4]} placeHolders={placeHolders[4]} type="number" width="w-[100%]" />
          </span>

          <Button  buttonValue="Confirm" />

        </form>
    </div>
  )
}

export default DetailInput