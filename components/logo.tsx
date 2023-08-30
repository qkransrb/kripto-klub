import Image from "next/image";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width, height, className }) => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={width}
        height={height}
        priority
        className={cn("object-contain", className)}
      />
    </Link>
  );
};

export default Logo;
