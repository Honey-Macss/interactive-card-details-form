
import * as yup from "yup";

const dates = new Date();
  const currentYear = dates.getFullYear();

export const SchemaWay = yup.object().shape({
    cardHolderName: yup.string().required("Can't be blank"),
    cardNumber: yup.number().required("Can't be blank"),
    expiryDateMm: yup.number().positive().integer("").required("Can't be blank"),
    expiryDateYy: yup.number().positive().min(currentYear, `Expiry year must be at least ${currentYear}`).integer().required("Can't be blank "),
    cvc: yup.number().positive().test("len", "must be more exactly 3 numbers", val => val && val.toString().length === 3).integer().required("Can't be blank"),
  });