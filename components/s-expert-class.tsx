import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { SlideExpertClass } from "./slide-expert-class";

export const SExpertClass = () => {
  return (
    <section className="bg-[url(/bg-4.webp)] bg-cover bg-center bg-no-repeat py-16 md:px-4">
      <div className="container flex flex-col gap-16">
        {/* Col */}
        <div className="w-full">
          <SlideExpertClass />
        </div>

        {/* Col */}
        <div className="flex w-full flex-col items-center gap-2 text-center text-white max-md:px-4">
          <h2 className="h2">Mau kariermu naik kelas?</h2>
          <p>
            Tingkatkan skill sekarang, belajar langsung dari ahli di bidangnya,
            dan dapatkan e-sertifikat
          </p>
          <Link
            href="/"
            aria-label="Gabung Expert Class"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
                className: "mt-6 w-full md:w-max md:px-8",
              }),
            )}
          >
            Gabung Expert Class
          </Link>
        </div>
      </div>
    </section>
  );
};
