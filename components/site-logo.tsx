import Link from "next/link";
import Image from "next/image";

import MediaLogo from "@/public/logo.webp";
import MediaLogoAlt from "@/public/logo-alt.png";

export const SiteLogoNavbar = () => {
  return (
    <Link href="/" aria-label="Glints">
      <Image
        src={MediaLogo}
        alt="Glints"
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
        src={MediaLogoAlt}
        alt="Glints"
        width={108}
        height={82}
        className="h-20 w-auto"
      />
    </Link>
  );
};
