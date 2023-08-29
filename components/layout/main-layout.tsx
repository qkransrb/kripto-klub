import Header from "@/components/header";
import Footer from "@/components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="bg-brand-gray flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
