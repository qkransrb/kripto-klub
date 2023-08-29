import Link from "next/link";
import React from "react";

const Perhatian = () => {
  return (
    <section className="bg-brand-white">
      {Array.from({ length: 3 }).map((_, index) => (
        <Link
          href="/"
          key={`perhatian-${index}`}
          className="h-10 px-5 py-2.5 border-b border-brand-gray last:border-b-0 flex items-center gap-x-3 group"
        >
          <h3 className="text-brand-red text-sm font-semibold">Perhatian</h3>
          <p className="max-w-[304px] truncate text-xs text-brand-dark font-medium group-hover:underline underline-offset-2">
            Tesla made 84 billion won by selling 75% of Bitcoin in Q2
          </p>
        </Link>
      ))}
    </section>
  );
};

export default Perhatian;
