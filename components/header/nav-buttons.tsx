import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { ArrowRight } from "lucide-react";

export const NavButtons = () => {
  return (
    <ul className="flex items-center justify-center gap-1">
      <li>
        <Link
          href="/"
          aria-label="Daftar"
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "",
            }),
          )}
        >
          Daftar
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="Masuk"
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "",
            }),
          )}
        >
          Masuk
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="Untuk Perusahaan"
          className={cn(
            buttonVariants({
              variant: "default",
              size: "sm",
              className: "ml-4",
            }),
          )}
        >
          Untuk Perusahaan
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </li>
    </ul>
  );
};
