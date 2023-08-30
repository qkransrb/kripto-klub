import Image from "next/image";

const Exchanges = () => {
  const exchanges = [
    {
      label: "binance",
      imageSrc: "/images/binance.png",
      width: 98,
      height: 21,
    },
    {
      label: "upbit",
      imageSrc: "/images/upbit.png",
      width: 70,
      height: 17,
    },
    {
      label: "bithumb",
      imageSrc: "/images/bithumb.png",
      width: 97,
      height: 25,
    },
    {
      label: "coinone",
      imageSrc: "/images/coinone.png",
      width: 95,
      height: 20,
    },
    {
      label: "kucoin",
      imageSrc: "/images/kucoin.png",
      width: 87,
      height: 22,
    },
    {
      label: "coinex",
      imageSrc: "/images/coinex.png",
      width: 86,
      height: 25,
    },
  ];

  return (
    <section className="grid grid-cols-3 h-[160px] w-full bg-brand-white">
      {exchanges.map((exchange) => (
        <div key={exchange.label} className="flex items-center justify-center">
          <Image
            src={exchange.imageSrc}
            alt={exchange.label}
            width={exchange.width}
            height={exchange.height}
            className="object-contain"
          />
        </div>
      ))}
    </section>
  );
};

export default Exchanges;
