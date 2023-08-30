"use client";

import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Silakan masukkan format email yang benar" }),
  password: z.string().nonempty({ message: "Harap masukkan sandi anda" }),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    //
  };

  return (
    <div className="w-full h-full bg-brand-white py-[120px] flex justify-center">
      <section className="w-[420px] p-6 space-y-11">
        <Image src="/images/auth-logo.png" alt="Logo" width={372} height={50} />
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2.5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <div className="space-y-2.5">
                      <FormLabel className="text-base font-semibold text-brand-dark">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan email"
                          className="text-sm text-brand-dark font-medium placeholder:text-brand-inactive"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <div className="space-y-2.5">
                      <FormLabel className="text-base font-semibold text-brand-dark">
                        Sandi
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Masukkan sandi"
                          className="text-sm text-brand-dark font-medium placeholder:text-brand-inactive"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red/80 transition-colors"
              >
                Masuk
              </Button>
            </form>
          </Form>

          <div className="flex items-center justify-between mt-2.5">
            <Link
              href="/"
              className="text-sm font-medium text-brand-inactive hover:text-brand-red transition-colors"
            >
              Lupa sandi?
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-brand-inactive hover:text-brand-red transition-colors"
            >
              Daftar
            </Link>
          </div>

          <div className="h-[14px] border-b border-brand-subgray mt-5 relative">
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-25%] text-sm font-medium text-brand-inactive w-fit px-[14px] bg-brand-white">
              atau, lanjutkan dengan
            </p>
          </div>

          <Button className="mt-5 w-full bg-white flex items-center justify-center gap-x-2 border border-brand-subgray group">
            <Image
              src="/images/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            <span className="text-sm text-brand-dark font-medium group-hover:text-brand-white transition-colors">
              Google
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
}
