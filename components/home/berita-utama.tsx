import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BeritaUtama = () => {
  return (
    <section className="w-[766px] bg-brand-white">
      <Link
        href="/"
        className="h-[60px] w-fit flex items-center gap-x-2 border-b border-brand-gray px-6"
      >
        <h2 className="text-base text-brand-dark font-semibold">
          Berita Utama
        </h2>
        <ChevronRight size={16} />
      </Link>
      <div className="p-6 flex items-center justify-between">
        {Array.from({ length: 3 }).map((_, index) => (
          <Link href="/" key={`berita-utama-${index}`} className="group">
            <div className="bg-brand-subgray w-[230px] h-[140px] rounded-md mb-[14px]" />
            <p className="text-base text-brand-dark font-semibold leading-[120%] max-w-[230px] tracking-[-0.5px] mb-2.5 group-hover:text-brand-red transition-colors">
              Singapore Monetary Authority Minister, Opinion on ...
            </p>
            <div className="flex items-center gap-x-1.5">
              <span className="text-sm font-medium text-brand-subgray2">
                repoter name
              </span>
              <span className="text-brand-subgray text-sm font-medium">
                00 hours ago
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BeritaUtama;
