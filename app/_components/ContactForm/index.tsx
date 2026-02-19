"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/_lib/animations";
import { useLocale } from "@/app/_contexts/LocaleContext";
import { useMemo } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { t } = useLocale();

  const contactFormSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(3, { message: t.validationNameMin })
          .max(100, { message: t.validationNameMax }),
        email: z.string().email({ message: t.validationEmailInvalid }),
        message: z
          .string()
          .min(1, { message: t.validationMessageMin })
          .max(500, { message: t.validationMessageMax }),
      }),
    [t],
  );

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success(t.successMessage);
      reset();
    } catch (error) {
      toast.error(t.errorMessage);
    }
  };

  return (
    <section
      className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32"
      id="contact"
    >
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          title={t.contactTitle}
          subtitle={t.contactSubtitle}
          className="items-center text-center"
        />

        <motion.form
          className="mt-12 flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder={t.namePlaceholder}
            className="h-14 w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-gray-50 ring-white placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2"
            {...register("name")}
          />
          {errors.name && (
            <span className="-mt-2 text-sm text-red-500">{errors.name.message}</span>
          )}
          <input
            placeholder={t.emailPlaceholder}
            type="email"
            className="h-14 w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-gray-50 ring-white placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2"
            {...register("email")}
          />
          {errors.email && (
            <span className="-mt-2 text-sm text-red-500">{errors.email.message}</span>
          )}
          <textarea
            placeholder={t.messagePlaceholder}
            className="h-[138px] w-full resize-none rounded-lg border border-gray-700 bg-gray-800 p-4 text-gray-50 ring-white placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2"
            {...register("message")}
            maxLength={500}
          />
          {errors.message && (
            <span className="-mt-2 text-sm text-red-500">{errors.message.message}</span>
          )}

          <div className="relative mx-auto mt-6 w-max">
            <Button className="relative z-[2]" disabled={isSubmitting}>
              {t.sendMessage}
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-white opacity-10 blur-2xl" />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
