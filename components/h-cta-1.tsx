import Image from "next/image";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const HomepageCTA1 = () => {
  return (
    <section id="cta-1" className="gradient px-4 pt-16">
      <div className="container">
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="">
            {/* # */}
            <h2 className="text-3xl font-bold leading-snug md:text-4xl">
              Lamar kerja lebih mudah
            </h2>

            {/* # */}
            <Image
              src="/tinggal-chat-aja.webp"
              alt="Tinggal Chat Aja"
              width={757}
              height={91}
              className="mt-4 h-8 w-auto md:h-10"
            />

            {/* # */}
            <Link
              href="/"
              aria-label="Download aplikasi Glints"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "default",
                  className: "mt-8",
                }),
              )}
            >
              Download aplikasi Glints
            </Link>
          </div>

          {/* Col */}
          <div className="md:w-5/12">
            <Image
              src="/easy-apply.webp"
              alt="Easy Apply Jobs"
              width={1200}
              height={1388}
              className="ml-auto h-auto w-4/5 md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
