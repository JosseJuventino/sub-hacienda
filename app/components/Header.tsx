import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-row items-center gap-7 p-5 bg-white shadow-md">
            <Image src="/subway-logo-new.png" alt="" width={222} height={44} className="w-32"/>
            <nav>
                <Link href="/" className="text-gray-800 hover:text-[#019133] font-bold transition-colors duration-300">
                    Documentos
                </Link>
            </nav>
        </header>
    );
}