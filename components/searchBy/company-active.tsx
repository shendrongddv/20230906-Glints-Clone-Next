import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { BrandLogo } from "@/config/dummy";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export const CompanyActive = () => {
  const items = BrandLogo;

  return (
    <ul className="flex flex-wrap gap-2">
      {items?.slice(0, 9)?.map((item) => (
        <li key={item.id}>
          <Link
            href="/"
            aria-label={item.name}
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "default",
                className: "h-full hover:bg-background hover:shadow",
              }),
            )}
          >
            <Image
              src={`brand/${item.media}`}
              alt={item.name}
              width={100}
              height={64}
              className="h-8 w-auto md:h-10"
            />
          </Link>
        </li>
      ))}
      <li>
        <Link
          href="/"
          aria-label="Lainnya"
          className={cn(
            buttonVariants({
              variant: "link",
              size: "default",
              className: "h-full font-semibold",
            }),
          )}
        >
          Lainnya
          <ChevronsRight className="ml-2 h-4 w-4" />
        </Link>
      </li>
    </ul>
  );
};
