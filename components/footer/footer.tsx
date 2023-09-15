import { FooterFooter } from "./footer-footer";
import { FooterBody } from "./footer-body";

const Footer = () => {
  return (
    <footer className="bg-[url(/bg-1.webp)] bg-cover bg-center bg-no-repeat px-4 pt-16 text-sm text-white/80">
      <div className="container flex flex-col gap-16">
        {/* FooterBody */}
        <FooterBody />

        {/* FooterFooter */}
        <FooterFooter />
      </div>
    </footer>
  );
};

export default Footer;
