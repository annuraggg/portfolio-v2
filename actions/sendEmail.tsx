"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "./EmailTemplate";

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

console.log(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const resend = new Resend("re_P8oQpB9n_BNwM2CMbizL4Se833xUJ2DwZ");

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const senderEmail = formData.get("senderEmail");
  const Subject = formData.get("Subject");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(Subject, 500)) {
    return {
      error: "Invalid Subject",
    };
  }
  if (!validateString(name, 500)) {
    return {
      error: "Invalid name",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "annuragggg@gmail.com",
      subject: Subject,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        Subject: Subject,
        name: name,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
