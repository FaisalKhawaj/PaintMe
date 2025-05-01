import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const useValidations = () => {
  const createEmail = z.object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
  });

  const editProfileScheme = z.object({
    firstName: z.string().nonempty("First Name is required"),
    lastName: z.string().nonempty("Last Name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    phoneNumber: z
      .string()
      .min(6, "Phone number must be at least 6 digits.")
      .max(15, "Phone number cannot exceed 15 digits.")
      .refine((value) => /^[0-9]+$/.test(value), {
        message: "Phone number can only contain numbers.",
      }),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password should be atleast 8 characters"),
    bio: z.string().nonempty("Bio is required"),
  });

  const createNumber = z
    .object({
      phoneNumber: z
        .string()
        .min(6, "Phone number must be at least 6 digits.")
        .max(15, "Phone number cannot exceed 15 digits.")
        .refine((value) => /^[0-9]+$/.test(value), {
          message: "Phone number can only contain numbers.",
        }),
      countryCode: z
        .string()
        .min(1, "Country is required")
        .max(3, "Invalid country code"), // e.g., 'US', 'AE'
    })
    .refine(
      (data) => {
        const parsed = parsePhoneNumberFromString(data.phoneNumber, data.countryCode.toUpperCase());
        return parsed?.isValid();
      },
      {
        message: "Invalid phone number for selected country.",
        path: ["phoneNumber"],
      }
    );

  const otpSchema = z.object({
    otp: z
      .string()
      .length(5, "OTP must be exactly 5 digits")
      .regex(/^\d+$/, "OTP must contain only numbers"),
  });

  const collectionSchema = z.object({
    collectionName: z
      .string()
      .min(6, "Collection name must be greater than 5 characters"),
  });

  return { editProfileScheme, createEmail, createNumber, otpSchema, collectionSchema };
};
