import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const useValidations = () => {
  const editProfileScheme = z.object({
    firstName: z.string().nonempty("First Name is required"),
    lastName: z.string().nonempty("Last Name is required"),
    email: z.string().email("Invalid email address"),
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

  return { editProfileScheme };
};
