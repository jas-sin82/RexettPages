import React, { useState } from "react";
import Classes from "./ContactForm.module.css";
import axios from "axios";
import CustomAlertSuccess from "../CustomAlert/CustomAlert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Schema/formSchema";

const ContactForm = () => {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const sendMailHandler = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("/sendMail", data);

      response.json().then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2500);
    reset();
  };

  return (
    <>
      <div className={Classes.container}>
        <form
          className={Classes.contactForm}
          onSubmit={handleSubmit(sendMailHandler)}
        >
          <div className={Classes.serviceHeading}>
            <h1>
              <span>C</span>ontact<span> U</span>s
            </h1>
            <p>Thank you for your interest in Rexett and our Services</p>
          </div>
          {show ? <CustomAlertSuccess /> : ""}
          {errors.fullName ? (
            <p className={Classes.errorMessage}>{errors.fullName.message}</p>
          ) : null}
          <input
            {...register("fullName")}
            type="text"
            name="fullName"
            placeholder="Full name"
            className={
              errors.fullName
                ? `${Classes.input} ${Classes.invalid}`
                : `${Classes.input} `
            }
          />
          {errors.email ? (
            <p className={Classes.errorMessage}>{errors.email.message}</p>
          ) : null}
          <input
            {...register("email")}
            className={
              errors.email
                ? `${Classes.input} ${Classes.invalid}`
                : `${Classes.input} `
            }
            type="email"
            name="email"
            placeholder="E-mail"
          />
          {errors.companyName ? (
            <p className={Classes.errorMessage}>{errors.companyName.message}</p>
          ) : null}
          <input
            {...register("companyName")}
            className={
              errors.companyName
                ? `${Classes.input} ${Classes.invalid}`
                : `${Classes.input} `
            }
            type="text"
            name="companyName"
            placeholder="Company "
          />
          {errors.development ? (
            <p className={Classes.errorMessage}>{errors.development.message}</p>
          ) : null}
          <select
            {...register("development")}
            className={
              errors.development
                ? `${Classes.input} ${Classes.invalid}`
                : `${Classes.input} `
            }
            name="development"
          >
            <option className={Classes.options} value="">
              Web Development
            </option>
            <option className={Classes.options} value="Web Design">
              Web Design
            </option>
            <option className={Classes.options} value="Mobile App">
              Mobile App
            </option>
            <option className={Classes.options} value="E-commerce">
              E-commerce
            </option>
          </select>

          {errors.message ? (
            <p className={Classes.errorMessage}>{errors.message.message}</p>
          ) : null}
          <textarea
            {...register("message")}
            className={
              errors.message
                ? `${Classes.input} ${Classes.invalid}`
                : `${Classes.input} `
            }
            name="message"
            type="text"
            placeholder="How can we help you?"
            style={{ height: "100px" }}
          ></textarea>
          <p className={Classes.privacy}>
            Please be informed that when you click the Send button Rexett will
            process your personal data in accordance with our Privacy notice for
            the purpose of providing you with appropriate information.
          </p>
          <input className={Classes.submit} type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
