import { SPromotion } from "@/components/s-promotion";
import { HomepageOverview } from "@/components/home-overview";
import { CTAEasyApply } from "@/components/cta-easy-apply";
import { SSocialProff } from "@/components/s-social-proof";
import { SBenefit } from "@/components/s-benefit";
import { SSearchByCity } from "@/components/s-search-by-city.tsx";
import { SExpertClass } from "@/components/s-expert-class";
import { SSearchPopular } from "@/components/s-search-popular";

export default function Homepage() {
  return (
    <>
      {/* Promotion */}
      <SPromotion />
      {/* ./ Promotion */}

      {/* Job Search */}
      <section className="border-b px-4 py-16">
        <div className="container">
          <div>
            <h2 className="h2">Job Search</h2>
          </div>
        </div>
      </section>
      {/* ./ Job Search */}

      {/* Overview */}
      <HomepageOverview />
      {/* ./ Overview */}

      {/* CTA: Easy Apply */}
      <CTAEasyApply />
      {/* ./ CTA: Easy Apply */}

      {/* Social Proff */}
      <SSocialProff />
      {/* ./ Social Proff */}

      {/* Benefit */}
      <SBenefit />
      {/* ./ Benefit */}

      {/* Search by City */}
      <SSearchByCity />
      {/* ./ Search by City */}

      {/* Expert Class */}
      <SExpertClass />
      {/* ./ Expert Class */}

      {/* Popular Search */}
      <SSearchPopular />
      {/* ./ Popular Search */}
    </>
  );
}
