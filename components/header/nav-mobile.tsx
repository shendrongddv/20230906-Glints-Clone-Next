import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { ArrowRight, FormInput, User } from "lucide-react";
import { SheetClose } from "../ui/sheet";

export const NavMobile = () => {
  return (
    <nav className="grid">
      {/* Auth */}
      <div className="grid grid-cols-2 divide-x border-b">
        <SheetClose asChild>
          <Link
            href="/"
            aria-label="Daftar"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "lg",
                className:
                  "flex h-auto flex-col items-center gap-2 rounded-none p-4 text-center text-base font-semibold",
              }),
            )}
          >
            <User className="h-6 w-6" />
            Daftar
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href="/"
            aria-label="Masuk"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "lg",
                className:
                  "flex h-auto flex-col items-center gap-2 rounded-none p-4 text-center text-base font-semibold",
              }),
            )}
          >
            <FormInput className="h-6 w-6" />
            Masuk
          </Link>
        </SheetClose>
      </div>

      {/* MainNav */}
      <ul className="grid border-b py-2">
        <li>
          <SheetClose asChild>
            <Link
              href="/"
              aria-label="Lowongan Kerja"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className:
                    "h-full w-full justify-start rounded-none px-4 py-2 text-base font-semibold",
                }),
              )}
            >
              Lowongan Kerja
            </Link>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Link
              href="/"
              aria-label="Perusahaan"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className:
                    "h-full w-full justify-start rounded-none px-4 py-2 text-base font-semibold",
                }),
              )}
            >
              Perusahaan
            </Link>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Link
              href="/"
              aria-label="Blog"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className:
                    "h-full w-full justify-start rounded-none px-4 py-2 text-base font-semibold",
                }),
              )}
            >
              Blog
            </Link>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Link
              href="/"
              aria-label="Expert Class"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className:
                    "h-full w-full justify-start rounded-none px-4 py-2 text-base font-semibold",
                }),
              )}
            >
              Expert Class
            </Link>
          </SheetClose>
        </li>
      </ul>

      {/* CTA */}
      <SheetClose asChild>
        <Link
          href="/"
          aria-label="Untuk Perusahaan"
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "mx-4 my-8 justify-between gap-2 px-4 text-base font-semibold",
            }),
          )}
        >
          Untuk Perusahaan
          <ArrowRight className="h-5 w-5" />
        </Link>
      </SheetClose>
    </nav>
  );
};
