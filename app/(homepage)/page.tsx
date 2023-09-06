import { HomepageFeatures } from "@/components/h-features";
import { HomepageFindJobByCity } from "@/components/home-find-job-by-city";
import { HomepageOverview } from "@/components/home-overview";
import { SuccessStory } from "@/components/home-success-story";

export default function Homepage() {
  return (
    <>
      {/* Slides */}
      <section className="border-b px-4 py-16">
        <div className="container">
          <div>
            <h2 className="h2">Slides</h2>
          </div>
        </div>
      </section>
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

      {/* Job position & Company */}
      <section className="border-b px-4 py-16">
        <div className="container">
          <div>
            <h2 className="h2">Job position & Company</h2>
          </div>
        </div>
      </section>
      {/* ./ Job position & Company */}

      {/* CTA 1 */}
      <section className="border-b px-4 py-16">
        <div className="container">
          <div>
            <h2 className="h2">CTA 1</h2>
          </div>
        </div>
      </section>
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
