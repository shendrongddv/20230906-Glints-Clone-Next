import {
  contentJobPositions,
  contentJobSearchCategories,
} from "@/content/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LucideIcon } from "lucide-react";

export const HomepageOverview = () => {
  return (
    <section className="border-b px-4 py-16">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Popular category */}
          <div className="space-y-4 md:col-span-2">
            {/* # */}
            <h2 className="h3 font-bold">Kategori pekerjaan populer</h2>

            {/* # */}
            <div className="flex flex-col-reverse gap-1 md:flex-row md:gap-2">
              {/* Col */}
              <ul className="grid grid-cols-3 gap-1 md:w-3/4 md:gap-2">
                {contentJobPositions.slice(0, 9)?.map((item) => (
                  <li key={item.label}>
                    <Link
                      href="/"
                      aria-label={item.name}
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "default",
                          className:
                            "flex h-full items-center justify-center bg-white text-center",
                        }),
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Col */}
              <ul className="grid grid-cols-3 justify-items-stretch gap-1 md:w-1/4 md:grid-cols-1 md:gap-2">
                {contentJobSearchCategories?.map((item) => (
                  <li key={item.label}>
                    <JobItem
                      name={item.name}
                      label={item.label}
                      icon={item.icon}
                      color={item.color}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Urgently Needed */}
          <div className="space-y-4">
            {/* # */}
            <h2 className="h3 font-bold">Dibutuhkan segera</h2>

            {/* # */}
            <ul className="flex flex-wrap gap-1 md:gap-2">
              {contentJobPositions.slice(0, 14)?.map((item) => (
                <li key={item.label}>
                  <Link
                    href="/"
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({
                        variant: "secondary",
                        size: "default",
                        className:
                          "flex items-center justify-center text-center",
                      }),
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trusted Company */}
          <div className="space-y-4">
            <h2 className="h3 font-bold">
              Perusahaan tepercaya sedang merekrut
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

// JobItem
type JobItemProps = {
  name: string;
  label: string;
  icon: LucideIcon;
  color: string;
};

const JobItem = ({ name, label, icon: Icon, color }: JobItemProps) => {
  return (
    <Link
      href="/"
      aria-label={name}
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "default",
          className: `border-[${color}] text-[${color}] flex h-full flex-col items-center gap-2 bg-white text-center max-md:border-b-4 md:flex-row md:justify-center md:border-l-4`,
        }),
      )}
    >
      <Icon className="h-5 w-5" />
      {name}
    </Link>
  );
};
