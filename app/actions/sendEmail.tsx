"use server";
import { z } from "zod";
import {
  InitialFormState,
  fromErrorToFormState,
} from "@/utils/errorToFormState";
import { revalidatePath } from "next/cache";

const emailSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
      invalid_type_error: "Name is invalid.",
    })
    .min(6, { message: "Name should be minimum 6 characters long" }),
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email address is type invalid.",
    })
    .email({
      message: "Email address is invalid.",
    }),
  message: z
    .string({
      required_error: "Message is required.",
      invalid_type_error: "Message is invalid.",
    })
    .min(10, { message: "Message should be minimum 10 characters long" }),
});

export default async function sendEmail(
  formState: InitialFormState,
  formData: FormData
) {
  console.log("Formdata:", formData);
  try {
    const validateFields = emailSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validateFields.success) {
      throw validateFields.error;
    }
    console.log("Message: ", validateFields);
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });

    // SEND MAIL TO DO

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "post",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: process.env.SENDGRID_MAIL_RECEIVER_EMAIL,
              },
            ],
          },
        ],
        from: {
          email: process.env.SENDGRID_MAIL_VERIFIED_SENDER_EMAIL,
        },
        subject: `mehedihasanpro:: Message from ${validateFields.data.name}`,
        content: [
          {
            type: "text/plain",
            value:
              "Sender Name: " +
              validateFields.data.name +
              "\nSender Email: " +
              validateFields.data.email +
              "\n" +
              validateFields.data.message,
          },
        ],
      }),
    });
    console.log("Response", response);
    if (response.status === 202 || response.statusText === "Accepted") {
      return {
        status: "success",
        success: "Email has been sent.",
      };
    } else {
      throw new Error(
        "Sorry! Seems like some technical issues occured. Send me an email instead."
      );
    }
  } catch (error) {
    return fromErrorToFormState(error);
  }
}
