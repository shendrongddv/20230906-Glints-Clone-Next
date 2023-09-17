import { TabsDemo } from "./demo/tabs-demo";

export const SSearchPopular = () => {
  return (
    <section className="py-16 md:px-4">
      <div className="container flex flex-col gap-4">
        <h2 className="h2 max-md:mx-4">Popular Search</h2>

        {/* Tabs */}
        <TabsDemo />
      </div>
    </section>
  );
};
