"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// Define the form schema with Zod
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Họ và tên phải có ít nhất 2 ký tự" })
    .max(50, { message: "Họ và tên không được quá 50 ký tự" }),
  email: z
    .string()
    .email({ message: "Email không hợp lệ" }),
  phone: z
    .string()
    .regex(/^[0-9]{9,11}$/, { message: "Số điện thoại không hợp lệ (9-11 số)" }),
  message: z
    .string()
    .min(10, { message: "Tin nhắn phải có ít nhất 10 ký tự" })
    .max(500, { message: "Tin nhắn không được quá 500 ký tự" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Simulate form submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted with data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-medium mb-2">Gửi yêu cầu thành công!</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block mb-2 text-sm font-medium">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-800 dark:border-gray-700 ${
            errors.fullName ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
          }`}
          placeholder="Nhập họ và tên của bạn"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-800 dark:border-gray-700 ${
            errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
          }`}
          placeholder="Nhập địa chỉ email của bạn"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-800 dark:border-gray-700 ${
            errors.phone ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
          }`}
          placeholder="Nhập số điện thoại của bạn"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Nội dung yêu cầu <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-800 dark:border-gray-700 ${
            errors.message ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
          }`}
          placeholder="Nhập nội dung yêu cầu của bạn"
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
        <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">
          <span>Tối đa 500 ký tự</span>
        </div>
      </div>

      <Button
        variant="primary"
        type="submit"
        className="w-full flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Đang gửi...
          </>
        ) : (
          "Gửi yêu cầu"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
