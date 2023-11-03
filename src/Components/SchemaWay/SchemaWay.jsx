
import * as yup from "yup";

const dates = new Date();
  const currentYear = dates.getFullYear();

export const SchemaWay = yup.object().shape({
    cardHolderName: yup.string().required("Can't be blank"),
    cardNumber: yup.number().typeError("Wrong format, numbers only").positive().test("len", "Must be exactly 16 numbers", val => val && val.toString().length === 16).required("Can't be blank"),
    expiryDateMm: yup.number().positive().integer().min(1, "Expiry month must be at least 1 month").max(31, "Expiry month can not be more than 12 months").required("Can't be blank"),
    expiryDateYy: yup.number().positive().integer().min(currentYear, `Expiry year must be at least ${currentYear}`).integer().required("Can't be blank "),
    cvc: yup.number().positive().test("len", "Must be exactly 3 numbers", val => val && val.toString().length === 3).integer().required("Can't be blank"),
  });