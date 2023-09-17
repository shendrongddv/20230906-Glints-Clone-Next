import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMobile } from "./nav-mobile";
import { SiteLogoNavbar } from "../site-logo";

export const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-4/5 flex-col gap-0 p-0"
      >
        <SheetHeader className="border-b p-4">
          <SheetClose asChild>
            <SiteLogoNavbar />
          </SheetClose>
        </SheetHeader>
        {/* SheetBody */}
        <NavMobile />
        {/* ./SheetBody */}
        <SheetFooter className="mt-auto p-4">
          <small className="mr-auto text-muted-foreground">
            © 2023 PT. Glints Indonesia Group
          </small>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
