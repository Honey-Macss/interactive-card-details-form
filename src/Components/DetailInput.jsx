
import Button from "./Button";
import Inputs from "./Inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AppContext } from "../App";

const DetailInput = () => {
  const {nameValue, setNameValue, numberValue, setNumberValue, monthValue, setMonthValue, yearValue, setYearValue, cvcValue, setCvcValue,
     setNameCard, setNumberCard, setMonthCard, setYearCard, setCvcCard} = useContext(AppContext)

  const labels = ["CARDHOLDER NAME", "CARD NUMBER", "EXP. DATE", "(MM/YY)", "CVC"];
  const placeHolders = ["e.g. Jane Appleseed", "e.g. 1234 5678 9123 0000", "MM", "YY", "e.g. 123"];

  const schema = yup.object().shape({
    cardHolderName: yup.string().required("Can't be blank"),
    cardNumber: yup.number("Wrong format, numbers only").required("Can't be blank"),
    expiryDateMm: yup.number().positive().min(1).max(2).integer("djsbdjsd").required("Can't be blank"),
    expiryDateYy: yup.number().positive().min(1).max(4).integer().required("Can't be blank "),
    cvc: yup.number().positive().integer().required("Can't be blank"),
  });

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const registration = ["cardHolderName", "cardNumber", "expiryDateMm", "expiryDateYy", "cvc" ];

  const onSubmit = (data) => {
    // data.preventDefault();
    console.log(data, nameValue);
  };
  
  return (
    <div className=" bg-[#ffffff] flex justify-center items-center sm:px-[3rem] mi:px-[1.5rem] mi2:px-[0.7rem] mi:mb-[5rem]">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-[25rem]  2xl:w-[20rem] sm:w-[100%] ml-[5rem] lg1:ml-[0]" >
          <Inputs value={nameValue} setValue={setNameValue} setCard={setNameCard} label={labels[0]} placeHolders={placeHolders[0]} register={register} registration={registration[0]} errors={errors.cardHolderName?.message} type="text" />
          <Inputs value={numberValue} setValue={setNumberValue} setCard={setNumberCard} label={labels[1]} placeHolders={placeHolders[1]} register={register} registration={registration[1]} errors={errors.cardNumber?.message} type="text" />

          <span className=" flex gap-[0.6rem] mi:gap-[0.4rem]">
            <Inputs value={monthValue} setValue={setMonthValue} setCard={setMonthCard} label={labels[2]} placeHolders={placeHolders[2]} register={register} registration={registration[2]} errors={errors.expiryDateMm?.message} type="number" width="w-[5rem]" />
            <Inputs value={yearValue} setValue={setYearValue} setCard={setYearCard} label={labels[3]} placeHolders={placeHolders[3]} register={register} registration={registration[3]} errors={errors.expiryDateYy?.message} type="number" width="w-[5rem]" />
            <Inputs value={cvcValue} setValue={setCvcValue} setCard={setCvcCard} label={labels[4]} placeHolders={placeHolders[4]} register={register} registration={registration[4]} errors={errors.cvc?.message} type="number" width="w-[100%]" />
          </span>

          <Button  buttonValue="Confirm" />

        </form>
    </div>
  )
}

export default DetailInput