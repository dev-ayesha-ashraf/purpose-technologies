"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const ConditionalNavbar = () => {
    const pathname = usePathname();

    // If we are on the home page, return null so the page can render its own custom Navbar
    // This allows the home page to place the Navbar inside the hero section for specific styling
    if (pathname === "/") return null;

    return <Navbar />;
};

export default ConditionalNavbar;
