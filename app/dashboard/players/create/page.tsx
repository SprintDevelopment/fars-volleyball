"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePlayerSchema, Player } from "@/lib/schemas/player-schema";
import { createPlayer } from "@/lib/playersService";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function CreatePlayerPage() {
  const router = useRouter();

  const form = useForm<Player>({
    resolver: zodResolver(CreatePlayerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      fatherName: "",
      nationalCode: "",
      dateOfBirth: "",
      gender: "Male",
      emailAddress: "",
      phoneNumber: "",
      address: "",
      height: 180,
      weight: 75,
      militaryServiceStatus: "NotApplicable",
      position: "OutsideHitter",
    },
  });

  const onSubmit = async (data: Player) => {
    try {
      await createPlayer(data);

      router.push("/dashboard/players"); // بازگشت به لیست بازیکنان
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">ایجاد بازیکن جدید</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <Label>نام</Label>
                <FormControl>
                  <Input placeholder="نام بازیکن را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <Label>نام خانوادگی</Label>
                <FormControl>
                  <Input placeholder="نام خانوادگی را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fatherName"
            render={({ field }) => (
              <FormItem>
                <Label>نام پدر</Label>
                <FormControl>
                  <Input placeholder="نام پدر را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nationalCode"
            render={({ field }) => (
              <FormItem>
                <Label>کد ملی</Label>
                <FormControl>
                  <Input placeholder="کد ملی" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <Label>تاریخ تولد</Label>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <Label>جنسیت</Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">مرد</SelectItem>
                    <SelectItem value="Female">زن</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <Label>شماره موبایل</Label>
                <FormControl>
                  <Input placeholder="شماره موبایل" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <Label>ایمیل</Label>
                <FormControl>
                  <Input placeholder="ایمیل" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <Label>آدرس</Label>
                <FormControl>
                  <Input placeholder="آدرس بازیکن" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <Label>قد (سانتی‌متر)</Label>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <Label>وزن (کیلوگرم)</Label>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="militaryServiceStatus"
            render={({ field }) => (
              <FormItem>
                <Label>وضعیت سربازی</Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Exempt">معاف</SelectItem>
                    <SelectItem value="Completed">پایان خدمت</SelectItem>
                    <SelectItem value="Serving">در حال خدمت</SelectItem>
                    <SelectItem value="StudentExempt">معافیت تحصیلی</SelectItem>
                    <SelectItem value="NotApplicable">نامرتبط</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <Label>پست بازیکن</Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="OutsideHitter">
                      Outside Hitter
                    </SelectItem>
                    <SelectItem value="MiddleBlocker">
                      Middle Blocker
                    </SelectItem>
                    <SelectItem value="OppositeHitter">
                      Opposite Hitter
                    </SelectItem>
                    <SelectItem value="Setter">Setter</SelectItem>
                    <SelectItem value="Libero">Libero</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            ایجاد بازیکن
          </Button>
        </form>
      </Form>
    </div>
  );
}
