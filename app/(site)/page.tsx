import TopBanner from "@/components/home/top-banner";
import BottomBanner from "@/components/home/bottom-banner";
import ArtikelPopuler from "@/components/home/artikel-populer";
import BeritaUtama from "@/components/home/berita-utama";
import RekomensasiHariIni from "@/components/home/rekomendasi-hari-ini";
import CredentialsLogin from "@/components/home/credentials-login";
import Perhatian from "@/components/home/perhatian";
import Exchanges from "@/components/home/exchanges";
import SideBanner from "@/components/home/side-banner";
import KoinPertukaran from "@/components/home/koin-pertukaran";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto py-5 px-10">
      <TopBanner />
      <div className="gap-x-[14px] flex items-start">
        <div className="space-y-[14px]">
          <ArtikelPopuler />
          <BeritaUtama />
          <RekomensasiHariIni />
        </div>
        <div className="w-full space-y-[14px]">
          <CredentialsLogin />
          <Perhatian />
          <Exchanges />
          <SideBanner />
          <KoinPertukaran />
        </div>
      </div>
      <BottomBanner />
    </main>
  );
}
