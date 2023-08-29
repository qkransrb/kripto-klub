import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import HottestSm from "@/components/svg/hottest-sm";

const ArtikelPopuler = () => {
  return (
    <section className="w-[766px] bg-brand-white">
      <Link
        href="/"
        className="h-[60px] w-fit flex items-center gap-x-2 border-b border-brand-gray px-6"
      >
        <h2 className="text-base text-brand-dark font-semibold">
          Artikel Populer
        </h2>
        <ChevronRight size={16} />
      </Link>
      <div className="grid grid-rows-5 grid-flow-col">
        {Array.from({ length: 10 }).map((_, index) => (
          <Link
            key={`artikel-populer-${index}`}
            href="/"
            className={cn(
              "h-[60px] px-5 py-2.5 flex items-center gap-3 border-b border-brand-gray group",
              index < 5 && "border-r border-brand-gray"
            )}
          >
            <div>{index === 9 ? `10` : `0` + (index + 1)}</div>
            <div className="w-full flex items-center justify-between">
              <p className="max-w-[257.5px] truncate text-sm text-brand-dark font-medium group-hover:text-brand-red transition-colors">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                omnis sunt dolorem ea veritatis dicta, voluptatem id. Placeat,
                magnam ipsam.
              </p>
              <div className="flex items-center">
                <span className="text-sm text-brand-blue font-medium mr-1">
                  (00)
                </span>
                <HottestSm />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ArtikelPopuler;
