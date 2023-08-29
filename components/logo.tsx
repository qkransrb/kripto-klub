import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width, height, className }) => {
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={width}
      height={height}
      priority
      className={cn("object-contain", className)}
    />
  );
};

export default Logo;
