import Link from "next/link";
import { ChevronRight } from "lucide-react";

import HottestMd from "@/components/svg/hottest-md";

const RekomensasiHariIni = () => {
  return (
    <section className="w-[766px] bg-brand-white">
      <Link
        href="/"
        className="h-[60px] w-fit flex items-center gap-x-2 border-b border-brand-gray px-6"
      >
        <h2 className="text-base text-brand-dark font-semibold">
          Rekomensasi Hari ini
        </h2>
        <ChevronRight size={16} />
      </Link>
      <div>
        {Array.from({ length: 15 }).map((_, index) => (
          <Link
            href="/"
            key={`rekomensasi-hari-ini-${index}`}
            className="h-[74px] flex px-6 py-2.5 border-b border-brand-gray last:border-b-0 group"
          >
            <div className="flex items-center gap-x-2.5">
              {index !== 2 && index !== 3 && index !== 7 && (
                <div className="h-[54px] w-[54px] rounded-md bg-brand-subgray" />
              )}
              <div className="space-y-2.5">
                <div className="flex items-center gap-x-1.5">
                  <p className="text-sm text-brand-dark font-medium max-w-[378px] truncate group-hover:text-brand-red transition-colors">
                    Tesla made 84 billion won by selling 75% of Bitcoin in Q2
                  </p>
                  <span className="text-sm text-brand-blue font-medium mr-1">
                    (00)
                  </span>
                  <HottestMd />
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-brand-dark font-medium">
                    User name
                  </span>
                  <span className="text-xs text-brand-inactive font-medium">
                    Category
                  </span>
                  <span className="text-xs text-brand-inactive font-medium">
                    Diligat 100
                  </span>
                  <span className="text-xs text-brand-inactive font-medium">
                    2023-00-00
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RekomensasiHariIni;
