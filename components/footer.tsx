import Link from "next/link";

import Logo from "@/components/logo";
import Telegram from "@/components/svg/telegram";
import Twitter from "@/components/svg/twitter";
import Instagram from "@/components/svg/instagram";
import Medium from "@/components/svg/medium";
import Discord from "@/components/svg/discord";
import Dot from "@/components/svg/dot";

const Footer = () => {
  const routes = [
    {
      label: "Komunitas",
      href: "/komunitas",
      children: [
        {
          label: "Umum",
          href: "/komunitas/umum",
        },
        {
          label: "Komunitas Koin",
          href: "/komunitas/komunitas-koin",
        },
        {
          label: "Informasi Koin",
          href: "/komunitas/informasi-koin",
        },
        {
          label: "NFT / Metaverse",
          href: "/komunitas/nft-metaverse",
        },
        {
          label: "Galeri Meme",
          href: "/komunitas/galeri-meme",
        },
        {
          label: "Galeri",
          href: "/komunitas/galeri",
        },
      ],
    },
    {
      label: "Berita",
      href: "/berita",
      children: [
        {
          label: "Berita Utama",
          href: "/berita/berita-utama",
        },
        {
          label: "Berita Terbaru",
          href: "/berita/berita-terbaru",
        },
      ],
    },
    {
      label: "Pasar",
      href: "/pasar",
      children: [
        {
          label: "Koin",
          href: "/pasar/koin",
        },
        {
          label: "Pertukaran",
          href: "/pasar/pertukaran",
        },
      ],
    },
  ];

  return (
    <footer className="w-full bg-brand-white">
      <div className="max-w-7xl mx-auto px-10 py-10 pb-5">
        <section className="pb-20 flex items-start justify-between">
          <Logo width={142} height={26} />
          <nav className="flex items-start">
            <ul className="flex gap-x-[120px] pr-[120px]">
              {routes.map((route) => (
                <li key={route.href} className="space-y-5">
                  <span className="text-base text-brand-dark font-semibold cursor-default">
                    {route.label}
                  </span>
                  <ul className="space-y-5">
                    {route.children.map((child) => (
                      <li
                        key={child.href}
                        className="text-brand-dark text-sm font-medium"
                      >
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <ul className="space-y-10">
              <li className="flex flex-col gap-y-5">
                <span className="text-base text-brand-dark font-semibold cursor-default">
                  Bantuan
                </span>
                <span className="text-brand-dark text-sm font-medium">
                  contact@kriptoklub.com
                </span>
              </li>
              <li className="flex flex-col gap-y-5">
                <span className="text-base text-brand-dark font-semibold cursor-default">
                  SNS
                </span>
                <ul>
                  <li className="flex items-center gap-x-5">
                    <a href="#">
                      <Telegram />
                    </a>
                    <a href="#">
                      <Twitter />
                    </a>
                    <a href="#">
                      <Instagram />
                    </a>
                    <a href="#">
                      <Medium />
                    </a>
                    <a href="#">
                      <Discord />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>

        <section className="w-full border-t border-t-brand-inactive pt-[18px] flex items-center justify-between text-brand-dark font-medium text-sm">
          <p>2022 © Kripto Klub. All Rights Reserved</p>
          <p className="flex items-center gap-x-2.5 text-brand-dark font-medium text-sm">
            <span>Ketentuan Layanan</span>
            <Dot />
            <span>Kebijakan Privasi</span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
