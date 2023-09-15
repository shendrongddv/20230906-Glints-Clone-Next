import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { Search } from "lucide-react";

import { contentCities } from "@/content/content";

export const SSearchByCity = () => {
  return (
    <section className="border-b px-4 py-16">
      <div className="container flex flex-col items-center gap-4">
        {/* # */}
        <h2 className="h2 text-center font-bold">
          Temukan loker di kota besar atau sekitarmu
        </h2>

        {/* # */}
        <div>
          <Image
            src="/indonesia-map.webp"
            alt="Indonesia"
            width={990}
            height={331}
            className="h-auto w-full"
          />
        </div>

        {/* # */}
        <ul className="flex flex-wrap items-center justify-center gap-1 md:w-3/4 md:gap-2">
          {contentCities.slice(0, 12)?.map((item) => (
            <li key={item.label}>
              <Link
                href="/"
                aria-label={item.name}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className:
                      "flex items-center justify-center gap-2 text-center",
                  }),
                )}
              >
                <Search className="h-4 w-4 text-destructive" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
