import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { contentNavbarLinks } from "@/content/site";

export const NavbarNav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        {contentNavbarLinks?.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              aria-label={item.label}
              className={cn(
                buttonVariants({
                  variant: "outline",
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
