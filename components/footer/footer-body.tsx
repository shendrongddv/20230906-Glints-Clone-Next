import Link from "next/link";

import Kominfo from "@/public/kominfo.webp";
import Kemnakertrans from "@/public/kemnakertrans.webp";
import PlayStore from "@/public/play-store.png";
import AppStore from "@/public/app-store.png";

import { siteAsiaPacific, siteFooterLinks } from "@/content/site";
import { SiteLogoFooter } from "../site-logo";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const FooterBody = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 md:flex md:justify-evenly md:gap-4">
      {/* Col */}
      <div className="flex flex-col gap-4 md:w-1/4">
        <SiteLogoFooter />
        <div className="mt-2 space-y-2">
          <h4 className="text-base font-semibold text-white">
            Glints Aisa Pasifik
          </h4>
          <ul className="flex items-center gap-2">
            {siteAsiaPacific?.map((item) => (
              <li key={item.id}>
                <Link href={item.url} aria-label={item.label}>
                  <Image
                    src={`/${item.media}`}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="h-6 w-6"
                  />
                </Link>
              </li>
            ))}
          </ul>
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
        {/* # */}
        <div className="space-y-2">
          <h4 className="text-base font-semibold text-white">
            Terdaftar dan Diawasi oleh:
          </h4>
          <div className="flex items-center gap-4">
            <Image src={Kominfo} alt="Kominfo" className="h-8 w-auto" />

            <Image
              src={Kemnakertrans}
              alt="Kemnakertrans"
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* # */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
          <Link
            href="/"
            aria-label="Play Store"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "default",
                className:
                  "flex h-max w-full items-center justify-start gap-4 bg-transparent hover:bg-transparent hover:text-white",
              }),
            )}
          >
            <Image
              src={PlayStore}
              alt="Play Store"
              width={160}
              height={160}
              className="h-8 w-8"
            />

            <div className="flex flex-col gap-1">
              <span className="text-xs leading-none">Download</span>
              <span className="text-base font-semibold leading-none text-white">
                Play Store
              </span>
            </div>
          </Link>

          <Link
            href="/"
            aria-label="Play Store"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "default",
                className:
                  "flex h-max w-full items-center justify-start gap-4 bg-transparent hover:bg-transparent hover:text-white",
              }),
            )}
          >
            <Image
              src={AppStore}
              alt="App Store"
              width={160}
              height={160}
              className="h-8 w-8"
            />

            <div className="flex flex-col gap-1">
              <span className="text-xs leading-none">Download</span>
              <span className="text-base font-semibold leading-none text-white">
                App Store
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
