import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { SearchByUrgentlyNeeded } from "@/config/dummy";

export const UrgentlyNeeded = () => {
  const items = SearchByUrgentlyNeeded;

  return (
    <ul className="flex flex-wrap gap-2">
      {items?.map((item) => (
        <li key={item.id}>
          <Link
            href={item.id}
            aria-label={item.name}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "default",
                className: "hover:border",
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
