// components/TopNav.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopNav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-b-neutral-200  fixed top-0 left-0 z-50">
            <div className=" mx-auto py-3 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-primary">issah1554</h1>

                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                <div
                    className={`${open ? "block" : "hidden"
                        } md:flex space-y-2 md:space-y-0 md:space-x-6 absolute md:static top-12 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
                >
                    <Link href="#about" className="text-gray-700 hover:text-primary">
                        About
                    </Link>
                    <Link href="#projects" className="text-gray-700 hover:text-primary">
                        Projects
                    </Link>
                    <Link href="#contact" className="text-gray-700 hover:text-primary">
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
