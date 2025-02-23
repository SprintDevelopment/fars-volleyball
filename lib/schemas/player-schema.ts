import { z } from "zod";

export const PlayerSummarySchema = z.object({
  id: z.string().uuid(),
  fullName: z.string(),
  nationalCode: z.string(),
  dateOfBirth: z.string(),
  gender: z.string(),
  MilitaryServiceStatus: z.string(),
  Position: z.string(),
});

export const CreatePlayerSchema = z.object({
  firstName: z
    .string()
    .min(3, "نام باید حداقل ۳ کاراکتر باشد")
    .max(64, "نام نمی تواند بیش از 64 کاراکتر باشد"),
  lastName: z
    .string()
    .min(3, "نام خانوادگی باید حداقل ۳ کاراکتر باشد")
    .max(64, "نام خانوادگی نمی تواند بیش از 64 کاراکتر باشد"),
  fatherName: z
    .string()
    .min(3, "نام خانوادگی باید حداقل ۳ کاراکتر باشد")
    .max(64, "نام پدر نمی تواند بیش از 64 کاراکتر باشد"),
  nationalCode: z.string().length(10, "کد ملی باید 10 کاراکتر باشد"),
  dateOfBirth: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "تاریخ تولد نامعتبر است",
    }),
  gender: z.enum(["Male", "Female"]),
  emailAddress: z.string().email("ایمیل را به درستی وارد کنید").optional(),
  phoneNumber: z
    .string()
    .min(11, "شماره موبایل باید حداقل 11 رقم باشد")
    .max(13, "شماره موبایل نمی تواند بیش از 13 رقم باشد"),
  address: z.string().max(256, "آدرس نمی تواند بیش از 256 کاراکتر باشد"),
  height: z.number(),
  weight: z.number(),
  militaryServiceStatus: z.enum([
    "Exempt",
    "Completed",
    "Serving",
    "StudentExempt",
    "NotApplicable"
  ]),
  position: z.enum([
    "OutsideHitter",
    "MiddleBlocker",
    "OppositeHitter",
    "Setter",
    "Libero",
  ]),
});

export const UpdatePlayerSchema = z.object({
  id: z
    .string()
    .uuid(),
  firstName: z
    .string()
    .min(3, "نام باید حداقل ۳ کاراکتر باشد")
    .max(64, "نام نمی تواند بیش از 64 کاراکتر باشد"),
  lastName: z
    .string()
    .min(3, "نام خانوادگی باید حداقل ۳ کاراکتر باشد")
    .max(64, "نام خانوادگی نمی تواند بیش از 64 کاراکتر باشد"),
  fatherName: z
    .string()
    .min(3, "نام خانوادگی باید حداقل ۳ کاراکتر باشد")
    .max(64, "نام پدر نمی تواند بیش از 64 کاراکتر باشد"),
  nationalCode: z.string().length(10, "کد ملی باید 10 کاراکتر باشد"),
  dateOfBirth: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "تاریخ تولد نامعتبر است",
    }),
  gender: z.enum(["Male", "Female"]),
  emailAddress: z.string().email("ایمیل را به درستی وارد کنید").optional(),
  phoneNumber: z
    .string()
    .min(11, "شماره موبایل باید حداقل 11 رقم باشد")
    .max(13, "شماره موبایل نمی تواند بیش از 13 رقم باشد"),
  address: z.string().max(256, "آدرس نمی تواند بیش از 256 کاراکتر باشد"),
  height: z.number(),
  weight: z.number(),
  militaryServiceStatus: z.enum([
    "Exempt",
    "Completed",
    "Serving",
    "StudentExempt",
    "NotApplicable"
  ]),
  position: z.enum([
    "OutsideHitter",
    "MiddleBlocker",
    "OppositeHitter",
    "Setter",
    "Libero",
  ]),
});

export type PlayerSummary = z.infer<typeof PlayerSummarySchema>;
export type Player = z.infer<typeof CreatePlayerSchema>;
export type PlayerUpdate = z.infer<typeof UpdatePlayerSchema>;
