"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopNav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-b-neutral-200 fixed top-0 left-0 z-50">
            <div className="mx-auto py-2 px-6 flex justify-between items-center">

                {/* Logo + Name */}
                <div className="flex items-center">
                    {/* <span className="text-3xl font-extrabold font-sans">5t</span> */}
                    <span className="text-2xl font-bold text-primary hidden md:inline ml-1">
                        IssaH
                    </span>
                </div>


                {/* Hamburger button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* Nav Links */}
                <div
                    className={`${open ? "block" : "hidden"
                        } md:flex space-y-2 md:space-y-0 md:space-x-6 absolute md:static top-12 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 items-center`}
                >
                    <Link href="#about" className="text-gray-700 hover:text-primary pt-1">
                        About
                    </Link>
                    <Link href="#projects" className="text-gray-700 hover:text-primary pt-1">
                        Projects
                    </Link>
                    <Link href="#contact" className="text-gray-700 hover:text-primary pt-1">
                        Showcase
                    </Link>
                    <a href="https://github.com/issah1554" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github text-2xl text-gray-700 hover:text-primary"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}
