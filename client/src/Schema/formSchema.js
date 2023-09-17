import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string("email should be a string")
    .email("Please provide a valid email address")
    .required("email address is required *"),
  fullName: yup
    .string()
    .min(5)
    .max(25)
    .required("Please enter your name(minimum 5 charactor required *"),
  companyName: yup.string().min(5).required("Please enter your company name *"),
  message: yup
    .string()
    .min(20)
    .max(200)
    .required("Please provide a suitable message *"),
  development: yup
    .string("please select one option")
    .oneOf(["Web Development", "Web Design", "Mobile App", "E-commerce"])
    .required("please select one of the option provided inside input *"),
});
