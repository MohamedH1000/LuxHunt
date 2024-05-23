import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-[200px] py-[100px] max-md:p-10">
      <div className="backgroundImage">
        <p className="text-3xl font-bold text-white max-sm:text-[20px]">
          Welcome to LuxHunt Store
        </p>
        <Button className="dark:bg-black dark:text-white mt-10 hover:opacity-90 text-black bg-white">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}
