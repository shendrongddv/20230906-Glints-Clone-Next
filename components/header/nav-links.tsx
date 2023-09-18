import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { navbarNav } from "@/config/site";

export const NavLinks = () => {
  const items = navbarNav;

  return (
    <nav>
      <ul className="flex items-center justify-center gap-1">
        {items?.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              aria-label={item.label}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "",
                }),
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
