there is a mobile navigation i want you to help me build. I want to use shadcn compnents like the example im about to share.
I want to keep my desktop navigation /Users/morgan/projects/floot/components/nav-two.tsx the way it is. But as soon as the screen is a mobile i only want to see the logo and floot on the left and a hamburger menu item on the right (like in the example) that when clicked fires a sidebar as seen in the code example. The mobile sidebar should have all the current desktop links and buttons, and please make the colours all the same as the desktop nav

NAVBAR

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../logo";
import LogoMobile from "../logo-mobile";
import LogoMobileBlack from "../logo-mobile-black";
import LogoBlack from "../logo-black";
import { navItemsRight } from "@/data/navigation-home";
import { darkNavRoutes } from "@/data/navigation-dark-routes";

import { MobileSidebarHome } from "./mobile-sidebar-home";

function useDarkNav() {
  const pathname = usePathname();
  return darkNavRoutes.some((route) => pathname.startsWith(route));
}

function useStickyNav() {
  const pathname = usePathname();
  return pathname === "/real-estate/directory";
}

export default function NavHome() {
  const isDarkNav = useDarkNav();
  const isStickyNav = useStickyNav();

  // Choose logo and link color based on isDarkNav
  const logoDesktop = isDarkNav ? <LogoBlack /> : <Logo />;
  const logoMobile = isDarkNav ? <LogoMobileBlack /> : <LogoMobile />;
  const navLinkClassDesktop = isDarkNav
    ? "text-[#222] hover:text-gray-700"
    : "text-white hover:text-gray-200";
  // const navLinkClassMobile = isDarkNav
  // ? "text-[#222] hover:text-gray-700"
  // : "text-black text-md font-medium transition-colors";
  // const signInTextClass = isDarkNav
  // ? "text-[#222] hover:text-gray-700 cursor-pointer"
  // : "text-white hover:text-gray-200 cursor-pointer";

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={`hidden lg:flex items-center px-4 py-6 ${isStickyNav ? "sticky top-10" : "absolute top-10"} left-0 right-0 z-20 border-b border-[#A4A4A4] ${isStickyNav ? "bg-[#F7F5F1]" : "bg-none"}`}
      >
        {/* Left section - takes up 1/3 of space */}
        <div className="flex-1 flex justify-start">
          <div className="space-x-6">
            {/* {navItemsLeft.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={navLinkClassDesktop}
              >
                {item.label}
              </Link>
            ))} */}
          </div>
        </div>

        {/* Center section - logo always centered */}
        <div className="flex justify-center flex-1">
          <Link href="/" className="cursor-pointer">
            {logoDesktop}
          </Link>
        </div>

        {/* Right section - takes up 1/3 of space */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center space-x-6">
            <div className="space-x-6">
              {navItemsRight.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={navLinkClassDesktop}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`lg:hidden flex justify-between items-center p-4 ${isStickyNav ? "sticky top-12" : "absolute top-10"} left-0 right-0 z-50 ${isStickyNav ? "bg-[#F7F5F1] border-b border-[#A4A4A4]" : "bg-none"}`}
      >
        <Link href="/">{logoMobile}</Link>
        <MobileSidebarHome />
      </div>
    </>
  );
}


SIDEBAR

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import LogoMobileBlack from "../logo-mobile-black";
// import { useUser } from "@clerk/nextjs"
import { navItemsMobile } from "@/data/navigation-home";
import { darkNavRoutes } from "@/data/navigation-dark-routes";
import { usePathname } from "next/navigation";

function useDarkNav() {
  const pathname = usePathname();
  return darkNavRoutes.some((route) => pathname.startsWith(route));
}

export function MobileSidebarHome() {
  const isDarkNav = useDarkNav();
  const hamburgerIcon = isDarkNav ? "text-black" : "text-white";
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Hamburger trigger button - visible on mobile */}
      <SheetTrigger asChild>
        <div>
          <Menu className={`${hamburgerIcon} h-6 w-6`} />
          <span className="sr-only">Toggle navigation menu</span>
        </div>
      </SheetTrigger>

      {/* Sheet content with navigation */}
      <SheetContent side="left" className="p-0 w-80">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex h-full flex-col">
          {/* Header with logo */}
          <div className="flex items-center gap-2 border-b p-4">
            <LogoMobileBlack />
          </div>

          {/* Navigation items */}
          <div className="flex-1 overflow-auto">
            <nav className="">
              {navItemsMobile.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-lg px-3 py-3 text-base font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
