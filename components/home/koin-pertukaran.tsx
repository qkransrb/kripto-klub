"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "../ui/input";
import { ArrowUpDown, SearchIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";

const formSchema = z.object({
  keyword: z.string().nonempty(),
  selected: z.string().nonempty(),
});

const KoinPertukaran = () => {
  // koin | pertukaran
  const [selected, setSelected] = useState("koin");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: "",
      selected: "idr",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    //
  };

  return (
    <section className="bg-brand-white">
      <div className="h-[60px] border-b border-brand-gray px-3 flex items-center">
        <h2
          onClick={() => setSelected("koin")}
          className={cn(
            "text-base text-brand-subgray font-semibold hover:text-brand-dark transition-colors px-3 cursor-pointer",
            selected === "koin" && "text-brand-dark"
          )}
        >
          Koin
        </h2>
        <span className="text-base text-brand-subgray">|</span>
        <h2
          onClick={() => setSelected("pertukaran")}
          className={cn(
            "text-base text-brand-subgray font-semibold hover:text-brand-dark transition-colors px-3 cursor-pointer",
            selected === "pertukaran" && "text-brand-dark"
          )}
        >
          Pertukaran
        </h2>
      </div>

      <div className="px-6 h-[120px] flex flex-col justify-center items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-2.5"
          >
            <FormField
              control={form.control}
              name="keyword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center bg-brand-gray px-[14px]">
                      <SearchIcon size={14} />
                      <Input
                        placeholder="Cari koin..."
                        className="border-none bg-transparent text-xs font-medium text-brand-dark placeholder:text-brand-inactive"
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="selected"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-none text-sm text-brand-inactive font-medium">
                        <SelectValue placeholder="IDR" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="idr">IDR</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <div>
        <Table>
          <TableHeader className="bg-brand-gray">
            <TableRow className="flex items-center">
              <TableHead className="text-xs text-brand-inactive font-medium flex items-center gap-x-2 w-[40%]">
                <span className="w-[77px]">Koin/Volume Perdagangan</span>
                <ArrowUpDown size={12} className="cursor-pointer" />
              </TableHead>
              <TableHead className="text-xs text-brand-inactive font-medium flex items-center gap-x-2 w-[30%]">
                <span className="w-[72px]">Harga (USD)</span>
                <ArrowUpDown size={12} className="cursor-pointer" />
              </TableHead>
              <TableHead className="text-xs text-brand-inactive font-medium flex items-center justify-end gap-x-2 text-right w-[30%]">
                <span className="w-[62px]">Perubahan 24jam</span>
                <ArrowUpDown size={12} className="cursor-pointer" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-brand-white">
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow
                key={`koin-pertukaran-${index}`}
                className="flex items-center"
              >
                <TableCell className="w-[40%] space-y-2 px-5">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/btc.png"
                      alt="BTC"
                      width={16}
                      height={16}
                    />
                    <span className="text-sm text-brand-dark font-medium">
                      Bitcoin
                    </span>
                  </div>
                  <span className="text-xs text-brand-inactive font-medium">
                    40.7 million
                  </span>
                </TableCell>
                <TableCell
                  className={cn(
                    "w-[30%] text-right text-brand-red text-xs font-medium",
                    (index === 4 || index === 6) && "text-brand-blue"
                  )}
                >
                  22,830 $
                </TableCell>
                <TableCell className="w-[30%] text-right flex justify-end">
                  <div
                    className={cn(
                      "w-[78px] h-[28px] bg-brand-red text-brand-white text-xs font-semibold flex items-center justify-center rounded-sm",
                      (index === 4 || index === 6) && "bg-brand-blue"
                    )}
                  >
                    {index === 4 || index === 6 ? `-0.82 %` : `+0.82 %`}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default KoinPertukaran;
