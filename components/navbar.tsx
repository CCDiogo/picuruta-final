'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const leftLinks = [
  { href: "/historia-picuruta", label: "Picuruta" },
  { href: "/marcas-parceiras", label: "Marcas" },
  { href: "/aulas-particulares", label: "Aulas Particulares" },
];

const rightLinks = [
  { href: "/aulas", label: "Aulas" },
  { href: "/historia-escola", label: "História da Escola" },
  { href: "/inscricao", label: "Inscrição" },
];  

export function Navbar() {
    const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[linear-gradient(145deg,#f6bc48_50%,#75cedf_50%)]">
      
      {/* LOGO CENTRAL */}
      <Link
        href="/"
        className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={90}
          height={90}
          className="object-contain"
          priority
        />
      </Link>

      {/* NAVBAR */}
      <div className="mx-auto flex h-full max-w-7xl items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-1 justify-end gap-10">
          {leftLinks.map((link) => {
            const isActive = pathname === link.href

            return (
            <Link key={link.href} href={link.href} className={cn(
                  "relative text-2xl font-medium transition-colors duration-300",
                  "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full",
                  "after:origin-left after:scale-x-0 after:bg-black",
                  "after:transition-transform after:duration-400",
                  "hover:after:scale-x-100",
                  isActive && "after:scale-x-100")}>
              {link.label}
            </Link>
          )})}
        </div>

        {/* ESPAÇO DA LOGO */}
        <div className="w-30" />

        {/* RIGHT SIDE */}
        <div className="flex flex-1 justify-start gap-10">
          {rightLinks.map((link) => {
            const isActive = pathname === link.href

            return (
            <Link key={link.href} href={link.href} className={cn(
                  "relative text-2xl font-medium transition-colors duration-300",
                  "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full",
                  "after:origin-left after:scale-x-0 after:bg-black",
                  "after:transition-transform after:duration-400",
                  "hover:after:scale-x-100",
                  isActive && "after:scale-x-100")}>
              {link.label}
            </Link>
            )
          })}
        </div>

      </div>
    </header>
  );
}