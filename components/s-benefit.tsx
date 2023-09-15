import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { contentFeatures } from "@/content/content";

export const SBenefit = () => {
  return (
    <section className="bg-[url(/bg-3.webp)] bg-cover bg-center bg-no-repeat px-4 py-16">
      <div className="container flex flex-col gap-16">
        {/* Content */}
        <ul className="mx-auto flex flex-col gap-16 md:w-4/5">
          {contentFeatures?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:odd:flex-row-reverse"
            >
              {/* Col */}
              <div className="md:w-4/12">
                <Image
                  src={`/${item.media}`}
                  alt={item.title}
                  width={1221}
                  height={915}
                  className="mx-auto h-auto w-1/2 md:w-full"
                />
              </div>
              {/* Col */}
              <div className="flex flex-col items-center gap-4 text-center text-white md:w-6/12 md:items-start md:text-start">
                <h3 className="h2">{item.title}</h3>
                <p>{item.desc}</p>

                <Link
                  href="/"
                  aria-label="Cek Sekarang di App"
                  className={cn(
                    buttonVariants({
                      variant: "destructive",
                      size: "lg",
                      className: "mt-6 w-full md:w-max md:px-8",
                    }),
                  )}
                >
                  Cek Sekarang di App
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex w-full flex-col items-center gap-2 text-center text-white">
          <h2 className="h2">Cocok. Lamar. Kerja. Semua bisa di aplikasi!</h2>
          <p>
            Temukan pekerjaan dan karier impianmu dengan lebih banyak fitur di
            aplikasi.
          </p>
          <Link
            href="/"
            aria-label="Unduh Aplikasi Glints"
            className={cn(
              buttonVariants({
                variant: "destructive",
                size: "lg",
                className: "mt-6 w-full md:w-max md:px-8",
              }),
            )}
          >
            Unduh Aplikasi Glints
          </Link>
        </div>
      </div>
    </section>
  );
};
