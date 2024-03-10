"use client";
import sendEmail from "@/app/actions/sendEmail";
import SendButton from "../shared/SendButton";
import { useFormState, useFormStatus } from "react-dom";
import InputField from "../shared/InputField";
import InputTextArea from "../shared/InputTextArea";
import ErrorLabel from "../shared/ErrorLabel";
import ErrorNotifBlock from "../shared/ErrorNotifBlock";
import { useEffect, useMemo, useRef, useState } from "react";
import SuccessNotifBlock from "../shared/SuccessNotifBlock";

const ContactForm = () => {
  const initialState = {
    status: "",
    errors: "",
    success: "",
  };
  const [formState, action] = useFormState(sendEmail, initialState);
  const [formPending, setFormPending] = useState(false);
  const toggleFormPending = (value: boolean) => setFormPending(value);

  let actionResponse = useMemo(() => {
    return { ...formState };
  }, [formState]);

  const formRef = useRef<HTMLFormElement>(null);
  // console.log(formState);
  // console.log(actionResponse);

  useEffect(() => {
    if (
      formRef.current &&
      "success" in actionResponse &&
      actionResponse.success !== ""
    ) {
      formRef.current.reset();
    }
  }, [actionResponse]);

  return (
    <div className="formBlock flex flex-col p-4 lg:p-8 2xl:p-16 rounded-lg neumorph-flat dark:neumorph-flat-dark w-full">
      <form action={action} ref={formRef}>
        <InputField
          type={"text"}
          name={"name"}
          id={"contact_name"}
          placeholder={"Your name"}
          required={true}
          errorFound={
            !formPending &&
            "errors" in actionResponse &&
            typeof actionResponse.errors === "object" &&
            "name" in actionResponse.errors
          }
        ></InputField>
        <label htmlFor="contact_name" className="form__label">
          Name
          {!formPending && "errors" in actionResponse ? (
            <ErrorLabel
              formStateErrors={actionResponse.errors}
              errorKey={"name"}
            ></ErrorLabel>
          ) : (
            ""
          )}
        </label>

        <InputField
          type={"email"}
          name={"email"}
          id={"contact_email"}
          placeholder={"Your email"}
          required={true}
          errorFound={
            !formPending &&
            "errors" in actionResponse &&
            typeof actionResponse.errors === "object" &&
            "email" in actionResponse.errors
          }
        ></InputField>
        <label htmlFor="contact_email" className="form__label">
          Email
          {!formPending && "errors" in actionResponse ? (
            <ErrorLabel
              formStateErrors={actionResponse.errors}
              errorKey={"email"}
            ></ErrorLabel>
          ) : (
            ""
          )}
        </label>

        <InputTextArea
          rows={4}
          maxLength={2000}
          name="message"
          id="contact_message"
          placeholder="Your message"
          required={true}
          errorFound={
            !formPending &&
            "errors" in actionResponse &&
            typeof actionResponse.errors === "object" &&
            "message" in actionResponse.errors
          }
        />
        <label htmlFor="contact_message" className="form__label">
          Message
          {!formPending && "errors" in actionResponse ? (
            <ErrorLabel
              formStateErrors={actionResponse.errors}
              errorKey={"message"}
            ></ErrorLabel>
          ) : (
            ""
          )}
        </label>

        <div className="inline-flex flex-row gap-2 w-full">
          {!formPending &&
          "errors" in actionResponse &&
          actionResponse.errors !== "" ? (
            <ErrorNotifBlock errorMsg={actionResponse.errors}></ErrorNotifBlock>
          ) : "success" in actionResponse && actionResponse.success !== "" ? (
            <SuccessNotifBlock
              successMsg={actionResponse.success as string}
            ></SuccessNotifBlock>
          ) : (
            <></>
          )}
        </div>
        <SendButton onClick={toggleFormPending} />
      </form>
    </div>
  );
};

export default ContactForm;
