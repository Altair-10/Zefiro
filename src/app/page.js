import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
    <Link href="/home">home</Link>
    <Link href="/about">about</Link>
    </div>
  );
}
