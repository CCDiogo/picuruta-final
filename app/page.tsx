import { Hero } from "@/components/home/hero";
import { Info } from "@/components/home/info";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
    </>
  );
}
