"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().nonempty(),
  password: z.string().nonempty(),
});

const CredentialsLogin = () => {
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
    <section className="p-6 bg-brand-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="bg-transparent text-xs font-medium text-brand-dark placeholder:text-brand-inactive rounded-none"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Sandi"
                    className="bg-transparent text-xs font-medium text-brand-dark placeholder:text-brand-inactive rounded-none"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="w-full bg-brand-red hover:bg-brand-red/80 transition-colors">
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
        <Image src="/images/google.png" alt="Google" width={20} height={20} />
        <span className="text-sm text-brand-dark font-medium group-hover:text-brand-white transition-colors">
          Google
        </span>
      </Button>
    </section>
  );
};

export default CredentialsLogin;
