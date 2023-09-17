import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { SearchByPopularity } from "@/config/dummy";

export const Popular = () => {
  const items = SearchByPopularity;

  return (
    <ul className="grid grid-cols-3 gap-2 md:w-3/4">
      {items?.map((item) => (
        <li key={item.id}>
          <Link
            href={item.id}
            aria-label={item.name}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "default",
                className:
                  "h-full w-full p-2 text-center text-xs hover:bg-background hover:shadow md:p-4 md:text-sm",
              }),
            )}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
