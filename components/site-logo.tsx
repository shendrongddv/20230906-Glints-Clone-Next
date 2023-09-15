import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.webp";
import LogoAlt from "@/public/logo-alt.png";

export const SiteLogoNavbar = () => {
  return (
    <Link href="/" aria-label="Glints">
      <Image
        src={Logo}
        alt="Glints"
        priority
        width={53}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
};

export const SiteLogoFooter = () => {
  return (
    <Link href="/" aria-label="Glints">
      <Image
        src={LogoAlt}
        alt="Glints"
        width={108}
        height={82}
        className="h-20 w-auto"
      />
    </Link>
  );
};
