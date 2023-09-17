import { CompanyActive } from "./searchBy/company-active";
import { Popular } from "./searchBy/popular";
import { TermPopular } from "./searchBy/term-popular";
import { UrgentlyNeeded } from "./searchBy/urgently-needed";

export const SIntroduction = () => {
  return (
    <section className="px-4 py-16">
      <div className="container grid gap-16 md:grid-cols-2">
        {/* Col */}
        <div className="md:col-span-2">
          <h2 className="h2 text-center">Cari 25,000+ loker di Indonesia</h2>
        </div>

        {/* Col */}
        <div className="space-y-4 md:col-span-2">
          <h3 className="h4">Kategori pekerjaan populer</h3>

          <div className="flex flex-col-reverse gap-2 md:flex-row">
            {/* Col */}
            <Popular />

            {/* Col */}
            <TermPopular />
          </div>
        </div>

        {/* Col */}
        <div className="space-y-4">
          <h3 className="h4">Dibutuhkan segera</h3>
          <UrgentlyNeeded />
        </div>

        {/* Col */}
        <div className="space-y-4">
          <h3 className="h4">Perusahaan tepercaya sedang merekrut</h3>
          <CompanyActive />
        </div>
      </div>
    </section>
  );
};
