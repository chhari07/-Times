'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Home Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/BuinessBlog">Business Blog</HoveredLink>
            <HoveredLink href="/Personalblog">Personal Blog</HoveredLink>
          </div>
        </MenuItem>
  


        {/* Pages Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Pages">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/aboutus">About us </HoveredLink>
            <HoveredLink href="/authorpage">Author page</HoveredLink>
            <HoveredLink href="/SearchPages">Search Pages</HoveredLink>
            <HoveredLink href="/Signin">Sign in</HoveredLink>
            <HoveredLink href="/Signup">Sign up</HoveredLink>
            <HoveredLink href="/Privacy&Policy Pages">Privacy & Policy Page</HoveredLink>
          </div>
        </MenuItem>

        {/* Blogs Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Blogs">
          <div className="flex flex-col space-y-4 text-sm">
           
          </div>
        </MenuItem>

        {/* Docs Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Docs" />

        {/* Supports Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Supports" />
      </Menu>
    </div>
  );
}

export default Navbar;
