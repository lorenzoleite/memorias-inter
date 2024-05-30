import Image from 'next/image';
import Link from 'next/link';
import { TiArrowBack } from 'react-icons/ti';

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-xl mx-auto py-4 px-3 md:flex md:items-center md:justify-between md:gap-6">
      <div className="block text-center md:text-left md:w-2/3">
        <h1 className="text-4xl md:text-8xl">404</h1>

        <div className="py-2" />

        <h2 className="text-lg md:text-xl">Você caiu no tapetão...</h2>
        <h2 className="text-xl md:text-3xl">Página não encontrada!</h2>

        <div className="py-3" />

        <div className="flex justify-center md:justify-start">
          <Link
            href="/"
            className="py-1 px-4 rounded-md duration-300 text-white hover:text-[#FFCA06] bg-[#E66E25]"
          >
            <span className="flex items-center gap-2">
              <TiArrowBack className="size-5" />
              Início
            </span>
          </Link>
        </div>
      </div>

      <div className="py-4" />

      <div className="flex justify-center">
        <Image
          src="/tapetao.gif"
          width={130}
          height={130}
          alt="Página não encontrada!"
        />
      </div>
    </main>
  );
}
