import Image from "next/image";

import { contentSuccessStory } from "@/content/content";

export const SSocialProff = () => {
  return (
    <section className="bg-[url(/bg-2.png)] bg-cover bg-center bg-no-repeat px-4 py-16">
      <div className="container space-y-8">
        {/* Title */}
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="h2 font-bold">
            5 juta talenta dapat kerja via Glints
          </h2>
          <p className="font-medium">
            Simak kisah mereka dapat pekerjaan via Glints. Kini giliranmu!
          </p>
        </div>

        {/* Content */}
        <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
          {contentSuccessStory?.map((item) => (
            <li key={item.id}>
              <div className="flex h-full gap-4 rounded-3xl border-x-lime-50 bg-white p-4 md:flex-col">
                {/* # */}
                <div className="shrink-0">
                  <Image
                    src={`/${item.avatar}`}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="aspect-1 h-16 w-auto rounded-full ring-1 ring-input ring-offset-2 md:h-20"
                  />
                </div>

                {/* # */}
                <div className="flex flex-col gap-3">
                  {/* ## */}
                  <p className="text-sm">{item.content}</p>

                  {/* ## */}
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-semibold">
                      {item.name}&nbsp;
                      <small className="font-normal text-foreground/80">
                        ({item.age}&nbsp;tahun),
                      </small>
                    </h4>
                    <span className="text-xs font-semibold text-foreground/80">
                      {item.job}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
