import { SlideSocialProff } from "./slide/social-proof";

export const SSocialProff = () => {
  return (
    <section className="bg-[url(/bg-2.webp)] bg-cover bg-center bg-no-repeat py-16 md:px-4">
      <div className="container flex flex-col gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-2 text-center max-md:px-4">
          <h2 className="h2">5 juta talenta dapat kerja via Glints</h2>
          <p>Simak kisah mereka dapat pekerjaan via Glints. Kini giliranmu!</p>
        </div>

        {/* Content */}
        <div className="w-full">
          <SlideSocialProff />
        </div>
      </div>
    </section>
  );
};
