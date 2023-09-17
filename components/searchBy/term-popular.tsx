import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { Flame, Globe, GraduationCap } from "lucide-react";

export const TermPopular = () => {
  return (
    <ul className="grid grid-cols-3 gap-2 md:w-1/4 md:grid-cols-1">
      <li>
        <Link
          href="/"
          aria-label="Aktif Merekrut"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "default",
              className:
                "flex h-full w-full flex-col items-center gap-2 border-[#ec2728] p-4 text-center text-[#ec2728] hover:bg-background hover:text-[#ec2728] hover:shadow max-md:border-b-4 md:flex-row md:border-l-4 md:p-4 md:text-sm",
            }),
          )}
        >
          <Flame className="h-5 w-5" />
          Aktif Merekrut
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="WFH / Remote"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "default",
              className:
                "flex h-full w-full flex-col items-center gap-2 border-[#cec001] p-4 text-center text-[#cec001] hover:bg-background hover:text-[#cec001] hover:shadow max-md:border-b-4 md:flex-row md:border-l-4 md:p-4 md:text-sm",
            }),
          )}
        >
          <Globe className="h-5 w-5" />
          WFH / Remote
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="Fresh Graduates"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "default",
              className:
                "hover:bg-background4 flex h-full w-full flex-col items-center gap-2 border-[#0baeec] p-4 text-center text-[#0baeec] hover:text-[#0baeec] hover:shadow max-md:border-b-4 md:flex-row md:border-l-4 md:p-4 md:text-sm",
            }),
          )}
        >
          <GraduationCap className="h-5 w-5" />
          Fresh Graduates
        </Link>
      </li>
    </ul>
  );
};
