// src/validation/contactSchema.js

import * as yup from "yup";

const contactSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number is invalid")
    .optional(),
    message: yup.string().required("Message is required").min(5, "Message is too short"),
});

export default contactSchema;
