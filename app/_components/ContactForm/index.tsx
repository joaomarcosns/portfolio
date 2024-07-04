"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section
      className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32"
      id="contact"
    >
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          title="Vamos trabalhar juntos? Entre em contato"
          subtitle="contato"
          className="items-center text-center"
        />

        <form
          className="mt-12 w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="m-2 h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="m-2 h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="m-2 h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register("message")}
            maxLength={500}
          />

          <div className="relative mx-auto mt-6 w-max">
            <Button className="relative z-[2]" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-emerald-600 opacity-20 blur-2xl" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
