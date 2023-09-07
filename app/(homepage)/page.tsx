import { HomepageCTA1 } from "@/components/h-cta-1";
import { HomepageFeatures } from "@/components/h-features";
import { HomepageFindJobByCity } from "@/components/home-find-job-by-city";
import { HomepageOverview } from "@/components/home-overview";
import { SuccessStory } from "@/components/home-success-story";
import { SlideBanner } from "@/components/slide-banner";

export default function Homepage() {
  return (
    <>
      {/* Slides */}
      <SlideBanner />
      {/* ./ Slides */}

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

      {/* CTA 1 */}
      <HomepageCTA1 />
      {/* ./ CTA 1 */}

      {/* Succes Stories */}
      <SuccessStory />
      {/* ./ Succes Stories */}

      {/* Features */}
      <HomepageFeatures />
      {/* ./ Features */}

      {/* Job by Cities */}
      <HomepageFindJobByCity />
      {/* ./ Job by Cities */}

      {/* Expert Class */}
      <section className="border-b px-4 py-16">
        <div className="container">
          <div>
            <h2 className="h2">Expert Class</h2>
          </div>
        </div>
      </section>
      {/* ./ Expert Class */}

      {/* Popular Search */}
      <section className="border-b px-4 py-16">
        <div className="container">
          <div>
            <h2 className="h2">Popular Search</h2>
          </div>
        </div>
      </section>
      {/* ./ Popular Search */}
    </>
  );
}
