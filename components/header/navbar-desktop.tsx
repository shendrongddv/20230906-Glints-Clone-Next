import { NavButtons } from "./nav-buttons";
import { NavLinks } from "./nav-links";

export const NavbarDesktop = () => {
  return (
    <div className="hidden md:flex md:flex-1 md:items-center md:justify-between md:gap-4">
      {/* NavbarNav */}
      <NavLinks />

      {/* NavbarButtons */}
      <NavButtons />
    </div>
  );
};
