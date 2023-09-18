import { SiteLogoNavbar } from "../site-logo";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-white px-4 py-4">
      <div className="container flex items-center justify-between gap-8">
        {/* NavbarLogo */}
        <SiteLogoNavbar />

        {/* Desktop */}
        <NavbarDesktop />

        {/* Mobile */}
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Header;
