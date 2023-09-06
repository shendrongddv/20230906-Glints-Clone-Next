import { SiteLogoNavbar } from "../site-logo";
import { NavbarButton } from "./navbar-button";
import { NavbarNav } from "./navbar-nav";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 w-full border-b bg-white px-4 py-4">
      <div className="container flex items-center justify-between gap-8">
        {/* NavbarLogo */}
        <SiteLogoNavbar />

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between md:gap-4">
          {/* NavbarNav */}
          <NavbarNav />

          {/* NavbarButtons */}
          <NavbarButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
