import Link from "next/link";

import { LucideIcon } from "lucide-react";

import { siteSocialMedia } from "@/content/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const FooterFooter = () => {
  return (
    <div className="flex flex-col-reverse gap-4 border-t border-white/25 py-6 md:flex-row md:items-center md:justify-between">
      {/* Col */}
      <span className="text-sm font-medium text-white/80">
        © 2023 PT. Glints Indonesia Group
      </span>

      {/* Col */}
      <ul className="flex max-md:-translate-x-2">
        {siteSocialMedia?.map((item) => (
          <li key={item.id}>
            <SocialItem label={item.label} url={item.url} icon={item.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// SocialItem
type SocialItemProps = {
  label: string;
  url: string;
  icon: LucideIcon;
};

export const SocialItem = ({ label, url, icon: Icon }: SocialItemProps) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "link",
          size: "icon",
          className: "text-white hover:text-white/80",
        }),
      )}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};
