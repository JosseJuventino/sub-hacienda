"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex flex-row items-center gap-7 p-5 bg-white shadow-md">
            <Image src="/subway-logo-new.png" alt="" width={222} height={44} className="w-36" />
            <nav className="flex flex-row items-center gap-5">
                <Link
                    href="/"
                    className={`font-medium transition-colors duration-300 ${
                        pathname === "/" ? "text-[#019133]" : "text-gray-500"
                    }`}
                >
                    Documentos
                </Link>
                <Link
                    href="/form"
                    className={`font-medium transition-colors duration-300 ${
                        pathname === "/form" ? "text-[#019133]" : "text-gray-500"
                    }`}
                >
                    Formulario
                </Link>
            </nav>
        </header>
    );
}