"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopNav() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className=" fixed top-0 left-0 z-50 w-full bg-linear-to-b
             from-white/70 to-white/40 backdrop-blur-xs
            shadow-sm h-15 flex items-stretch">

            <Link href="/">
                <span className="hidden md:flex bg-primary-600 hover:bg-primary-700 text-white text-4xl 
                  font-bold h-full px-4 items-center justify-center cursor-pointer">
                    <i className="bi bi-5-circle leading-none"></i>
                </span>
            </Link>

            <div className="mx-auto px-6 h-full flex items-center justify-between w-full">
                {/* LEFT: Nav */}
                <div className="flex items-center gap-8">

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="#about" className="text-main-500 hover:text-primary-600">
                            About
                        </Link>
                        <Link href="#projects" className="text-main-500 hover:text-primary-600">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-main-500 hover:text-primary-600">
                            Showcase
                        </Link>
                    </div>
                </div>

                {/* RIGHT: Socials + Theme */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="https://www.linkedin.com/in/issa-h-700814259/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-main-700 hover:text-primary-600"
                    >
                        <i className="bi bi-linkedin text-xl" />
                    </Link>

                    <a
                        href="https://github.com/issah1554"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-main-700 hover:text-primary-600"
                    >
                        <i className="bi bi-github text-xl" />
                    </a>

                    {/* Theme toggle */}
                    <button
                        aria-label="Toggle theme"
                        className="text-main-700 hover:text-primary-600"
                    >
                        <i className="bi bi-moon-stars text-xl" />
                    </button>
                </div>

                {/* Hamburger (mobile) */}
                <button
                    className="md:hidden text-main-700"
                    onClick={() => setOpen(!open)}
                >
                    <i className="bi bi-list text-2xl" />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    className="
            md:hidden
            px-6 py-4
            flex flex-col gap-4
            bg-white/80 backdrop-blur-sm
            border-t border-white/30
          "
                >
                    <Link href="#about" onClick={() => setOpen(false)}>
                        About
                    </Link>
                    <Link href="#projects" onClick={() => setOpen(false)}>
                        Projects
                    </Link>
                    <Link href="#contact" onClick={() => setOpen(false)}>
                        Showcase
                    </Link>

                    <div className="flex gap-4 pt-2">
                        <a
                            href="https://www.linkedin.com/in/issa-h-700814259/"
                            target="_blank"
                        >
                            <i className="bi bi-linkedin text-xl" />
                        </a>

                        <a href="https://github.com/issah1554" target="_blank">
                            <i className="bi bi-github text-xl" />
                        </a>
                        <button>
                            <i className="bi bi-moon-stars text-xl" />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
