import { SPromotion } from "@/components/s-promotion";
import { CTAEasyApply } from "@/components/cta-easy-apply";
import { SSocialProff } from "@/components/s-social-proof";
import { SBenefit } from "@/components/s-benefit";
import { SSearchByCity } from "@/components/s-search-by-city.tsx";
import { SExpertClass } from "@/components/s-expert-class";
import { SSearchPopular } from "@/components/s-search-popular";
import { SIntroduction } from "@/components/s-introduction";

export default function Homepage() {
  return (
    <>
      {/* Promotion */}
      <SPromotion />
      {/* ./ Promotion */}

      {/* Introduction */}
      <SIntroduction />
      {/* ./ Introduction */}

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
