import Image from "next/image";
import Link from "next/link";
import chantiImage from '@/app/assests/img/20250524_074524.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <span className="text-5xl bg-red-500">Hola padrino!!! Soy chanti chanti, cocooooooo</span>
      <Image src={chantiImage} width={500} height={500} alt='Imagen del reicito'/>
      <Link href={'/contact'}>Contact</Link>
    </main>
  );
}
