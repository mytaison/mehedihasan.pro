import { ZodError } from "zod";

export type InitialFormState = {
  status: string;
  errors?: Record<string, string[] | undefined> | string;
  success?: string;
};

export const fromErrorToFormState = (error: unknown) => {
  // if validation error with Zod, return first error message
  if (error instanceof ZodError) {
    return {
      status: "fail",
      errors: error.flatten().fieldErrors,
    };
    // if another error instance, return error message
  } else if (error instanceof Error) {
    return {
      status: "fail",
      errors: error.message,
    };
    // return generic error message
  } else {
    return {
      status: "fail",
      errors: "Something went wrong",
    };
  }
};
