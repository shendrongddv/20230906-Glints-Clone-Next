import Link from "next/link";

import Kominfo from "@/public/kominfo.webp";
import Kemnakertrans from "@/public/kemnakertrans.webp";

import { siteFooterLinks } from "@/content/site";
import { SiteLogoFooter } from "../site-logo";
import Image from "next/image";

export const FooterBody = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:flex md:justify-evenly md:gap-4">
      {/* Col */}
      <div className="flex flex-col gap-3 md:w-1/4">
        <SiteLogoFooter />
        <div>
          <h4 className="text-base font-semibold text-white">
            Glints Aisa Pasifik
          </h4>
        </div>
        <p>
          Secara resmi diluncurkan pada tahun 2015 di Singapura, Glints telah
          memberdayakan lebih dari 5 juta bakat dan 60.000 organisasi untuk
          mewujudkan potensi manusia mereka.
        </p>
      </div>

      {/* Col */}
      {siteFooterLinks?.map((item) => (
        <div key={item.id} className="space-y-3">
          <h4 className="text-base font-semibold text-white">{item.title}</h4>

          <ul className="grid grid-cols-2 gap-2 md:flex md:flex-col">
            {item.links?.map((sub) => (
              <li key={sub.id}>
                <Link
                  href={sub.url}
                  aria-label={sub.label}
                  className="hover:text-white hover:underline"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Col */}
      <div className="space-y-6 md:w-1/5">
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-white">
            Terdaftar dan Diawasi oleh:
          </h4>
          <div className="flex items-center gap-4">
            <Image src={Kominfo} alt="Kominfo" className="h-8 w-auto" />

            <Image
              src={Kemnakertrans}
              alt="Kemnakertrans"
              className="h-14 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
