import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <span className="text-5xl bg-red-500">Hola padrino!!!</span>
      <Link href={'/contact'}>Contact</Link>
    </main>
  );
}
