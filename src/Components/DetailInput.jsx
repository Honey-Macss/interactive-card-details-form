
import Button from "./Button";
import Inputs from "./Inputs";
import { useContext } from "react";
import { AppContext } from "../App";
import { useFormik } from "formik";
import { SchemaWay } from "./SchemaWay/SchemaWay";
import { useNavigate } from "react-router-dom";

const DetailInput = () => {
  const navigate = useNavigate();
  const {setNameCard, setNumberCard, setMonthCard, setYearCard, setCvcCard} = useContext(AppContext)

  const labels = ["CARDHOLDER NAME", "CARD NUMBER", "EXP. DATE", "(MM/YY)", "CVC"];
  const placeHolders = ["e.g. Jane Appleseed", "e.g. 1234 5678 9123 0000", "MM", "YY", "e.g. 123"];

  const onSubmit =async(data, actions) => {
    console.log(data, actions);
    
    await new Promise((res) => setTimeout(res, 1000));
    actions.resetForm();
    
    setNameCard(values.cardHolderName);
    setNumberCard(values.cardNumber);
    setMonthCard(values.expiryDateMm);
    setYearCard(values.expiryDateYy);
    setCvcCard(values.cvc);
    navigate("/completed");
  };
 
  const { handleSubmit, values, setFieldValue, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      cardHolderName: "",
      cardNumber: "",
      expiryDateMm: "",
      expiryDateYy: "",
      cvc: "",
    },
    validationSchema: SchemaWay,
    onSubmit,
  });

  console.log(errors.cvc);

  return (
    <div className=" bg-[#ffffff] flex justify-center items-center sm:px-[3rem] mi:px-[1.5rem] mi2:px-[0.7rem] mi:mb-[5rem]">
        <form onSubmit={handleSubmit} className=" w-[25rem]  2xl:w-[20rem] sm:w-[100%] ml-[5rem] lg1:ml-[0]" >
          <Inputs touched={touched.cardHolderName} errors={errors.cardHolderName} value={values.cardHolderName} setValue={((e) => {setFieldValue("cardHolderName", e.target.value); })} label={labels[0]} placeHolders={placeHolders[0]} type="text" />
          <Inputs touched={touched.cardNumber} errors={errors.cardNumber} value={values.cardNumber} setValue={((e) => {setFieldValue("cardNumber", e.target.value); })} label={labels[1]} placeHolders={placeHolders[1]} type="text" />

          <span className=" flex gap-[0.6rem] mi:gap-[0.4rem]">
            <Inputs touched={touched.expiryDateMm} errors={errors.expiryDateMm} value={values.expiryDateMm} setValue={((e) => {setFieldValue("expiryDateMm", e.target.value.slice(0, 2)); })} label={labels[2]} placeHolders={placeHolders[2]} type="number" width="w-[5rem]" />
            <Inputs touched={touched.expiryDateYy} errors={errors.expiryDateYy} value={values.expiryDateYy} setValue={((e) => {setFieldValue("expiryDateYy", e.target.value.slice(0, 4)); })}  label={labels[3]} placeHolders={placeHolders[3]} type="number" width="w-[5rem]" />
            <Inputs touched={touched.cvc} errors={errors.cvc} value={values.cvc} setValue={((e) => {setFieldValue("cvc", e.target.value.slice(0, 3));  })} label={labels[4]} placeHolders={placeHolders[4]} type="number" width="w-[100%]" />
          </span>

          <Button submitStatus={isSubmitting} buttonValue="Confirm" />

        </form>
    </div>
  )
}

export default DetailInput